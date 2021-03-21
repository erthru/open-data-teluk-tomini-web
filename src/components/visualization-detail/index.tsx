import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { CircularProgress } from "@chakra-ui/progress";
import { useEffect, useState } from "react";
import * as visualizationRepo from "../../data/api/repositories/visualization-repository";
import CCard from "../common/card";

type Props = {
    toFetch: "bySlug";
    slug?: string;
    onLoaded?: (visualization: visualizationRepo.Visualization) => void;
};

const CVisualizationDetail = (props: Props) => {
    const [visualization, setVisualization] = useState<visualizationRepo.Visualization>({});

    useEffect(() => {
        getVisualization();
    }, [props.toFetch]);

    const getVisualization = async () => {
        if (props.toFetch === "bySlug") {
            const response = await visualizationRepo.getBySlug(props.slug!!);
            setVisualization(response.visualization);
            props.onLoaded!!(response.visualization);
        }
    };

    return (
        <CCard>
            {Object.keys(visualization).length === 0 ? (
                <Flex w="full" justifyContent="center">
                    <CircularProgress color="blue.500" size="36px" isIndeterminate />
                </Flex>
            ) : (
                <Box>
                    <Flex w="full" justifyContent="center">
                        <Image src={visualization.thumbnail} w={{ base: "full", md: "50%" }} rounded="lg" />
                    </Flex>

                    <Text mt="32px" color="gray.500" fontSize="14px">
                        Pada: {new Date(visualization.createdAt!!).toLocaleDateString()}
                    </Text>

                    <Text mt="8px" color="grey.700">
                        {visualization.body}
                    </Text>
                </Box>
            )}
        </CCard>
    );
};

export default CVisualizationDetail;
