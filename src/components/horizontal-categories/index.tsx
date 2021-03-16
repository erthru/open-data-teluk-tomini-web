import { Image } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/layout";
import { CircularProgress } from "@chakra-ui/progress";
import { useEffect, useState } from "react";
import * as categoryRepo from "../../data/api/repositories/category-repository";
import HorizontalCategory from "./horizontal-category";

const HorizontalCategories = () => {
    const [categories, setCategories] = useState<categoryRepo.Category[]>([]);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        const response = await categoryRepo.getAll();
        setCategories(response.categories);
    };

    return (
        <Box>
            <Flex w="full" justifyContent="center">
                {categories.length === 0 && <CircularProgress isIndeterminate size="32px" color="blue.500" />}
            </Flex>

            <Flex w="full" overflowX="auto" className="no-scrollbars">
                {categories.map((category) => (
                    <Box key={category._id} pr="16px">
                        <HorizontalCategory category={category} />
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

export default HorizontalCategories;
