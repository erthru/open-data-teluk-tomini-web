import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { CircularProgress } from "@chakra-ui/progress";
import { useEffect, useState } from "react";
import * as organizationRepo from "../../data/api/repositories/organization-repository";
import CCard from "../common/card";

type Props = {
    toFetch: "byProps" | "bySlug";
    organization?: organizationRepo.Organization;
    slug?: string;
    onLoaded?: (organization: organizationRepo.Organization) => void;
};

const COrganizationDetail = (props: Props) => {
    const [organization, setOrganization] = useState<organizationRepo.Organization>({});

    useEffect(() => {
        if (props.toFetch === "bySlug") getOrganization();
    }, [props.toFetch]);

    useEffect(() => {
        if (props.organization !== undefined) setOrganization(props.organization);
    }, [props.organization]);

    const getOrganization = async () => {
        const response = await organizationRepo.getBySlug(props.slug!!);
        setOrganization(response.organization);
        props.onLoaded!!(response.organization);
    };

    return (
        <CCard>
            {Object.keys(organization).length === 0 ? (
                <Flex w="full" justifyContent="center">
                    <CircularProgress size="36px" color="blue.500" isIndeterminate />
                </Flex>
            ) : (
                <Box>
                    <Image src={organization.photo} w="full" h="250px" objectFit="cover" rounded="lg" />

                    <Text mt="16px" fontWeight="bold" color="gray.700" fontSize="18px">
                        {organization.name}
                    </Text>

                    <Text mt="4px" fontSize="14px" color="gray.500">
                        {organization.description}
                    </Text>
                </Box>
            )}
        </CCard>
    );
};

export default COrganizationDetail;
