import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import React from "react";

import "./styles/App.scss";

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
            <div className="App">
                Hello App.
            </div>
        </MantineProvider>
    );
}

export default App;
