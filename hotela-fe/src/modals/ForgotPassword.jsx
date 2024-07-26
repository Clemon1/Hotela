import { Box, Button, Group, Text, TextInput, Title } from "@mantine/core";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import PropTypes from "prop-types";

function ForgotPassword({ onClose, onOpenLogin, onOpenConfirmAccount }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
    if (error) {
      setError("");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setError("Invalid email address");
    } else {
      setError("");
      alert("Email: " + email);
      onOpenConfirmAccount();
    }
  };

  const handlecloseModal = () => {
    onClose();
    onOpenLogin();
  };
  return (
    <Box
      style={{
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
        margin: "auto",
        fontFamily: "Inter, sans-serif",
        position: "relative",
      }}
    >
      <Group justify="space-between">
        <Title
          order={2}
          style={{
            marginBottom: "20px",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Find your account
        </Title>
        <IoClose
          style={{ cursor: "pointer", marginBottom: "20px" }}
          size={35}
          onClick={handlecloseModal}
        />
      </Group>

      <Text style={{ marginBottom: "10px", fontFamily: "Inter, sans-serif" }}>
        Enter your email
      </Text>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <TextInput
          label="Email Address"
          placeholder="Enter your email address"
          value={email}
          onChange={handleEmailChange}
          error={error}
          required
          style={{ fontFamily: "Inter, sans-serif" }}
          withAsterisk={false}
        />

        <Button
          type="submit"
          style={{
            height: "50px",
            fontSize: "20px",
            borderRadius: "25px",
            backgroundColor: "#007BFF",
            color: "#fff",
            fontFamily: "Inter, sans-serif",
            transition: "background-color 0.3s, transform 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#0056b3";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#007BFF";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Continue
        </Button>
      </form>
    </Box>
  );
}

ForgotPassword.propTypes = {
  onClose: PropTypes.func.isRequired,
  onOpenConfirmAccount: PropTypes.func.isRequired,
  onOpenLogin: PropTypes.func.isRequired,
};

export default ForgotPassword;
