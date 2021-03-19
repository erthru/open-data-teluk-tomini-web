import { Box, Flex } from "@chakra-ui/layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import CSectionTitle from "../../components/common/section-title";
import CGridOrganizations from "../../components/grid-organizations";
import { setNavigationKey } from "../../data/store/navigation/actions";
import { NavigationKey } from "../../data/store/navigation/types";
import { TITLE } from "../../helpers/environments";

const XOrganizations = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNavigationKey(NavigationKey.organizations));
    }, []);

    return (
        <Box>
            <Helmet>
                <title>{`Organisasi | ${TITLE}`}</title>
            </Helmet>

            <Flex w="full" justifyContent="center" pb="16px">
                <CSectionTitle title="Daftar Organisasi" />
            </Flex>

            <CGridOrganizations />
        </Box>
    );
};

export default XOrganizations;
