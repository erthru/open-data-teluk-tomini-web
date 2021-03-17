import { Box } from "@chakra-ui/layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { setNavigationKey } from "../../data/store/navigation/actions";
import { NavigationKey } from "../../data/store/navigation/types";
import { TITLE } from "../../helpers/environments";

const XDatasets = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNavigationKey(NavigationKey.datasets));
    }, []);

    return (
        <Box>
            <Helmet>
                <title>{`Dataset | ${TITLE}`}</title>
            </Helmet>
            hello
        </Box>
    );
};

export default XDatasets;
