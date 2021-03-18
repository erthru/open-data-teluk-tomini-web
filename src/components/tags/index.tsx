import { Box, Flex, Text } from "@chakra-ui/layout";
import { CircularProgress } from "@chakra-ui/progress";
import * as tagRepo from "../../data/api/repositories/tag-repository";
import CCard from "../common/card";

type Props = {
    tags: tagRepo.Tag[];
};

const CTags = (props: Props) => {
    return (
        <CCard>
            {props.tags === undefined ? (
                <Flex w="full" justifyContent="center">
                    <CircularProgress size="36px" color="blue.500" isIndeterminate />
                </Flex>
            ) : (
                <Flex w="full" flexWrap="wrap">
                    {props.tags.map((tag) => (
                        <Box pr="6px" pb="6px" key={tag._id}>
                            <Text px="10px" fontSize={{ base: "14px", md: "16px" }} py="6px" bg="blue.100" color="blue.700" rounded="lg">
                                {tag.name}
                            </Text>
                        </Box>
                    ))}
                </Flex>
            )}
        </CCard>
    );
};

export default CTags;
