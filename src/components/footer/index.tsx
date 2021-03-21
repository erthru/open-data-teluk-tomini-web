import { Box, Container, Flex, Link, Text } from "@chakra-ui/layout";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CLogo from "../common/logo";

const CFooter = () => (
    <Box bg="gray.900">
        <Container maxW="1200px" p="16px">
            <Flex w="full" flexWrap={{ base: "wrap", md: "nowrap" }} alignItems="center" justifyContent={{ base: "center", md: "normal" }}>
                <Flex w={{ base: "full", md: "auto" }} justifyContent={{ base: "center", md: "left" }}>
                    <CLogo />
                </Flex>

                <Box color="gray.100" textAlign={{ base: "center", md: "right" }} ml={{ base: "none", md: "auto" }} mt={{ base: "16px", md: "0" }}>
                    <Text>All created with ♥</Text>

                    <Text mt="2px">
                        Clone this on{" "}
                        <Link target="blank" _focus={{ outline: "none" }} href="https://github.com/erthru/open-data-teluk-tomini-web">
                            <FontAwesomeIcon icon={faGithub} />
                        </Link>
                    </Text>

                    <Text mt="2px">
                        &#169;{" "}
                        <Link _hover={{ textDecor: "none" }} target="blank" _focus={{ outline: "none" }} href="http://ung.ac.id">
                            Universitas Negeri Gorontalo
                        </Link>
                    </Text>
                </Box>
            </Flex>
        </Container>
    </Box>
);

export default CFooter;
