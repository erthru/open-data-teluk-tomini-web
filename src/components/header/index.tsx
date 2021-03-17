import { Box, Container, Flex, Link, Text } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import CLogo from "../common/logo";
import { Link as ReactLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Collapse } from "@chakra-ui/transition";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { useSelector } from "react-redux";
import { Store } from "../../data/store";
import { NavigationKey } from "../../data/store/navigation/types";

const CHeader = () => {
    const history = useHistory();
    const [isHomeMode, setIsHomeMode] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const currentActiveKey = useSelector((store: Store) => store.navigation.currentActiveKey);

    useEffect(() => {
        setIsHomeMode(history.location.pathname === "/");
    }, [history.location.pathname]);

    return (
        <Box>
            <Box bg="blue.500">
                <Container maxW="1200px" p="16px">
                    <Flex alignItems="center">
                        <Link to="/" as={ReactLink} _hover={{ textDecor: "none" }} _focus={{ outline: "none" }}>
                            <CLogo />
                        </Link>

                        <Box
                            ml="auto"
                            color="white"
                            fontSize="18px"
                            cursor="pointer"
                            display={{ base: "block", md: "none" }}
                            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                        >
                            <FontAwesomeIcon icon={isMobileNavOpen ? faChevronUp : faChevronDown} />
                        </Box>

                        <Flex display={{ base: "none", md: "flex" }} ml="auto" fontWeight="bold" fontSize="15px">
                            <Link
                                _hover={{ textDecor: "none" }}
                                _focus={{ outline: "none" }}
                                as={ReactLink}
                                to="/datasets"
                                color={currentActiveKey === NavigationKey.datasets ? "gray.600" : "white"}
                                rounded="lg"
                                py="2px"
                                px="12px"
                                bg={currentActiveKey === NavigationKey.datasets ? "white" : ""}
                            >
                                DATASET
                            </Link>

                            <Link
                                ml="6px"
                                _hover={{ textDecor: "none" }}
                                _focus={{ outline: "none" }}
                                as={ReactLink}
                                to="/organizations"
                                color={currentActiveKey === NavigationKey.organizations ? "gray.600" : "white"}
                                rounded="lg"
                                py="2px"
                                px="12px"
                                bg={currentActiveKey === NavigationKey.organizations ? "white" : ""}
                            >
                                ORGANISASI
                            </Link>

                            <Link
                                ml="6px"
                                _hover={{ textDecor: "none" }}
                                _focus={{ outline: "none" }}
                                as={ReactLink}
                                to="/visualizations"
                                color={currentActiveKey === NavigationKey.visualizations ? "gray.600" : "white"}
                                rounded="lg"
                                py="2px"
                                px="12px"
                                bg={currentActiveKey === NavigationKey.visualizations ? "white" : ""}
                            >
                                VISUALISASI
                            </Link>

                            <Link
                                ml="6px"
                                _hover={{ textDecor: "none" }}
                                _focus={{ outline: "none" }}
                                as={ReactLink}
                                to="/infographics"
                                color={currentActiveKey === NavigationKey.infographics ? "gray.600" : "white"}
                                rounded="lg"
                                py="2px"
                                px="12px"
                                bg={currentActiveKey === NavigationKey.infographics ? "white" : ""}
                            >
                                INFOGRAFIS
                            </Link>
                        </Flex>
                    </Flex>

                    <Collapse in={isMobileNavOpen} animateOpacity>
                        <Flex w="full" flexWrap="wrap" fontWeight="bold" mt="16px" fontSize="14px">
                            <Flex w="full">
                                <Link
                                    _hover={{ textDecor: "none" }}
                                    mx="auto"
                                    textAlign="center"
                                    _focus={{ outline: "none" }}
                                    as={ReactLink}
                                    to="/datasets"
                                    color={currentActiveKey === NavigationKey.datasets ? "gray.600" : "white"}
                                    rounded="lg"
                                    py="2px"
                                    px="12px"
                                    bg={currentActiveKey === NavigationKey.datasets ? "white" : ""}
                                >
                                    DATASET
                                </Link>
                            </Flex>

                            <Flex w="full" mt="8px">
                                <Link
                                    _hover={{ textDecor: "none" }}
                                    mx="auto"
                                    textAlign="center"
                                    _focus={{ outline: "none" }}
                                    as={ReactLink}
                                    to="/organizations"
                                    color={currentActiveKey === NavigationKey.organizations ? "gray.600" : "white"}
                                    rounded="lg"
                                    py="2px"
                                    px="12px"
                                    bg={currentActiveKey === NavigationKey.organizations ? "white" : ""}
                                >
                                    ORGANISASI
                                </Link>
                            </Flex>

                            <Flex w="full" mt="8px">
                                <Link
                                    _hover={{ textDecor: "none" }}
                                    mx="auto"
                                    textAlign="center"
                                    _focus={{ outline: "none" }}
                                    as={ReactLink}
                                    to="/visualizations"
                                    color={currentActiveKey === NavigationKey.visualizations ? "gray.600" : "white"}
                                    rounded="lg"
                                    py="2px"
                                    px="12px"
                                    bg={currentActiveKey === NavigationKey.visualizations ? "white" : ""}
                                >
                                    VISUALISASI
                                </Link>
                            </Flex>

                            <Flex w="full" mt="8px">
                                <Link
                                    _hover={{ textDecor: "none" }}
                                    mx="auto"
                                    textAlign="center"
                                    _focus={{ outline: "none" }}
                                    as={ReactLink}
                                    to="/infographics"
                                    color={currentActiveKey === NavigationKey.infographics ? "gray.600" : "white"}
                                    rounded="lg"
                                    py="2px"
                                    px="12px"
                                    bg={currentActiveKey === NavigationKey.infographics ? "white" : ""}
                                >
                                    INFOGRAFIS
                                </Link>
                            </Flex>
                        </Flex>
                    </Collapse>

                    {isHomeMode && (
                        <Flex w="full" alignItems="center" mt={{ base: "24px", md: "0" }}>
                            <Box w="full" color="white" fontSize="18px" pr={{ md: "80px", lg: "210px" }}>
                                <Text fontSize={{ base: "13px", md: "16px" }}>
                                    <strong>Selamat Datang</strong> di Portal
                                </Text>

                                <Text fontWeight="bold" fontSize={{ base: "21px", md: "32px" }} mt={{ base: "0", md: "-6px" }}>
                                    Data Terbuka Teluk Tomini
                                </Text>

                                <Input
                                    mt="12px"
                                    type="search"
                                    color="black"
                                    rounded="lg"
                                    bg="white"
                                    placeholder="Cari dataset, visualisasi, infografis ..."
                                />
                            </Box>

                            <Image ml="auto" src="images/seo.png" h="280px" display={{ base: "none", md: "block" }} />
                        </Flex>
                    )}
                </Container>
            </Box>

            {!isHomeMode && (
                <Container maxW="1200px" p="16px">
                    <Box px={{ base: "0", md: "90px", lg: "140px" }}>
                        <Input type="search" color="black" rounded="lg" bg="white" placeholder="Cari dataset, visualisasi, infografis ..." />
                    </Box>
                </Container>
            )}
        </Box>
    );
};

export default CHeader;
