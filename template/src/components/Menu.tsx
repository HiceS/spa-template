import {
    UnstyledButton,
    Group,
    useMantineTheme,
    Box,
    rem,
    Text,
    Code,
    clsx,
} from "@mantine/core";
import {
    IconCircleCheck,
} from "@tabler/icons-react";
import { ReactNode, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../routes/Routes";

export function MenuHeader() {
    const theme = useMantineTheme();
    return (
        <Box
            sx={{
                borderBottom: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`,
                display: "block",
                width: "100%",
                padding: theme.spacing.xs,
                borderRadius: theme.radius.sm,
                paddingBottom: theme.spacing.md,
                color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
                userSelect: "none",
                marginTop: "0px"
            }}
        >
            <Group position="apart">
                <Text
                    variant="gradient"
                    gradient={{ from: "#8BC6EC", to: "#9599E2", deg: 180 }}
                    sx={{ fontFamily: "Greycliff CF, sans-serif" }}
                    fz={"25px"}
                    fw={900}
                >
                    App Name
                </Text>
                <Code sx={{ fontWeight: 700, backgroundColor: "#D9D9D9", color: "#141517" }}>v 0.6.9</Code>
            </Group>
        </Box>
    );
}

/**
 * I have no clue why but this is navigation without me actually caling nav ?
 */
export function MainLinks() {
    const location = useLocation();

    const link = useCallback(
        (icon: ReactNode, label: string, disabled: boolean, path: string) => {
            // TODO: change this to parse by / and get first element to determine the path or something.
            let new_selected = location.pathname === path;
            return (
                <Link to={path} key={label}>
                    <UnstyledButton
                        disabled={disabled}
                        className={clsx("menu-button", new_selected && "selected")}
                        key={label}
                        sx={(theme) => ({
                            display: "block",
                            width: "100%",
                            padding: theme.spacing.xs,
                            marginTop: "5px",
                            borderRadius: theme.radius.sm,
                            color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
                            backgroundColor: new_selected ? theme.colors.dark[6] : "auto",

                            "&:hover": {
                                backgroundColor: !disabled ? theme.colors.dark[6] : "auto",
                                userSelect: !disabled ? "auto" : "none",
                                cursor: !disabled ? "pointer" : "default"
                            }
                        })}
                    >
                        <Group>
                            {icon}
                            <Text color={"#FFFFFF"} size="md" className="no-select">
                                {label}
                            </Text>
                        </Group>
                    </UnstyledButton>
                </Link>
            );
        },
        [location]
    );

    return <div>{routes.map((links) => link(links.icon, links.name, links.disabled, links.path))}</div>;
}

export function MenuFooter() {
    const theme = useMantineTheme();

    return (
        <>
            <Box
                sx={{
                    paddingTop: theme.spacing.sm,
                    borderTop: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`,
                    display: "block",
                    width: "100%",
                    padding: theme.spacing.xs,
                    borderRadius: theme.radius.sm,
                    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
                    userSelect: "none"
                }}
            >
                <Group>
                    <IconCircleCheck />
                    <Box sx={{ flex: 1 }}>
                        <Text size="sm" weight={500}>
                            Mode
                        </Text>
                        <Text color="dimmed" size="xs">
                                <Text c="green" fw={500}>
                                    Some Text
                                </Text>
                        </Text>
                    </Box>
                </Group>
            </Box>
        </>
    );
}
