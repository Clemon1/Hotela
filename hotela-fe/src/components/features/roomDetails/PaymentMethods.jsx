/* eslint-disable react/prop-types */
import { Box, Title, Button, Stack, Paper, Group } from "@mantine/core";
import { FaStripe, FaBitcoin } from "react-icons/fa";

function PaymentMethods({ handleStripePayment, stripeLoading }) {
  const handleCryptoPayment = () => {
    // Implement crypto payment logic here
    alert("Crypto payment initiated");
  };

  return (
    <Box>
      <Paper>
        <Title order={3} mb='md'>
          Step 3: Choose Payment Method
        </Title>

        <Stack spacing='lg'>
          <Group align='center' mt='md'>
            <Button
              onClick={handleStripePayment}
              loading={stripeLoading}
              justify='center'
              fullWidth
              color='#ffffff'
              bd={"none"}
              size='lg'
              radius='md'
              bg={"#6B71E3"}
              ta={"center"}
              variant='outline'>
              <FaStripe color='#ffffff' size={55} />
            </Button>
            <Button
              onClick={handleCryptoPayment}
              justify='space-between'
              fullWidth
              leftSection={<FaBitcoin size={35} />}
              rightSection={<span />}
              radius='md'
              color='orange'
              variant='outline'
              size='lg'>
              Pay with Crypto
            </Button>
            {/* <Button
              onClick={handleCryptoPayment}
              leftIcon={<FaBitcoin />}
              size="lg"
              radius="md"
              color="orange"
              variant="outline"
              style={{ display: "flex", alignItems: "center" }}
            >
              Pay with Crypto
            </Button> */}
          </Group>
        </Stack>
      </Paper>
    </Box>
  );
}

export default PaymentMethods;
