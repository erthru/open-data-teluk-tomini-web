import { Box, Flex } from "@chakra-ui/layout";
import { Helmet } from "react-helmet";
import HorizontalCategories from "../../components/horizontal-categories";
import SectionTitle from "../../components/common/section-title";
import { TITLE } from "../../helpers/environments";

const Home = () => (
    <Box bg="#f7fafc">
        <Helmet>
            <title>{TITLE}</title>
        </Helmet>

        <Box mt="16px" />

        <Flex justifyContent="center" w="full" pb="16px">
            <SectionTitle title="Telusuri Berdasarkan Kategori" />
        </Flex>

        <HorizontalCategories />
    </Box>
);

export default Home;
