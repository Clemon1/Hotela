const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    if (!validateEmail(email)) {
      setError("Invalid email address");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else if (!agree) {
      setError("You must agree to the terms and conditions");
    } else {
      dispatch(
        authenticate(
          await register({
            firstName,
            lastName,
            email,
            password,
          }).unwrap(),
        ),
      );
      notifications.show({
        title: "Successfully",
        message: "Verification code was sent to your email",
        color: "teal",
        radius: "lg",

        icon: <IoMdCheckmarkCircle fontSize={18} />,
      });
      onClose();
      onSignUpSuccess(); // Open the OTP modal after successful sign-up
      setError("");
    }
  } catch (err) {
    console.log(err);
    notifications.show({
      title: "Error",
      message: `${err}`,
      color: "red",
      radius: "lg",
      icon: <IoMdCloseCircle fontSize={18} />,
    });
  }
};

const handleLogin = async (event) => {
  event.preventDefault();
  try {
    if (!validateEmail(email)) {
      setError("Invalid email address");
    } else {
      dispatch(
        authenticate(
          await signIn({
            email,
            password,
          }).unwrap(),
        ),
      );
      notifications.show({
        title: "Logged In Successfully",
        radius: "lg",
        message: "",
        color: "teal",
        icon: <IoMdCheckmarkCircle fontSize={18} />,
      });
      setError("");
      onClose();
    }
  } catch (err) {
    notifications.show({
      title: "Error",
      message: `${err.data}`,
      radius: "lg",
      color: "red",
      icon: <IoMdCloseCircle fontSize={18} />,
    });

    console.log(err);
  }
};

const handleOTP = async (event) => {
  event.preventDefault();
  try {
    // Add your OTP verification logic here
    if (otp.length !== 5) {
      setError("Please enter a 5-digit OTP.");
      return;
    }
    await verifyOTP({
      userId: user && user.userInfo && user.userInfo._id,
      otp,
    }).unwrap();
    notifications.show({
      title: "Verification Successful",
      radius: "lg",
      message: "",
      color: "teal",
      icon: <IoMdCheckmarkCircle fontSize={18} />,
    });
    onClose(); // Close the OTP modal after verification
  } catch (err) {
    notifications.show({
      title: "Error in verifying account!",
      message: `${err.data}`,
      radius: "lg",
      color: "red",
      icon: <IoMdCloseCircle fontSize={18} />,
    });
    console.log(err);
  }
};
