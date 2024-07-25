import { Box, Button, Group, PinInput, Text, Title } from "@mantine/core";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import PropTypes from "prop-types";

function ConfrimAccount({
  onOpenForgotPassword,
  onClose,
  onOpenResetPassword,
}) {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);
  const handlecloseModal = () => {
    onClose();
    onOpenForgotPassword();
  };

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your OTP verification logic here
    if (otp.length !== 5) {
      setError("Please enter a 5-digit OTP.");
      return;
    } else {
      onOpenResetPassword();
    }

    alert("OTP: " + otp);
    onClose(); // Close the OTP modal after verification
  };

  return (
    <Box
      style={{
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",

        maxWidth: "400px",
        margin: "auto",
        fontFamily: "Inter, sans-serif",
        position: "relative",
      }}>
      <Group justify='space-between'>
        <Title
          order={2}
          style={{
            marginBottom: "20px",
            fontFamily: "Inter, sans-serif",
          }}>
          Find your account
        </Title>
        <IoClose
          style={{ cursor: "pointer", marginBottom: "20px" }}
          size={35}
          onClick={handlecloseModal}
        />
      </Group>

      <Text style={{ marginBottom: "10px", fontFamily: "Inter, sans-serif" }}>
        We sent a code to your email. Enter that code to confirm your account
      </Text>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <PinInput
          size='xl'
          length={5}
          placeholder='-'
          type='number'
          value={otp}
          onChange={handleOtpChange}
          error={error}
        />
        {error && <Text c='red'>{error}</Text>}

        <Button
          type='submit'
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
          }}>
          Continue
        </Button>
      </form>
    </Box>
  );
}

ConfrimAccount.propTypes = {
  onClose: PropTypes.func.isRequired,
  onOpenResetPassword: PropTypes.func.isRequired,
  onOpenForgotPassword: PropTypes.func.isRequired,
};

export default ConfrimAccount;
