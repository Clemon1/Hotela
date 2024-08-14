import PropTypes from "prop-types";
import {
  Modal,
  Textarea,
  Button,
  Group,
  Box,
  Rating,
  Text,
  Title,
  Input,
  Divider,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import StarRating from "./StarRating";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const AddReviewModal = ({ opened, onClose }) => {
  const [rating, setRating] = useState(1);
  console.log(rating);

  const form = useForm({
    initialValues: {
      review: "",
      rating: 0,
    },

    validate: {
      review: (value) =>
        value.length < 10 ? "Review must have at least 10 characters" : null,
      rating: (value) => (value === 0 ? "Please provide a rating" : null),
    },
  });

  const handleSubmit = (values) => {
    console.log("Form values:", values);
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      radius={"md"}
      centered
      size={500}
      title={
        <Text fz={20} fw={500}>
          Write a Review
        </Text>
      }
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
      closeButtonProps={{
        icon: <IoClose size={50} stroke={1.5} />,
      }}
    >
      <Divider mb={20} />

      <Box>
        <form
          onSubmit={form.onSubmit((values) => handleSubmit(values))}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <Title ta={"center"} fw={700} fz={{ base: 27, sm: 30 }}>
            How Was Your Experience with Us?
          </Title>

          <Text ta={"center"} size="sm">
            We value your feedback and want to ensure every guest enjoys an
            exceptional stay. Share your thoughts and help us continue to
            elevate our service.
          </Text>

          <StarRating rating={rating} setRating={setRating} />

          <Textarea
            size="lg"
            placeholder="Add a comment"
            radius={"md"}
            autosize
            minRows={4}
            maxRows={4}
            required
          />

          <Button type="submit" radius="xl" size="md">
            Submit Review
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

AddReviewModal.propTypes = {
  opened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddReviewModal;
