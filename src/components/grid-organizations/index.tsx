import { Box, Flex } from "@chakra-ui/layout";
import { CircularProgress } from "@chakra-ui/progress";
import { useEffect, useState } from "react";
import * as organizationRepo from "../../data/api/repositories/organization-repository";
import CGridOrganization from "./grid-organization";

const CGridOrganizations = () => {
    const [organizations, setOrganizations] = useState<organizationRepo.Organization[]>([]);

    useEffect(() => {
        getOrganizations();
    }, []);

    const getOrganizations = async () => {
        const response = await organizationRepo.getAllIncludeDatasetsTotal();
        setOrganizations(response.organizations);
    };

    return (
        <Box>
            {organizations.length === 0 ? (
                <Flex w="full" justifyContent="center">
                    <CircularProgress size="36px" color="blue.500" isIndeterminate />
                </Flex>
            ) : (
                <Flex w="full" flexWrap="wrap">
                    {organizations.map((organization) => (
                        <Box w={{ base: "50%", md: "33%", lg: "20%" }} pr="16px" pb="16px" key={organization._id}>
                            <CGridOrganization organization={organization} />
                        </Box>
                    ))}
                </Flex>
            )}
        </Box>
    );
};

export default CGridOrganizations;
