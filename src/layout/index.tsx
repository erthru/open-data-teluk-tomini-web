import { Box, Container } from "@chakra-ui/layout";
import { Route, Switch } from "react-router";
import Header from "../components/header";
import Datasets from "../containers/datasets";
import Home from "../containers/home";
import "./index.css";

export const Layout = () => (
    <Box>
        <Header />

        <Container maxW="1200px" p="16px">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/datasets" component={Datasets} />
            </Switch>
        </Container>
    </Box>
);
