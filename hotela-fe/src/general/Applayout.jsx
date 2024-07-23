import { AppShell, Modal, Button } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import OTP from "../pages/OTP";

function AppLayout() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  // Initialize the modal states
  const [loginOpened, { open: openLogin, close: closeLogin }] =
    useDisclosure(false);
  const [signUpOpened, { open: openSignUp, close: closeSignUp }] =
    useDisclosure(false);
  const [otpOpened, { open: openOtp, close: closeOtp }] = useDisclosure(true);

  return (
    <>
      <AppShell
        px={{ base: 10, sm: 80 }}
        styles={{
          main: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <Modal
          opened={loginOpened}
          onClose={closeLogin}
          withCloseButton={false}
          fullScreen={isMobile}
        >
          <Login onClose={closeLogin} />
        </Modal>
        <Modal
          opened={signUpOpened}
          onClose={closeSignUp}
          withCloseButton={false}
          fullScreen={isMobile}
        >
          <SignUp onClose={closeSignUp} onSignUpSuccess={openOtp} />
        </Modal>
        <Modal
          opened={otpOpened}
          onClose={closeOtp}
          withCloseButton={false}
          fullScreen={isMobile}
        >
          <OTP onClose={closeOtp} />
        </Modal>
        <AppShell.Header
          px={{ base: 10, sm: 80 }}
          bd={0}
          mx="auto"
          style={{ width: "100%", maxWidth: "1200px" }}
        >
          <Header
            openLoginModal={openLogin}
            openSignUpModal={openSignUp}
            openOTPModal={openOtp}
          />
        </AppShell.Header>
        <AppShell.Main
          mt={70}
          mx="auto"
          style={{ width: "100%", maxWidth: "1200px" }}
        >
          <Outlet />
        </AppShell.Main>
      </AppShell>

      <Footer />
    </>
  );
}

export default AppLayout;
