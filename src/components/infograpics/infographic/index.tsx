import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/modal";
import { useState } from "react";
import * as infographicRepo from "../../../data/api/repositories/infographic-repository";
import CCard from "../../common/card";

type Props = {
    infographic: infographicRepo.Infographic;
};

const CInfographic = (props: Props) => {
    const [isModalShown, setIsModalShown] = useState(false);

    return (
        <Box>
            <CCard h="full">
                <Image
                    src={props.infographic.banner}
                    w="full"
                    h={{ base: "165px", md: "200px" }}
                    rounded="lg"
                    objectFit="cover"
                    cursor="pointer"
                    onClick={() => setIsModalShown(true)}
                />

                <Text fontWeight="bold" mt="16px" fontSize={{ base: "15px", md: "16px" }}>
                    {props.infographic.title}
                </Text>
            </CCard>

            <Modal isOpen={isModalShown} onClose={() => setIsModalShown(false)}>
                <ModalOverlay />

                <ModalContent>
                    <ModalHeader />
                    <ModalCloseButton />

                    <ModalBody pt="26px" pb="16px">
                        <Image src={props.infographic.banner} w="full" rounded="lg" objectFit="cover" cursor="pointer" />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default CInfographic;
