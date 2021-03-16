import { Box, Flex } from "@chakra-ui/layout";
import { Helmet } from "react-helmet";
import CHorizontalCategories from "../../components/horizontal-categories";
import CSectionTitle from "../../components/common/section-title";
import { TITLE } from "../../helpers/environments";
import CDatasets from "../../components/datasets";
import CVisualizations from "../../components/visualizations";

const XHome = () => (
    <Box>
        <Helmet>
            <title>{TITLE}</title>
        </Helmet>

        <Box mt="16px" />

        <Flex justifyContent="center" w="full" pb="16px">
            <CSectionTitle title="Telusuri Berdasarkan Kategori" />
        </Flex>

        <CHorizontalCategories />

        <Box mt={{ base: "32px", md: "64px" }} />

        <Flex w="full" flexWrap={{ base: "wrap", md: "nowrap" }}>
            <Box w={{ base: "full", md: "50%" }} pr={{ base: "0", md: "8px" }}>
                <Flex w="full" justifyContent="center">
                    <CSectionTitle title="Dataset Terbaru" />
                </Flex>

                <Box mt="16px" />
                <CDatasets toFetch="limited" />
            </Box>

            <Box w={{ base: "full", md: "50%" }} pl={{ base: "0", md: "8px" }} mt={{ base: "16px", md: "0" }}>
                <Flex w="full" justifyContent="center">
                    <CSectionTitle title="Visualisasi Terbaru" />
                </Flex>

                <Box mt="16px" />
                <CVisualizations toFetch="limited" />
            </Box>
        </Flex>
    </Box>
);

export default XHome;
