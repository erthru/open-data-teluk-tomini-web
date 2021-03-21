import { Box, Flex } from "@chakra-ui/layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import CSectionTitle from "../../components/common/section-title";
import CInfographics from "../../components/infograpics";
import { setNavigationKey } from "../../data/store/navigation/actions";
import { NavigationKey } from "../../data/store/navigation/types";
import { TITLE } from "../../helpers/environments";

const XInfographics = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNavigationKey(NavigationKey.infographics));
    }, []);

    return (
        <Box>
            <Helmet>
                <title>{`Infografis | ${TITLE}`}</title>
            </Helmet>

            <Flex w="full" justifyContent="center" pb="16px">
                <CSectionTitle title="Infografis" />
            </Flex>

            <CInfographics />
        </Box>
    );
};

export default XInfographics;
