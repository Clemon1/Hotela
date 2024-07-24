import React, { useState } from "react";
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
  Badge,
} from "@mantine/core";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

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
        backgroundColor: theme.white,
        padding: "20px",
        borderRadius: theme.radius.md,
        boxShadow: theme.shadows.md,
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      <Group align="center" justify="space-between">
        <Title order={2} fw={700} c={theme.colors.blue[6]}>
          Hotela
        </Title>
        <IoClose style={{ cursor: "pointer" }} size={30} onClick={onClose} />
      </Group>

      <Title order={2} fw={600} ta={"center"} my={"20"}>
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
        <Button type="submit" h={50} fz={22} radius="xl" disabled={!agree}>
          Sign Up
        </Button>
      </form>

      <Text align="center" mt="md">
        Already have an account?{" "}
        <Button
          variant="filled"
          color="blue"
          style={{
            height: "30px",
            fontSize: "16px",
            borderRadius: "15px",
            padding: "0 20px",
            transition: "background-color 0.3s, transform 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.blue[8];
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.blue[6];
            e.currentTarget.style.transform = "scale(1)";
          }}
          onClick={handleOpenLogin}
        >
          Login
        </Button>
      </Text>
    </Box>
  );
}

SignUp.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSignUpSuccess: PropTypes.func.isRequired,
};

export default SignUp;
