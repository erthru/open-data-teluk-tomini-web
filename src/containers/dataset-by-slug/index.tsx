import { Box, Flex } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import CSectionTitle from "../../components/common/section-title";
import CDatasetDetail from "../../components/dataset-detail";
import CDatasets from "../../components/datasets";
import COrganizationDetail from "../../components/organization-detail";
import CTags from "../../components/tags";
import * as datasetRepo from "../../data/api/repositories/dataset-repository";
import { setNavigationKey } from "../../data/store/navigation/actions";
import { NavigationKey } from "../../data/store/navigation/types";
import { TITLE } from "../../helpers/environments";

type Params = {
    slug: string;
};

const XDatasetBySlug = () => {
    const { slug } = useParams<Params>();
    const [dataset, setDataset] = useState<datasetRepo.Dataset>({});
    const dispatch = useDispatch();
    const [key, setKey] = useState(new Date().getTime());

    useEffect(() => {
        dispatch(setNavigationKey(NavigationKey.datasets));
    }, []);

    useEffect(() => {
        setKey(new Date().getTime());
    }, [slug]);

    return (
        <Box>
            <Helmet>
                <title>{`${dataset.title} | ${TITLE}`}</title>
            </Helmet>

            <Flex w="full" flexWrap={{ base: "wrap", md: "nowrap" }} key={key}>
                <Box w="25%" pr="16px" display={{ base: "none", md: "block" }}>
                    <CSectionTitle title="Organisasi" />
                    <Box mt="16px" />
                    <COrganizationDetail organization={dataset.organization!!} />
                    <Box mt="32px" />
                    <CSectionTitle title="Tag" />
                    <Box mt="16px" />
                    <CTags tags={dataset.tags!!} />
                </Box>

                <Box w={{ base: "100%", md: "75%" }}>
                    <CSectionTitle title="Dataset" />
                    <Box mt="16px" />
                    <CDatasetDetail toFetch="bySlug" slug={slug} onLoaded={(dataset) => setDataset(dataset)} />
                    <Box mt="32px" />
                    <CSectionTitle title="Dataset Terkait" />
                    <Box mt="16px" />
                    {Object.keys(dataset).length !== 0 && <CDatasets toFetch="byCategoryId" categoryId={dataset.categoryId} />}
                </Box>

                <Box w="100%" display={{ base: "block", md: "none" }} mt="32px">
                    <CSectionTitle title="Organisasi" />
                    <Box mt="16px" />
                    <COrganizationDetail organization={dataset.organization!!} />
                    <Box mt="32px" />
                    <CSectionTitle title="Tag" />
                    <Box mt="16px" />
                    <CTags tags={dataset.tags!!} />
                </Box>
            </Flex>
        </Box>
    );
};

export default XDatasetBySlug;
