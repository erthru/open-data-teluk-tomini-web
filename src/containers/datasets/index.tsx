import { Box, Flex } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import CCategories from "../../components/categories";
import CSectionTitle from "../../components/common/section-title";
import CDatasets from "../../components/datasets";
import { setNavigationKey } from "../../data/store/navigation/actions";
import { NavigationKey } from "../../data/store/navigation/types";
import { TITLE } from "../../helpers/environments";

const XDatasets = () => {
    const dispatch = useDispatch();
    const query = new URLSearchParams(useLocation().search);
    const [categoryName, setCategoryName] = useState("");

    useEffect(() => {
        dispatch(setNavigationKey(NavigationKey.datasets));
    }, []);

    useEffect(() => {
        setCategoryName("");

        setTimeout(() => {
            setCategoryName(query.get("category") === null ? "" : query.get("category")!!);
        }, 50);
    }, [query.get("category")]);

    return (
        <Box>
            <Helmet>
                <title>{`Dataset | ${TITLE}`}</title>
            </Helmet>

            <Flex w="full" flexWrap={{ base: "wrap", md: "nowrap" }}>
                <Box w="25%" display={{ base: "none", md: "block" }}>
                    <CSectionTitle title="Kategori" />
                    <Box mt="16px" />
                    <CCategories />
                </Box>

                <Box w={{ base: "full", md: "75%" }} pl={{ base: "0", md: "16px" }}>
                    <CSectionTitle title="Dataset" />
                    <Box mt="16px" />
                    <CDatasets toFetch={categoryName !== "" ? "byCategoryName" : "default"} categoryName={categoryName} />
                </Box>

                <Box w="full" mt="32px" display={{ base: "block", md: "none" }}>
                    <CSectionTitle title="Kategori" />
                    <Box mt="16px" />
                    <CCategories />
                </Box>
            </Flex>
        </Box>
    );
};

export default XDatasets;
