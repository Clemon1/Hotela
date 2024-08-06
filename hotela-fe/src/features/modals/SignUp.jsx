import { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Group,
  Title,
  Text,
  TextInput,
  Checkbox,
  useMantineTheme,
  Flex,
} from "@mantine/core";

function SignUp({ onClose, onSignUpSuccess, onOpenLogin }) {
  const theme = useMantineTheme();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
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

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const handleAgreeChange = (event) => {
    setAgree(event.currentTarget.checked);
  };

  const handleOpenLogin = () => {
    onClose();
    onOpenLogin();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setError("Invalid email address");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else if (!agree) {
      setError("You must agree to the terms and conditions");
    } else {
      onClose();
      onSignUpSuccess(); // Open the OTP modal after successful sign-up
      setError("");
      alert(
        "First Name: " +
          firstName +
          "\nLast Name: " +
          lastName +
          "\nEmail: " +
          email +
          "\nPassword: " +
          password
      );
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: "20px",
        backgroundColor: theme.white,
      }}
    >
      <Box
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "20px",
          borderRadius: theme.radius.md,
          border: `1px solid ${theme.colors.gray[3]}`,
        }}
      >
        <Title order={2} fw={700} c={theme.colors.blue[6]} ta="center">
          Hotela
        </Title>

        <Title order={3} fw={600} ta="center" my="20">
          Create your account
        </Title>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <Group grow>
            <TextInput
              label="First Name"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.currentTarget.value)}
              required
              withAsterisk={false}
            />
            <TextInput
              label="Last Name"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.currentTarget.value)}
              required
              withAsterisk={false}
            />
          </Group>
          <TextInput
            label="Email Address"
            placeholder="Enter your email address"
            value={email}
            onChange={handleEmailChange}
            required
            withAsterisk={false}
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
          <TextInput
            label="Confirm Password"
            placeholder="Confirm your password"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
            withAsterisk={false}
          />
          <Checkbox
            label="I agree that all the information provided is accurate and true."
            checked={agree}
            onChange={handleAgreeChange}
            required
          />
          {error && <Text color="red">{error}</Text>}
          <Button type="submit" h={40} fz={17} radius="xl" disabled={!agree}>
            Sign Up
          </Button>
        </form>

        <Flex w="100%" justify="center" py="15px" align="center" mt="20px">
          <Text color="#000814">Already have an account?</Text>
          <Button
            variant="subtle"
            color="#000814"
            style={{
              height: "30px",
              fontSize: "16px",
              borderRadius: "15px",
              marginLeft: "10px",
              padding: "0 10px",
            }}
            onClick={handleOpenLogin}
          >
            Login
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

SignUp.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSignUpSuccess: PropTypes.func.isRequired,
  onOpenLogin: PropTypes.func.isRequired,
};

export default SignUp;
