import { Box, Flex, Link, Text } from "@chakra-ui/layout";
import { Category } from "../../../data/api/repositories/category-repository";
import { Link as ReactLink } from "react-router-dom";
import { Image } from "@chakra-ui/image";

type Props = {
    category: Category;
};

const HorizontalCategory = (props: Props) => (
    <Link to={`/datasets?category=${props.category.name}`} _hover={{ textDecor: "none" }} _focus={{ outline: "none" }} as={ReactLink}>
        <Box color="white" bg="blue.400" p="16px" rounded="lg" w="100px">
            <Flex w="full" justifyContent="center">
                <Image filter="brightness(0) invert(1)" src={props.category.icon} w={{ base: "26px", md: "32px" }} h={{ base: "26px", md: "32px" }} />
            </Flex>

            <Text w="full" textAlign="center" fontSize="12px" mt="8px" isTruncated>
                {props.category.name}
            </Text>
        </Box>
    </Link>
);

export default HorizontalCategory;
