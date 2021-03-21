import { Box, Flex, Link, Text } from "@chakra-ui/layout";
import { CircularProgress } from "@chakra-ui/progress";
import { useEffect, useState } from "react";
import * as datasetRepo from "../../data/api/repositories/dataset-repository";
import CCard from "../common/card";
import { Link as ReactLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

type Props = {
    onLoaded?: (dataset: datasetRepo.Dataset) => void;
    toFetch: "bySlug";
    slug?: string;
};

const CDatasetDetail = (props: Props) => {
    const [dataset, setDataset] = useState<datasetRepo.Dataset>({});

    useEffect(() => {
        getDataset();
        return () => setDataset({});
    }, [props.toFetch]);

    const getDataset = async () => {
        if (props.toFetch === "bySlug") {
            const response = await datasetRepo.getBySlug(props.slug!!);
            setDataset(response.dataset);
            props.onLoaded!!(response.dataset);
        }
    };

    const onDownloaded = () => {
        datasetRepo.incrementDownloaded(dataset._id!!);
    };

    return (
        <CCard>
            {Object.keys(dataset).length === 0 ? (
                <Flex w="full" justifyContent="center">
                    <CircularProgress color="blue.500" size="36px" isIndeterminate />
                </Flex>
            ) : (
                <Box>
                    <Text color="gray.700" fontWeight="bold" fontSize={{ base: "17px", md: "22px" }}>
                        {dataset.title}
                    </Text>

                    <Text color="gray.600" mt="8px" fontSize={{ base: "12px", md: "14px" }}>
                        {dataset.description}
                    </Text>

                    <Flex w="full" flexWrap={{ base: "wrap", md: "nowrap" }} mt="32px">
                        <Box w={{ base: "full", md: "30%" }} pr={{ base: "0", md: "16px" }}>
                            <Text fontWeight="bold" color="grey.700" fontSize="14px">
                                Topik:
                            </Text>

                            <Box mt="4px" />

                            <Link
                                as={ReactLink}
                                to={`/datasets?category=${dataset.category?.name}`}
                                color="blue.500"
                                fontSize={{ base: "14px", md: "16px" }}
                            >
                                {dataset.category?.name}
                            </Link>

                            <Text fontWeight="bold" mt="16px" color="grey.700" fontSize="14px">
                                Unduh:
                            </Text>

                            <Box mt="4px" />

                            <Link _hover={{ textDecor: "none" }} href={dataset.attachment} color="green.500" onClick={onDownloaded}>
                                <FontAwesomeIcon icon={faDownload} size="1x" />{" "}
                                {dataset.attachment?.substr(dataset.attachment.lastIndexOf(".") + 1).toUpperCase()}
                            </Link>
                        </Box>

                        <Box w={{ base: "100%", md: "70%" }} mt={{ base: "16px", md: "0" }}>
                            <Text fontWeight="bold" color="grey.700" fontSize="14px">
                                Metadata:
                            </Text>

                            <Box mt="4px" />

                            <ul style={{ marginLeft: "32px", fontSize: "14px" }}>
                                <li>Terakhir Diperbarui: {new Date(dataset.updatedAt!!).toLocaleDateString()}</li>
                                <li>Dibuat: {new Date(dataset.createdAt!!).toLocaleDateString()}</li>
                                <li>Sumber: {dataset.source}</li>
                                <li>Tahun: {dataset.year}</li>
                                <li>Kontak: {dataset.contact}</li>
                                <li>Rujukan: {dataset.reference}</li>
                            </ul>
                        </Box>
                    </Flex>
                </Box>
            )}
        </CCard>
    );
};

export default CDatasetDetail;
