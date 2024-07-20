import { AppShell } from "@mantine/core";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Applayout() {
  return (
    <AppShell px={{ base: 10, sm: 80 }}>
      <AppShell.Header px={{ base: 10, sm: 80 }} bd={0}>
        <Header />
      </AppShell.Header>
      <AppShell.Main mt={70}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default Applayout;
