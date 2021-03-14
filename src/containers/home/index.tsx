import { Box, Container, Flex } from "@chakra-ui/layout";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";
import { TITLE } from "../../helpers/environments";

const Home = () => (
    <Box bg="blue.600">
        <Helmet>
            <title>{TITLE}</title>
        </Helmet>

        <Container maxW="1200px">
            <Flex alignItems="center" color="white">
                hello <Box ml="6px" /> <FontAwesomeIcon icon={faInstagram} />
            </Flex>
        </Container>
    </Box>
);

export default Home;
