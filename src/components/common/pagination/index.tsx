import { Box, Flex, Text } from "@chakra-ui/layout";
import { useEffect, useState } from "react";

type Props = {
    totalPage: number;
    onPageSelected: (page: number) => void;
    currentPage: number;
};

const CPagination = (props: Props) => {
    const [arrOfPage, setArrOfPage] = useState<number[]>([]);

    useEffect(() => {
        const arrOfPageTemp: number[] = [];
        for (let i = 0; i < props.totalPage; i++) arrOfPageTemp.push(i + 1);
        setArrOfPage(arrOfPageTemp);
    }, [props.totalPage]);

    return (
        <Flex>
            {arrOfPage.map((page) => (
                <Box pr="10px" key={page}>
                    <Text
                        cursor="pointer"
                        _hover={{ textDecor: "none" }}
                        py="4px"
                        px="12px"
                        bg={props.currentPage === page ? "blue.500" : "gray.200"}
                        color={props.currentPage === page ? "white" : ""}
                        rounded="lg"
                        onClick={() => props.onPageSelected(page)}
                    >
                        {page}
                    </Text>
                </Box>
            ))}
        </Flex>
    );
};

export default CPagination;
