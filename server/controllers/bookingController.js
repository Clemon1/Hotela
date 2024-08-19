import bookings from "../models/bookingModel.js";
import roomType from "../models/roomType.js";
import users from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(`${process.env.STRIPE_TEST_URL}`);
// get all bookings
export const getAllBookings = async (req, res) => {
  try {
    const data = await bookings
      .find()
      .populate("userId")
      .populate("hotelId")
      .populate("rooms")
      .exec();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get all users bookings
export const getUserBookings = async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(404).json({ message: "No user found" });
    }
    const data = await bookings
      .find({ userId: user._id })
      .populate("userId")
      .populate("hotelId")
      .populate("rooms")
      .exec();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// getting details of a particular booking
export const getSingleBookings = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await bookings
      .findById(id)
      .populate("userId")
      .populate("hotelId")
      .populate("rooms")
      .exec();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// add a new booking
export const newBooking = async (req, res) => {
  try {
    const { hotel, rooms, price, checkIn, checkOut, totalGuest } = req.body;
    const user = req.user;
    console.log("USER:", user);
    const activeUser = await users.findOne({ _id: user });
    const roomData = await roomType.findOne({ _id: rooms });
    console.log("roomData:", roomData);

    // check for  available rooms
    if (roomData.noOfRooms <= 0) {
      return res.status(404).json({ message: "Room is not available" });
    }
    // checking if the total guest matches the maximum occupancy of the room

    if (totalGuest > roomData.maxOccupancy) {
      return res.status(404).json({
        message: `Sorry the number of guest is above the maximum occupancy of this room`,
      });
    }
    // awarding point based on the type of room selected
    switch (roomData.category) {
      case "Standard":
        activeUser.points += 2.3;
        break;
      case "Deluxe":
        activeUser.points += 4.99;
        break;
      case "Suite":
        activeUser.points += 6.99;
        break;
      case "Luxury":
        activeUser.points += 9.99;
        break;
      default:
        return (activeUser.points = 0);
    }

    const bookedData = await bookings.create({
      userId: user._id,
      hotel,
      rooms,
      price,
      checkIn,
      checkOut,
      totalGuest,
    });
    // takes note of the total number of rooms after booking was successful
    roomData.noOfRooms--;
    await roomData.save();
    await activeUser.save();

    res.status(201).json(bookedData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//updating booking detail in payments status
export const updateBokingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const bookedDetails = await bookings.findByIdAndUpdate(id, {
      $set: { bookingStatus: req.body },
    });
    res.status(200).json(bookedDetails);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// stripe payment methods
export const stripePayment = async (req, res) => {
  try {
    const { hotel, rooms, price, checkIn, checkOut, totalGuest } = req.body;
    const user = req.user;
    const roomDetails = await roomType
      .findOne({ _id: rooms })
      .populate("hotel")
      .exec();
    console.log(roomDetails);

    let items = [
      {
        price_data: {
          currency: "GBP",
          product_data: {
            name: `${roomDetails.name} of ${roomDetails.hotel.name}`,
          },
          unit_amount: 100 * price,
        },
        quantity: 1,
      },
    ];
    const customer = await stripe.customers.create({
      email: user.email,
      metadata: {
        userId: user._id,
        hotel,
        rooms,
        price,
        checkIn,
        checkOut,
        totalGuest,
      },
    });
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer: customer.id,
      line_items: items,
      mode: "payment",
      success_url: `http://localhost:5173/success`,
      cancel_url: `http://localhost:5173/cancelled`,
    });

    res.status(303).json(session.url);
  } catch (err) {
    console.log(err.message);

    res.status(500).json(err.message);
  }
};

// //Stripe WebHook

export const stripeHook = async (req, res) => {
  // const sig = req.headers["stripe-signature"];

  // let event;

  // try {
  //   event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  // } catch (err) {
  //   res.status(400).send(`Webhook Error: ${err.message}`);
  //   return;
  // }
  const event = req.body;
  // Handle the event
  switch (event.type) {
    case "payment_intent.succeeded":
      const paymentIntent = event.data.object;
      console.log("Event Listened", paymentIntent);
      console.log("Metadata", paymentIntent && paymentIntent.customer);
      console.log(
        "Metadata",
        paymentIntent &&
          paymentIntent.customer &&
          paymentIntent.customer.metadata,
      );

      const customer = await stripe.customers.retrieve(
        paymentIntent && paymentIntent.customer,
      );
      console.log("Metadata", customer.metadata);

      // const newCarBooking = new booking({
      //   userId: customer.metadata.userId,
      //   carId: customer.metadata.carId,
      //   carName: customer.metadata.carName,
      //   price: customer.metadata.price,
      //   email: customer.metadata.email,
      //   location: customer.metadata.location,
      //   fullName: customer.metadata.fullName,
      //   dateFrom: customer.metadata.dateFrom,
      //   dateTo: customer.metadata.dateTo,
      // });

      // // awarding point based on the type of room selected
      // switch (roomData.category) {
      //   case "Standard":
      //     activeUser.points += 2.3;
      //     break;
      //   case "Deluxe":
      //     activeUser.points += 4.99;
      //     break;
      //   case "Suite":
      //     activeUser.points += 6.99;
      //     break;
      //   case "Luxury":
      //     activeUser.points += 9.99;
      //     break;
      //   default:
      //     return (activeUser.points = 0);
      // }

      // // const bookedData = await bookings.create({
      // //   userId,
      // //   hotel,
      // //   rooms,
      // //   price,
      // //   checkIn,
      // //   checkOut,
      // //   totalGuest,
      // // });
      // // takes note of the total number of rooms after booking was successful
      // roomData.noOfRooms--;
      // await roomData.save();
      // await activeUser.save();

      console.log(noti);
      return res.status(200).json("Booked successfully");

      break;

    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a res to acknowledge receipt of the event
  res.json({ received: true });
};
