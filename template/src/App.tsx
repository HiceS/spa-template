import { MantineProvider, AppShell, Navbar } from "@mantine/core";
import { MainLinks, MenuFooter, MenuHeader } from "./components/Menu";
import { Notifications } from "@mantine/notifications";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/Routes";
import React from "react";

import "./styles/App.scss";

import ErrorPage from "./routes/Error";

function App() {
    return (
        <MantineProvider
            theme={{
                colorScheme: "dark"
            }}
            withGlobalStyles
            withNormalizeCSS
        >
            <Notifications />
            <AppShell
                padding="md"
                navbar={
                    <Navbar width={{ base: 300 }} p="xs">
                        <Navbar.Section mt="xs">
                            <MenuHeader />
                        </Navbar.Section>
                        <Navbar.Section grow mt="md">
                            <MainLinks />
                        </Navbar.Section>
                        <Navbar.Section>
                            <MenuFooter />
                        </Navbar.Section>
                    </Navbar>
                }
                styles={(theme) => ({
                    main: { backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0] }
                })}
            >
                <Routes>
                    {routes
                        .filter((r) => r.element !== undefined)
                        .map((r) => (
                            <Route key={r.path} path={r.path} element={r.element} />
                        ))}
                    <Route key="error" path="*" element={<ErrorPage />} />
                </Routes>
            </AppShell>
        </MantineProvider>
    );
}

export default App;
