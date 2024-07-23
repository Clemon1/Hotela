import { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Group,
  Title,
  useMantineTheme,
  TextInput,
} from "@mantine/core";
import { IoClose } from "react-icons/io5";

function OTP({ onClose }) {
  const theme = useMantineTheme();
  const [otp, setOtp] = useState("");

  const handleOtpChange = (event) => {
    setOtp(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your OTP verification logic here
    alert("OTP: " + otp);
    onClose(); // Close the OTP modal after verification
  };

  return (
    <Box c={"#000814"}>
      <Group align="center" justify="space-between">
        <Title order={2} fw={700} c={theme.colors.blue[6]}>
          Verify OTP
        </Title>
        <IoClose style={{ cursor: "pointer" }} size={30} onClick={onClose} />
      </Group>

      <Title order={2} fw={600} ta={"center"} my={"20"}>
        Enter the OTP sent to your email
      </Title>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <TextInput
          label="OTP"
          placeholder="Enter your OTP"
          value={otp}
          onChange={handleOtpChange}
          required
        />
        <Button type="submit">Verify</Button>
      </form>
    </Box>
  );
}

OTP.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default OTP;
