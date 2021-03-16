import { Image } from "@chakra-ui/image";
import { Box, Divider, Flex, Link, Text } from "@chakra-ui/layout";
import * as visualizationRepo from "../../../data/api/repositories/visualization-repository";
import { Link as ReactLink } from "react-router-dom";

type Props = {
    visualization: visualizationRepo.Visualization;
};

const CVisualization = (props: Props) => (
    <Box pb="16px">
        <Link as={ReactLink} to={`/visualization/${props.visualization.slug}`} _hover={{ textDecor: "none" }} _focus={{ outline: "none" }}>
            <Flex w="full">
                <Image
                    src={props.visualization.thumbnail}
                    w={{ base: "50px", md: "61px", lg: "72px" }}
                    rounded="lg"
                    h={{ base: "50px", md: "61px", lg: "72px" }}
                />

                <Box ml="16px" w={{ base: "70%", lg: "80%" }}>
                    <Text fontWeight="bold" color="gray.700" fontSize={{ base: "16px", md: "18px" }}>
                        {props.visualization.title}
                    </Text>

                    <Text fontSize={{ base: "12px", md: "14px" }} color="gray.500" isTruncated>
                        {props.visualization.body}
                    </Text>
                </Box>
            </Flex>
        </Link>

        <Divider mt="16px" />
    </Box>
);

export default CVisualization;
