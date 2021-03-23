import { Box, Flex, Text } from "@chakra-ui/layout";
import { CircularProgress } from "@chakra-ui/progress";
import { useEffect, useState } from "react";
import * as infographicRepo from "../../data/api/repositories/infographic-repository";
import CPagination from "../common/pagination";
import CInfographic from "./infographic";

type Props = {
    toFetch: "default" | "search";
    searchKeywords?: string;
};

const CInfographics = (props: Props) => {
    const [infographics, setInfographics] = useState<infographicRepo.Infographic[]>([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [isEmpty, setIsEmpty] = useState(false);
    const limit = 9;

    useEffect(() => {
        setPage(1);
        getInfographics();
    }, [props.toFetch, props.searchKeywords]);

    useEffect(() => {
        getInfographics();
    }, [page]);

    const getInfographics = async () => {
        if (props.toFetch === "default") {
            const response = await infographicRepo.getAll(page, limit);
            setInfographics(response.infographics);
            setIsEmpty(response.infographics === undefined || response.infographics.length === 0);
            setTotal(response.total);
        }

        if (props.toFetch === "search") {
            const response = await infographicRepo.search(props.searchKeywords!!, page, limit);
            setInfographics(response.infographics);
            setIsEmpty(response.infographics === undefined || response.infographics.length === 0);
            setTotal(response.total);
        }
    };

    return (
        <Box>
            {infographics.length === 0 && !isEmpty && (
                <Flex w="full" justifyContent="center">
                    <CircularProgress color="blue.500" size="36px" isIndeterminate />
                </Flex>
            )}

            {isEmpty && (
                <Flex w="full" justifyContent="center">
                    <Text>Infografis tidak ditemukan</Text>
                </Flex>
            )}

            <Flex w="full" flexWrap="wrap">
                {infographics.map((infographic) => (
                    <Box pr={{ base: "0", md: "16px" }} w={{ base: "full", md: "50%", lg: "33%" }} pb="16px" key={infographic._id}>
                        <CInfographic infographic={infographic} />
                    </Box>
                ))}
            </Flex>

            <Box mt="16px">
                <CPagination totalPage={Math.ceil(total / limit)} currentPage={page} onPageSelected={(page) => setPage(page)} />
            </Box>
        </Box>
    );
};

export default CInfographics;
