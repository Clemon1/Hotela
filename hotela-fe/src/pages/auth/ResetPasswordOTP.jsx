import { Box, Button, Group, PinInput, Text, Title } from "@mantine/core";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

function ResetPasswordOTP() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60); // 1-minute timer
  const [canResend, setCanResend] = useState(false);

  const isMobile = useMediaQuery("(max-width: 767px)");
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const handleResendCode = () => {
    setTimeLeft(60);
    setCanResend(false);
    // Add logic to resend the OTP code here
    console.log("Resend code logic here");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (otp.length !== 5) {
      setError("Please enter a 5-digit OTP.");
      return;
    } else {
      navigate("/resetpassword");
    }

    alert("OTP: " + otp);
  };

  return (
    <Box
      p={20}
      maw={400}
      w={"100%"}
      style={{
        borderRadius: "10px",
        boxShadow: !isMobile && "0 4px 6px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Title order={2}>Verify Code</Title>

      <Text size="sm">
        We sent a code to your email. Enter that code to reset your password.
      </Text>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "14px" }}
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
        {error && (
          <Text c="red" style={{ textAlign: "center" }}>
            {error}
          </Text>
        )}

        <Group align="center" justify="space-between">
          <Text size="xs">Didn't get a code?</Text>
          <Button
            variant="filled"
            size="xs"
            radius="xl"
            disabled={!canResend}
            onClick={handleResendCode}
          >
            {canResend ? "Resend Code" : `Resend in ${timeLeft}s`}
          </Button>
        </Group>

        <Button
          type="submit"
          style={{
            height: "50px",
            fontSize: "18px",
            borderRadius: "25px",
            backgroundColor: "#007BFF",
            color: "#fff",
            fontFamily: "Inter, sans-serif",
            transition: "background-color 0.3s, transform 0.3s",
            width: "100%",
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

export default ResetPasswordOTP;
