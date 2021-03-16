import { Flex, Text } from "@chakra-ui/layout";
import { CircularProgress } from "@chakra-ui/progress";
import { useEffect, useState } from "react";
import * as datasetRepo from "../../data/api/repositories/dataset-repository";
import CCard from "../common/card";
import CDataset from "./dataset";

type Props = {
    toFetch: "limited" | "default";
};

const CDatasets = (props: Props) => {
    const [datasets, setDatasets] = useState<datasetRepo.Dataset[]>([]);
    const [isEmpty, setIsEmpty] = useState(false);
    let page = 1;
    const limit = 10;

    useEffect(() => {
        getDatasets();
    }, [props.toFetch]);

    const getDatasets = async () => {
        if (props.toFetch === "limited") {
            const response = await datasetRepo.getAll(1, 5);
            setDatasets(response.datasets);
            setIsEmpty(response.datasets === undefined || response.datasets.length === 0);
        }
    };

    return (
        <CCard w="full">
            {datasets.length === 0 && !isEmpty && (
                <Flex w="full" justifyContent="center">
                    <CircularProgress isIndeterminate size="32px" color="blue.500" />
                </Flex>
            )}

            {isEmpty && (
                <Flex w="full" justifyContent="center">
                    <Text>Dataset tidak ditemukan</Text>
                </Flex>
            )}

            {datasets.map((dataset) => (
                <CDataset dataset={dataset} key={dataset._id} />
            ))}
        </CCard>
    );
};

export default CDatasets;
