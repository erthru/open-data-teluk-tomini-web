import { Flex, Link, Text } from "@chakra-ui/layout";
import * as organizationRepo from "../../../data/api/repositories/organization-repository";
import CCard from "../../common/card";
import { Link as ReactLink } from "react-router-dom";
import { Image } from "@chakra-ui/image";

type Props = {
    organization: organizationRepo.Organization;
};

const CGridOrganization = (props: Props) => (
    <Link as={ReactLink} to={`/organization/${props.organization.slug}`} _hover={{ textDecor: "none" }}>
        <CCard w="full" h="full">
            <Flex w="full" justifyContent="center">
                <Image src={props.organization.photo} w="86px" h="86px" objectFit="cover" rounded="lg" />
            </Flex>

            <Text w="full" color="blue.500" fontSize={{ base: "13px", md: "14px" }} mt="16px" textAlign="center" fontWeight="bold">
                {props.organization.name}
            </Text>

            <Text w="full" color="grey.500" fontSize={{ base: "11px", md: "12px" }} mt="4px" textAlign="center" fontWeight="bold">
                {props.organization.datasetsTotal} Dataset
            </Text>
        </CCard>
    </Link>
);

export default CGridOrganization;
