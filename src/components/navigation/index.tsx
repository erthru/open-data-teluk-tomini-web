import { Flex, Link } from "@chakra-ui/layout";
import { useSelector } from "react-redux";
import { Link as ReactLink } from "react-router-dom";
import { Store } from "../../data/store";
import { NavigationKey } from "../../data/store/navigation/types";

type Props = {
    mode: "desktop" | "mobile";
    onMobileNavSelected?: () => void;
};

const Navigation = (props: Props) => {
    const currentActiveKey = useSelector((store: Store) => store.navigation.currentActiveKey);

    return props.mode === "desktop" ? (
        <Flex fontWeight="bold" fontSize="15px">
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
    ) : (
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
                    onClick={props.onMobileNavSelected}
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
                    onClick={props.onMobileNavSelected}
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
                    onClick={props.onMobileNavSelected}
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
                    onClick={props.onMobileNavSelected}
                >
                    INFOGRAFIS
                </Link>
            </Flex>
        </Flex>
    );
};

export default Navigation;
