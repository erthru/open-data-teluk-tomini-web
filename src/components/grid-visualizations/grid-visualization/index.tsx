import { Image } from "@chakra-ui/image";
import { Link, Text } from "@chakra-ui/layout";
import * as visualizationRepo from "../../../data/api/repositories/visualization-repository";
import CCard from "../../common/card";
import { Link as ReactLink } from "react-router-dom";

type Props = {
    visualization: visualizationRepo.Visualization;
};

const CGridVisualization = (props: Props) => (
    <Link as={ReactLink} to={`/visualization/${props.visualization.slug}`} _hover={{ textDecor: "none" }} _focus={{ outline: "none" }}>
        <CCard h="full" overflowY="hidden">
            <Image src={props.visualization.thumbnail} w="full" h={{ base: "165px", md: "200px" }} objectFit="cover" rounded="lg" />

            <Text mt="16px" color="gray.500" fontSize="14px">
                Pada: {new Date(props.visualization.createdAt!!).toLocaleDateString()}
            </Text>

            <Text mt="6px" fontWeight="bold" maxH="3em" lineHeight="1.8em" fontSize={{ base: "15px", md: "16px" }}>
                {props.visualization.title}
            </Text>
        </CCard>
    </Link>
);

export default CGridVisualization;
