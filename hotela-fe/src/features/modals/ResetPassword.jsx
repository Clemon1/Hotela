import { useState } from "react";
import { Box, Button, TextInput, Title, Stack, Group } from "@mantine/core";
import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";

function ResetPassword({
  onClose,
  onCloseForgotPassword,
  onOpenLogin,
  openConfirmAccount,
}) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.currentTarget.value);
    if (error) {
      setError("");
    }
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.currentTarget.value);
    if (error) {
      setError("");
    }
  };

  const handlecloseModal = () => {
    onClose();
    openConfirmAccount();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
      alert("Password has been reset successfully");
      onCloseForgotPassword();
      onClose();
      onOpenLogin();
    }
  };

  return (
    <Box
      c={"#000814"}
      pb={30}
      p={20}
      style={{
        borderRadius: "12px",
        maxWidth: 400,
        margin: "0 auto",

        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <Group justify="space-between" align="center">
        <Title order={2} fw={600} ta={"center"}>
          Reset your password
        </Title>
        <IoClose
          style={{ cursor: "pointer", marginTop: "5px" }}
          size={35}
          onClick={handlecloseModal}
        />
      </Group>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <TextInput
          label="New Password"
          placeholder="Enter your new password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
          withAsterisk={false}
        />
        <TextInput
          label="Confirm Password"
          placeholder="Confirm your new password"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
          withAsterisk={false}
          error={error}
        />
        <Stack gap={5}>
          <Button type="submit" h={45} fz={15} radius="xl">
            Reset Password
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

ResetPassword.propTypes = {
  onClose: PropTypes.func.isRequired,
  onCloseForgotPassword: PropTypes.func.isRequired,
  onOpenLogin: PropTypes.func.isRequired,
  openConfirmAccount: PropTypes.func.isRequired,
};

export default ResetPassword;
