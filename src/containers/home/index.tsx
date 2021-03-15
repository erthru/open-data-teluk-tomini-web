import { Box, Container, Flex } from "@chakra-ui/layout";
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router";
import Header from "../../components/header";
import HorizontalCategories from "../../components/horizontal-categories";
import SectionTitle from "../../components/section-title";
import { TITLE } from "../../helpers/environments";
import Datasets from "../datasets";
import "./index.css";

const Home = () => (
    <Box bg="#f7fafc">
        <Helmet>
            <title>{TITLE}</title>
        </Helmet>

        <Header />

        <Container maxW="1200px" p="16px">
            <Switch>
                <Route
                    exact
                    path="/"
                    component={() => (
                        <Box>
                            <Box mt="16px" />

                            <Flex justifyContent="center" w="full" pb="16px">
                                <SectionTitle title="Telusuri Berdasarkan Kategori" />
                            </Flex>

                            <HorizontalCategories />
                        </Box>
                    )}
                />

                <Route exact path="/datasets" component={Datasets} />
            </Switch>
        </Container>
    </Box>
);

export default Home;
