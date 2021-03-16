import { Flex, Text } from "@chakra-ui/layout";
import { CircularProgress } from "@chakra-ui/progress";
import { useEffect, useState } from "react";
import * as visualizationRepo from "../../data/api/repositories/visualization-repository";
import CCard from "../common/card";
import CVisualization from "./visualization";

type Props = {
    toFetch: "limited" | "default";
};

const CVisualizations = (props: Props) => {
    const [visualizations, setVisualizations] = useState<visualizationRepo.Visualization[]>([]);
    const [isEmpty, setIsEmpty] = useState(false);
    let page = 1;
    const limit = 10;

    useEffect(() => {
        getVisualizations();
    }, [props.toFetch]);

    const getVisualizations = async () => {
        if (props.toFetch === "limited") {
            const response = await visualizationRepo.getAll(1, 7);
            setVisualizations(response.visualizations);
        }
    };

    return (
        <CCard>
            {visualizations.length === 0 && !isEmpty && (
                <Flex w="full" justifyContent="center">
                    <CircularProgress isIndeterminate size="32px" color="blue.500" />
                </Flex>
            )}

            {isEmpty && (
                <Flex w="full" justifyContent="center">
                    <Text>Visualisasi tidak ditemukan</Text>
                </Flex>
            )}

            {visualizations.map((visualization) => (
                <CVisualization visualization={visualization} key={visualization._id} />
            ))}
        </CCard>
    );
};

export default CVisualizations;
