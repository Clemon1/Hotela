import { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Group, Title, PinInput, Text } from "@mantine/core";
import { IoClose } from "react-icons/io5";

function OTP({ onClose, onOpenSigUp }) {
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
    }

    alert("OTP: " + otp);
    onClose(); // Close the OTP modal after verification
  };

  const handlecloseModal = () => {
    onClose();
    onOpenSigUp();
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
          Verify OTP
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
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <PinInput
          size="xl"
          length={5}
          placeholder="-"
          type="number"
          value={otp}
          onChange={handleOtpChange}
          error={error}
        />
        {error && <Text c="red">{error}</Text>}
        <Button type="submit" h={50} fz={15} radius="xl" fullWidth>
          Verify
        </Button>
      </form>
    </Box>
  );
}

OTP.propTypes = {
  onClose: PropTypes.func.isRequired,
  onOpenSigUp: PropTypes.func.isRequired,
};

export default OTP;
