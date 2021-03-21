import { Box, Flex } from "@chakra-ui/layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import CSectionTitle from "../../components/common/section-title";
import CGridVisualizations from "../../components/grid-visualizations";
import { setNavigationKey } from "../../data/store/navigation/actions";
import { NavigationKey } from "../../data/store/navigation/types";
import { TITLE } from "../../helpers/environments";

const XVisualizations = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNavigationKey(NavigationKey.visualizations));
    }, []);

    return (
        <Box>
            <Helmet>
                <title>{`Visualisasi | ${TITLE}`}</title>
            </Helmet>

            <Flex w="full" justifyContent="center" pb="16px">
                <CSectionTitle title="Daftar Visualisasi" />
            </Flex>

            <CGridVisualizations />
        </Box>
    );
};

export default XVisualizations;
