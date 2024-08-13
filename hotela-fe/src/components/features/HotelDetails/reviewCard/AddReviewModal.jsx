import PropTypes from "prop-types";
import { Modal, Textarea, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";

const AddReviewModal = ({ opened, onClose }) => {
  const form = useForm({
    initialValues: {
      name: "",
      review: "",
    },

    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 characters" : null,
      review: (value) =>
        value.length < 10 ? "Review must have at least 10 characters" : null,
    },
  });

  const handleSubmit = (values) => {
    // Add your submit logic here
    console.log("Form values:", values);
    onClose(); // Close the modal after submission
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      size="lg"
      withCloseButton={false}
    >
      <Box>
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <Textarea
            label="Your Review"
            placeholder="Write your review here"
            {...form.getInputProps("review")}
            required
            withAsterisk={false}
            labelProps={{
              style: {
                fontSize: "18px",
              },
            }}
            inputProps={{
              style: {
                height: "200px", // Increase the height of the textarea
              },
            }}
          />

          <Group align="center" justify="flex-end" mt="md">
            <Button onClick={onClose} bg={"red"} radius={"xl"}>
              Cancel
            </Button>
            <Button type="submit" radius={"xl"}>
              Submit Review
            </Button>
          </Group>
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
