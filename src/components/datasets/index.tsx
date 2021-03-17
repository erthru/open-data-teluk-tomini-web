import { Box, Flex, Text } from "@chakra-ui/layout";
import { CircularProgress } from "@chakra-ui/progress";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import * as datasetRepo from "../../data/api/repositories/dataset-repository";
import * as categoryRepo from "../../data/api/repositories/category-repository";
import CCard from "../common/card";
import CDataset from "./dataset";
import CPagination from "../common/pagination";

type Props = {
    toFetch: "limited" | "default";
};

const CDatasets = (props: Props) => {
    const [datasets, setDatasets] = useState<datasetRepo.Dataset[]>([]);
    const [isEmpty, setIsEmpty] = useState(false);
    const query = new URLSearchParams(useLocation().search);
    const [isFetchingDataNext, setIsFetchingDataNext] = useState(false);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const limit = 10;

    useEffect(() => {
        getDatasets();
    }, [props.toFetch, page]);

    useEffect(() => {
        setPage(1);
        getDatasets();
    }, [query.get("category")]);

    const getDatasets = async () => {
        page === 1 && setDatasets([]);

        if (props.toFetch === "limited") {
            const response = await datasetRepo.getAll(1, 5);
            setDatasets(response.datasets);
            setIsEmpty(response.datasets === undefined || response.datasets.length === 0);
        }

        if (props.toFetch === "default") {
            if (query.get("category") === null) {
                const response = await datasetRepo.getAll(page, limit);
                setDatasets(response.datasets);
                setIsEmpty(response.datasets === undefined || response.datasets.length === 0);
                setTotal(response.total);
            } else {
                let categoryId = "";

                const response = await categoryRepo.getAll();

                for (let category of response.categories) {
                    if (category.name === query.get("category")) {
                        categoryId = category._id!!;
                        break;
                    }
                }

                const response1 = await datasetRepo.getAllByCategoryId(categoryId, page, limit);
                setDatasets(response1.datasets);
                setIsEmpty(response1.datasets === undefined || response1.datasets.length === 0);
                setTotal(response1.total);
            }
        }
    };

    return (
        <CCard w="full">
            {datasets.length === 0 && !isEmpty && !isFetchingDataNext && (
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

            {props.toFetch === "default" && Math.ceil(total / limit) > 1 && (
                <Box mt="16px">
                    <CPagination totalPage={Math.ceil(total / limit)} currentPage={page} onPageSelected={(page) => setPage(page)} />
                </Box>
            )}
        </CCard>
    );
};

export default CDatasets;
