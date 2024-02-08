import { createStyles, Container, Title, Text, Button, Group, rem } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
    root: {
        paddingTop: rem(80),
        paddingBottom: rem(80),
        height: "100%"
    },

    inner: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        height: "100%"
    },

    image: {
        ...theme.fn.cover(),
        opacity: 0.75
    },

    content: {
        position: "relative",
        zIndex: 1,

        [theme.fn.smallerThan("sm")]: {
            paddingTop: rem(120)
        }
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        textAlign: "center",
        fontWeight: 900,
        fontSize: rem(38),

        [theme.fn.smallerThan("sm")]: {
            fontSize: rem(32)
        }
    },

    description: {
        maxWidth: rem(540),
        margin: "auto",
        marginTop: theme.spacing.xl,
        marginBottom: `calc(${theme.spacing.xl} * 1.5)`
    }
}));

export default function ErrorPage() {
    const { classes } = useStyles();

    const nav = useNavigate();

    return (
        <Container className={classes.root}>
            <div className={classes.inner}>
                <div className={classes.content}>
                    <Title className={classes.title}>Not Found</Title>
                    <Text color="dimmed" size="lg" align="center" className={classes.description}>
                        Page you are trying to open does not exist. You may have mistyped the address, or the page has been moved
                        to another URL. If you think this is an error contact the bastrop software team.
                    </Text>
                    <Group position="center">
                        <Button
                            size="md"
                            onClick={() => {
                                nav("/");
                            }}
                        >
                            Take me back to official boring business
                        </Button>
                    </Group>
                </div>
            </div>
        </Container>
    );
}
