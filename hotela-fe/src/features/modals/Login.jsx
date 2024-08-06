import { useState, useCallback, useEffect } from "react";
import {
  Box,
  Button,
  Group,
  TextInput,
  Title,
  useMantineTheme,
  Stack,
} from "@mantine/core";
import { IoClose } from "react-icons/io5";

function Login() {
  const theme = useMantineTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
    if (error) {
      setError("");
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setError("Invalid email address");
    } else {
      setError("");
      alert("Email: " + email + "\nPassword: " + password);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <Box
      c={"#000814"}
      pb={30}
      py={15}
      px={20}
      style={{
        borderRadius: "12px",
        maxWidth: 400,
        margin: "0 auto",
      }}
    >
      <Group align="center" justify="space-between">
        <Title order={2} fw={700} c={theme.colors.blue[6]}>
          Hotela
        </Title>
        <IoClose style={{ cursor: "pointer" }} size={30} onClick={onClose} />
      </Group>

      <Title order={2} fw={600} ta={"center"} my={"20"}>
        Log in to your account
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
          label="Email Address"
          placeholder="Enter your email address"
          value={email}
          onChange={handleEmailChange}
          error={error}
          required
          withAsterisk={false}
          data-autofocus
        />
        <TextInput
          label="Password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
          withAsterisk={false}
        />
        <Stack gap={5}>
          <Button type="submit" h={40} fz={18} radius="xl">
            Log in
          </Button>
          <Button variant="white" size="md" fz={15} radius="xl">
            Forgot Password?
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default Login;
