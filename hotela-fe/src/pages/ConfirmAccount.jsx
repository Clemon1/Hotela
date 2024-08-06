import { Box, Button, Group, PinInput, Text, Title } from "@mantine/core";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import PropTypes from "prop-types";

function ConfirmAccount() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);

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
      //   onOpenResetPassword();
    }

    alert("OTP: " + otp);
    // onClose(); // Close the OTP modal after verification
  };

  return (
    <Box
      style={{
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "12px", // Slightly rounded corners
        maxWidth: "400px",
        margin: "auto",
        fontFamily: "Inter, sans-serif",
        position: "relative",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Added shadow for better depth
      }}
    >
      <Title
        order={2}
        style={{
          marginBottom: "20px",
          fontFamily: "Inter, sans-serif",
          fontSize: "1.5rem",
        }}
      >
        Verify Code
      </Title>

      <Text style={{ marginBottom: "15px", fontFamily: "Inter, sans-serif" }}>
        We sent a code to your email. Enter that code to confirm your account.
      </Text>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <PinInput
          size="xl"
          length={5}
          placeholder="-"
          type="number"
          value={otp}
          onChange={handleOtpChange}
          error={error}
          style={{ marginBottom: "15px" }} // Added bottom margin
        />
        {error && (
          <Text color="red" style={{ textAlign: "center" }}>
            {error}
          </Text>
        )}

        <Button
          type="submit"
          style={{
            height: "50px",
            fontSize: "18px", // Adjusted font size for better balance
            borderRadius: "25px",
            backgroundColor: "#007BFF",
            color: "#fff",
            fontFamily: "Inter, sans-serif",
            transition: "background-color 0.3s, transform 0.3s",
            width: "100%", // Full width button
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

ConfirmAccount.propTypes = {
  onClose: PropTypes.func.isRequired,
  onOpenResetPassword: PropTypes.func.isRequired,
  onOpenForgotPassword: PropTypes.func.isRequired,
};

export default ConfirmAccount;
