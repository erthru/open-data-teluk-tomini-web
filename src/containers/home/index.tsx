import { Box, Flex } from "@chakra-ui/layout";
import { Helmet } from "react-helmet";
import CHorizontalCategories from "../../components/horizontal-categories";
import CSectionTitle from "../../components/common/section-title";
import { TITLE } from "../../helpers/environments";

const XHome = () => (
    <Box bg="#f7fafc">
        <Helmet>
            <title>{TITLE}</title>
        </Helmet>

        <Box mt="16px" />

        <Flex justifyContent="center" w="full" pb="16px">
            <CSectionTitle title="Telusuri Berdasarkan Kategori" />
        </Flex>

        <CHorizontalCategories />
    </Box>
);

export default XHome;
