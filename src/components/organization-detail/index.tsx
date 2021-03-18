import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { CircularProgress } from "@chakra-ui/progress";
import * as organizationRepo from "../../data/api/repositories/organization-repository";
import CCard from "../common/card";

type Props = {
    organization: organizationRepo.Organization;
};

const COrganizationDetail = (props: Props) => {
    return (
        <CCard>
            {props.organization === undefined ? (
                <Flex w="full" justifyContent="center">
                    <CircularProgress size="36px" color="blue.500" isIndeterminate />
                </Flex>
            ) : (
                <Box>
                    <Image src={props.organization.photo} w="full" h="250px" objectFit="cover" rounded="lg" />

                    <Text mt="16px" fontWeight="bold" color="gray.700" fontSize="18px">
                        {props.organization.name}
                    </Text>

                    <Text mt="4px" fontSize="14px" color="gray.500">
                        {props.organization.description}
                    </Text>
                </Box>
            )}
        </CCard>
    );
};

export default COrganizationDetail;
