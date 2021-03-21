import { Box, Flex } from "@chakra-ui/layout";
import { CircularProgress } from "@chakra-ui/progress";
import { useEffect, useState } from "react";
import * as infographicRepo from "../../data/api/repositories/infographic-repository";
import CPagination from "../common/pagination";
import CInfographic from "./infographic";

const CInfographics = () => {
    const [infographics, setInfographics] = useState<infographicRepo.Infographic[]>([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const limit = 9;

    useEffect(() => {
        getInfographics();
    }, [page]);

    const getInfographics = async () => {
        const response = await infographicRepo.getAll(page, limit);
        setInfographics(response.infographics);
        setTotal(response.total);
    };

    return (
        <Box>
            {infographics.length === 0 ? (
                <Flex w="full" justifyContent="center">
                    <CircularProgress color="blue.500" size="36px" isIndeterminate />
                </Flex>
            ) : (
                <Flex w="full" flexWrap="wrap">
                    {infographics.map((infographic) => (
                        <Box pr={{ base: "0", md: "16px" }} w={{ base: "full", md: "50%", lg: "33%" }} pb="16px" key={infographic._id}>
                            <CInfographic infographic={infographic} />
                        </Box>
                    ))}
                </Flex>
            )}

            <Box mt="16px">
                <CPagination totalPage={Math.ceil(total / limit)} currentPage={page} onPageSelected={(page) => setPage(page)} />
            </Box>
        </Box>
    );
};

export default CInfographics;
