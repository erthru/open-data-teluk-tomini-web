import { Box } from "@chakra-ui/layout";
import { Helmet } from "react-helmet";
import Header from "../../components/header";
import { TITLE } from "../../helpers/environments";

const Home = () => (
    <Box bg="blue.600">
        <Helmet>
            <title>{TITLE}</title>
        </Helmet>

        <Header />
    </Box>
);

export default Home;
