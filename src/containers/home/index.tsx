import { Box, Container, Flex } from "@chakra-ui/layout";
import { Helmet } from "react-helmet";
import Header from "../../components/header";
import HorizontalCategories from "../../components/horizontal-categories";
import SectionTitle from "../../components/section-title";
import { TITLE } from "../../helpers/environments";
import "./index.css";

const Home = () => (
    <Box bg="#f7fafc">
        <Helmet>
            <title>{TITLE}</title>
        </Helmet>

        <Header />

        <Container maxW="1200px" p="16px">
            <Box mt="16px" />

            <Flex justifyContent="center" w="full" pb="16px">
                <SectionTitle title="Telusuri Berdasarkan Kategori" />
            </Flex>

            <HorizontalCategories />
        </Container>
    </Box>
);

export default Home;
