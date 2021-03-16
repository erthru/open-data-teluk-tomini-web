import { Box, Container } from "@chakra-ui/layout";
import { Route, Switch } from "react-router";
import CHeader from "../components/header";
import XDatasets from "../containers/datasets";
import XHome from "../containers/home";
import "./index.css";

export const Layout = () => (
    <Box bg="#fafafa">
        <CHeader />

        <Container maxW="1200px" p="16px">
            <Switch>
                <Route exact path="/" component={XHome} />
                <Route exact path="/datasets" component={XDatasets} />
            </Switch>
        </Container>
    </Box>
);
