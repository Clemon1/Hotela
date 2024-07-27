import { AppShell, Modal, ScrollArea } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Login from "../features/modals/Login";
import SignUp from "../features/modals/SignUp";
import OTP from "..//features/modals/OTP";
import ForgotPassword from "../features/modals/ForgotPassword";
import ConfrimAccount from "../features/modals/ConfrimAccount";
import ResetPassword from "../features/modals/ResetPassword";

function AppLayout() {
  // Check if the viewport width is less than or equal to 767px
  const isMobile = useMediaQuery("(max-width: 767px)");

  // Initialize modal states and handlers using useDisclosure hook
  const [loginOpened, { open: openLogin, close: closeLogin }] =
    useDisclosure(false);
  const [signUpOpened, { open: openSignUp, close: closeSignUp }] =
    useDisclosure(false);
  const [otpOpened, { open: openOtp, close: closeOtp }] = useDisclosure(false);
  const [
    forgetPasswordOpened,
    { open: openforgetPassword, close: closeForgetPassword },
  ] = useDisclosure(false);
  const [
    confirmAccountOpened,
    { open: openConfirmAccount, close: closeConfirmAccount },
  ] = useDisclosure(false);
  const [
    resetPasswordOpened,
    { open: openResetPassword, close: closeResetPassword },
  ] = useDisclosure(false);

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
        {/* Login Modal */}
        <Modal
          opened={loginOpened}
          onClose={closeLogin}
          withCloseButton={false}
          fullScreen={isMobile}
          radius={"xl"}
        >
          <Login
            onClose={closeLogin}
            onOpenSigUp={openSignUp}
            onOpenForgotPassword={openforgetPassword}
          />
        </Modal>

        {/* Sign Up Modal */}
        <Modal
          opened={signUpOpened}
          onClose={closeSignUp}
          withCloseButton={false}
          fullScreen={isMobile}
          radius={"xl"}
          scrollAreaComponent={ScrollArea.Autosize}
        >
          <SignUp
            onClose={closeSignUp}
            onOpenLogin={openLogin}
            onSignUpSuccess={openOtp}
          />
        </Modal>

        {/* OTP Modal */}
        <Modal
          opened={otpOpened}
          onClose={closeOtp}
          withCloseButton={false}
          fullScreen={isMobile}
          radius={"xl"}
          closeOnClickOutside={false}
        >
          <OTP onClose={closeOtp} onOpenSigUp={openSignUp} />
        </Modal>

        {/* Forgot Password Modal */}
        <Modal
          opened={forgetPasswordOpened}
          onClose={closeForgetPassword}
          withCloseButton={false}
          fullScreen={isMobile}
          radius={"xl"}
        >
          <ForgotPassword
            onClose={closeForgetPassword}
            onOpenLogin={openLogin}
            onOpenConfirmAccount={openConfirmAccount}
          />
        </Modal>

        {/* Confirm Account Modal */}
        <Modal
          opened={confirmAccountOpened}
          onClose={closeConfirmAccount}
          withCloseButton={false}
          fullScreen={isMobile}
          radius={"xl"}
          closeOnClickOutside={false}
        >
          <ConfrimAccount
            onClose={closeConfirmAccount}
            onOpenForgotPassword={openforgetPassword}
            onOpenResetPassword={openResetPassword}
          />
        </Modal>

        {/* Reset Password Modal */}
        <Modal
          opened={resetPasswordOpened}
          onClose={closeResetPassword}
          withCloseButton={false}
          fullScreen={isMobile}
          radius={"xl"}
          closeOnClickOutside={false}
        >
          <ResetPassword
            onClose={closeResetPassword}
            onCloseForgotPassword={closeForgetPassword}
            onOpenForgotPassword={openforgetPassword}
            openConfirmAccount={openConfirmAccount}
          />
        </Modal>

        {/* AppShell Header */}
        <AppShell.Header
          px={{ base: 10 }}
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

        {/* AppShell Main Content */}
        <AppShell.Main
          mt={70}
          mx="auto"
          style={{ width: "100%", maxWidth: "1200px" }}
        >
          <Outlet />
        </AppShell.Main>
      </AppShell>

      {/* Footer Component */}
      <Footer />
    </>
  );
}

export default AppLayout;
