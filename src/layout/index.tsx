import { Box, Container, Flex } from "@chakra-ui/layout";
import { Route, Switch } from "react-router";
import CFooter from "../components/footer";
import CHeader from "../components/header";
import XDatasetBySlug from "../containers/dataset-by-slug";
import XDatasets from "../containers/datasets";
import XHome from "../containers/home";
import XInfographics from "../containers/infographics";
import XOrganizationBySlug from "../containers/organization-by-slug";
import XOrganizations from "../containers/organizations";
import XVisualizationBySlug from "../containers/visualization-by-slug";
import XVisualizations from "../containers/visualizations";
import "./index.css";

const Layout = () => (
    <Box bg="#fafafa">
        <Flex flexDir="column" minH="100vh">
            <CHeader />

            <Flex w="full" flex="1">
                <Container maxW="1200px" p="16px">
                    <Switch>
                        <Route exact path="/" component={XHome} />
                        <Route exact path="/datasets" component={XDatasets} />
                        <Route exact path="/dataset/:slug" component={XDatasetBySlug} />
                        <Route exact path="/organizations" component={XOrganizations} />
                        <Route exact path="/organization/:slug" component={XOrganizationBySlug} />
                        <Route exact path="/visualizations" component={XVisualizations} />
                        <Route exact path="/visualization/:slug" component={XVisualizationBySlug} />
                        <Route exact path="/infographics" component={XInfographics} />
                    </Switch>
                </Container>
            </Flex>

            <CFooter />
        </Flex>
    </Box>
);

export default Layout;
