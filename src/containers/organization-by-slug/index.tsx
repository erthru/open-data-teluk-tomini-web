import { Box, Flex } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import CSectionTitle from "../../components/common/section-title";
import CDatasets from "../../components/datasets";
import COrganizationDetail from "../../components/organization-detail";
import * as organizationRepo from "../../data/api/repositories/organization-repository";
import { setNavigationKey } from "../../data/store/navigation/actions";
import { NavigationKey } from "../../data/store/navigation/types";
import { TITLE } from "../../helpers/environments";

type Params = {
    slug: string;
};

const XOrganizationBySlug = () => {
    const params = useParams<Params>();
    const dispatch = useDispatch();
    const [organization, setOrganization] = useState<organizationRepo.Organization>({});

    useEffect(() => {
        dispatch(setNavigationKey(NavigationKey.organizations));
    }, []);

    return (
        <Box>
            <Helmet>
                <title>{`${organization.name} | ${TITLE}`}</title>
            </Helmet>

            <Flex w="full" flexWrap={{ base: "wrap", md: "nowrap" }}>
                <Box w="25%" pr="16px" display={{ base: "none", md: "block" }}>
                    <CSectionTitle title="Organisasi" />
                    <Box mt="16px" />
                    <COrganizationDetail onLoaded={(_organization) => setOrganization(_organization)} toFetch="bySlug" slug={params.slug} />
                </Box>

                <Box w={{ base: "100%", md: "75%" }}>
                    <CSectionTitle title="Dataset" />
                    <Box mt="16px" />
                    {Object.keys(organization).length !== 0 && <CDatasets toFetch="byOrganizationId" organizationId={organization._id} />}
                </Box>

                <Box w="100%" display={{ base: "block", md: "none" }} mt="32px">
                    <CSectionTitle title="Organisasi" />
                    <Box mt="16px" />
                    <COrganizationDetail onLoaded={(_organization) => setOrganization(_organization)} toFetch="bySlug" slug={params.slug} />
                </Box>
            </Flex>
        </Box>
    );
};

export default XOrganizationBySlug;
