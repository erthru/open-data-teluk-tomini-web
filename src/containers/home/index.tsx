import { Box, Container } from "@chakra-ui/layout";
import { Helmet } from "react-helmet";
import Header from "../../components/header";
import { TITLE } from "../../helpers/environments";
import "./index.css";

const Home = () => (
    <Box bg="#f7fafc">
        <Helmet>
            <title>{TITLE}</title>
        </Helmet>

        <Header />

        <Container maxW="1200px" p="16px">
            asfas
        </Container>
    </Box>
);

export default Home;
