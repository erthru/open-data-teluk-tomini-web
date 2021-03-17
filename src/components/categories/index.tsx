import { Box, Divider, Flex, Link } from "@chakra-ui/layout";
import { CircularProgress } from "@chakra-ui/progress";
import { useEffect, useState } from "react";
import * as categoryRepo from "../../data/api/repositories/category-repository";
import CCard from "../common/card";
import { Link as ReactLink, useLocation } from "react-router-dom";

const CCategories = () => {
    const [categories, setCategories] = useState<categoryRepo.Category[]>([]);
    const query = new URLSearchParams(useLocation().search);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        const response = await categoryRepo.getAll();
        setCategories(response.categories);
    };

    return (
        <CCard>
            {categories.length === 0 && (
                <Flex w="full" justifyContent="center">
                    <CircularProgress isIndeterminate size="32px" color="blue.500" />
                </Flex>
            )}

            {categories.map((category) => (
                <Box pb="8px" key={category._id}>
                    <Link
                        as={ReactLink}
                        to={`/datasets?category=${category.name}`}
                        _hover={{ textDecor: "none" }}
                        _focus={{ outline: "none" }}
                        color={query.get("category") === category.name ? "" : "gray.700"}
                        fontWeight={query.get("category") === category.name ? "bold" : ""}
                    >
                        {category.name}
                    </Link>

                    <Divider mt="8px" />
                </Box>
            ))}
        </CCard>
    );
};

export default CCategories;
