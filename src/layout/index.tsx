import { Box, Container } from "@chakra-ui/layout";
import { Route, Switch } from "react-router";
import CHeader from "../components/header";
import XDatasetBySlug from "../containers/dataset-by-slug";
import XDatasets from "../containers/datasets";
import XHome from "../containers/home";
import XOrganizationBySlug from "../containers/organization-by-slug";
import XOrganizations from "../containers/organizations";
import "./index.css";

const Layout = () => (
    <Box bg="#fafafa">
        <CHeader />

        <Container maxW="1200px" p="16px">
            <Switch>
                <Route exact path="/" component={XHome} />
                <Route exact path="/datasets" component={XDatasets} />
                <Route exact path="/dataset/:slug" component={XDatasetBySlug} />
                <Route exact path="/organizations" component={XOrganizations} />
                <Route exact path="/organization/:slug" component={XOrganizationBySlug} />
            </Switch>
        </Container>
    </Box>
);

export default Layout;
