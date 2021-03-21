import { Box, Flex } from "@chakra-ui/layout";
import { CircularProgress } from "@chakra-ui/progress";
import { useEffect, useState } from "react";
import * as visualizationRepo from "../../data/api/repositories/visualization-repository";
import CPagination from "../common/pagination";
import CGridVisualization from "./grid-visualization";

const CGridVisualizations = () => {
    const [visualizations, setVisualizations] = useState<visualizationRepo.Visualization[]>([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const limit = 9;

    useEffect(() => {
        getVisualizations();
    }, [page]);

    const getVisualizations = async () => {
        const response = await visualizationRepo.getAll(page, limit);
        setVisualizations(response.visualizations);
        setTotal(response.total);
    };

    return (
        <Box>
            {visualizations.length === 0 ? (
                <Flex w="full" justifyContent="center">
                    <CircularProgress color="blue.500" isIndeterminate size="36px" />
                </Flex>
            ) : (
                <Flex w="full" flexWrap="wrap">
                    {visualizations.map((visualization) => (
                        <Box key={visualization._id} pr={{ base: "0", md: "16px" }} w={{ base: "full", md: "50%", lg: "33%" }} pb="16px">
                            <CGridVisualization visualization={visualization} />
                        </Box>
                    ))}
                </Flex>
            )}

            <Box mt="16px">
                <CPagination totalPage={Math.ceil(total / limit)} currentPage={page} onPageSelected={(page) => setPage(page)} />
            </Box>
        </Box>
    );
};

export default CGridVisualizations;
