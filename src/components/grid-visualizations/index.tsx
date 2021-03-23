import { Box, Flex, Text } from "@chakra-ui/layout";
import { CircularProgress } from "@chakra-ui/progress";
import { useEffect, useState } from "react";
import * as visualizationRepo from "../../data/api/repositories/visualization-repository";
import CPagination from "../common/pagination";
import CGridVisualization from "./grid-visualization";

type Props = {
    toFetch: "default" | "search";
    searchKeywords?: string;
};

const CGridVisualizations = (props: Props) => {
    const [visualizations, setVisualizations] = useState<visualizationRepo.Visualization[]>([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [isEmpty, setIsEmpty] = useState(false);
    const limit = 9;

    useEffect(() => {
        setPage(1);
        getVisualizations();
    }, [props.toFetch, props.searchKeywords]);

    useEffect(() => {
        getVisualizations();
    }, [page]);

    const getVisualizations = async () => {
        if (props.toFetch === "default") {
            const response = await visualizationRepo.getAll(page, limit);
            setVisualizations(response.visualizations);
            setIsEmpty(response.visualizations === undefined || response.visualizations.length === 0);
            setTotal(response.total);
        }

        if (props.toFetch === "search") {
            const response = await visualizationRepo.search(props.searchKeywords!!, page, limit);
            setVisualizations(response.visualizations);
            setIsEmpty(response.visualizations === undefined || response.visualizations.length === 0);
            setTotal(response.total);
        }
    };

    return (
        <Box>
            {visualizations.length === 0 && !isEmpty && (
                <Flex w="full" justifyContent="center">
                    <CircularProgress color="blue.500" isIndeterminate size="36px" />
                </Flex>
            )}

            {isEmpty && (
                <Flex w="full" justifyContent="center">
                    <Text>Visualisasi tidak ditemukan</Text>
                </Flex>
            )}

            <Flex w="full" flexWrap="wrap">
                {visualizations.map((visualization) => (
                    <Box key={visualization._id} pr={{ base: "0", md: "16px" }} w={{ base: "full", md: "50%", lg: "33%" }} pb="16px">
                        <CGridVisualization visualization={visualization} />
                    </Box>
                ))}
            </Flex>

            <Box mt="16px">
                <CPagination totalPage={Math.ceil(total / limit)} currentPage={page} onPageSelected={(page) => setPage(page)} />
            </Box>
        </Box>
    );
};

export default CGridVisualizations;
