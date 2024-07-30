import {
  Box,
  Stack,
  Text,
  TextInput,
  Title,
  Button,
  Divider,
} from "@mantine/core";

function YourDetails() {
  return (
    <Box c={"#000814"}>
      <Title order={2}>Book Hotel 1</Title>
      <Box my="sm">
        <Title order={4} mb="sm">
          Step 1: Your details
        </Title>
        <form>
          <Stack spacing="md">
            <TextInput
              label="First and Last name"
              w={{ base: "100%", sm: "70%" }}
              placeholder="Enter your full name"
              required
              withAsterisk={false}
            />
            <TextInput
              label="Email address"
              w={{ base: "100%", sm: "70%" }}
              placeholder="Enter your email"
              type="email"
              required
              withAsterisk={false}
            />
            <TextInput
              label="Phone number"
              w={{ base: "100%", sm: "70%" }}
              placeholder="Enter your phone number"
              type="tel"
              required
              withAsterisk={false}
            />
          </Stack>
        </form>
      </Box>
    </Box>
  );
}

export default YourDetails;
