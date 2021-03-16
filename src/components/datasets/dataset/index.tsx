import { Box, Divider, Flex, Link, Text } from "@chakra-ui/layout";
import * as datasetRepo from "../../../data/api/repositories/dataset-repository";
import { Link as ReactLink } from "react-router-dom";

type Props = {
    dataset: datasetRepo.Dataset;
};

const CDataset = (props: Props) => {
    const bgs = ["blue.500", "green.500", "teal.500", "orange.500", "yellow.500", "purple.500"];

    return (
        <Box pb="16px">
            <Flex w="full">
                <Text
                    mt="6px"
                    color="white"
                    backgroundColor={bgs[Math.floor(Math.random() * bgs.length)]}
                    rounded="lg"
                    fontSize={{ base: "9px", md: "12px" }}
                    py="4px"
                    px="10px"
                    height={{ base: "21px", md: "24px" }}
                    fontWeight="extrabold"
                >
                    {props.dataset.attachment?.substr(props.dataset.attachment.lastIndexOf(".") + 1).toUpperCase()}
                </Text>

                <Box ml="16px">
                    <Link
                        to={`/dataset/${props.dataset.slug}`}
                        fontWeight="bold"
                        fontSize={{ base: "17px", md: "22px" }}
                        color="gray.700"
                        cursor="pointer"
                        as={ReactLink}
                        _focus={{ outline: "none" }}
                        _hover={{ textDecoration: "none" }}
                    >
                        {props.dataset.title}
                    </Link>

                    <Text color="gray.500" fontSize={{ base: "11px", md: "14px" }} mt={{ base: "0", md: "-2px" }}>
                        {props.dataset.description}
                    </Text>
                </Box>
            </Flex>

            <Divider mt="16px" />
        </Box>
    );
};

export default CDataset;
