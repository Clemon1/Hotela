import React, { useState } from "react";
import { Box, Button, TextInput, Title, Stack } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function ResetPassword({ onClose, onCloseForgotPassword, onOpenLogin }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <Title order={2} fw={600} ta={"center"}>
        Reset your password
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
          <Button type="submit" h={50} fz={15} radius="xl">
            Reset Password
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default ResetPassword;
