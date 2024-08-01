import { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Group, Title, PinInput, Text } from "@mantine/core";
import { IoClose } from "react-icons/io5";
import { useVerifyAccountMutation } from "../../Store/Slices/authenticationSlice";
import { currentUser } from "../../Store/auth/authSlice";
import { useSelector } from "react-redux";

function OTP({ onClose, onOpenSigUp }) {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);
  const user = useSelector(currentUser);
  console.log(user);
  const [verifyOTP, { isLoading }] = useVerifyAccountMutation();

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const handleSubmit = async (event) => {
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
      onClose(); // Close the OTP modal after verification
    } catch (err) {
      console.log(err);
    }
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
        }}>
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
          h={50}
          fz={15}
          loading={isLoading}
          radius='xl'
          fullWidth>
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
