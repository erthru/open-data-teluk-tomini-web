import { Box } from "@chakra-ui/layout";
import { Helmet } from "react-helmet";
import { TITLE } from "../../helpers/environments";

const XDatasets = () => (
    <Box>
        <Helmet>
            <title>{`Dataset | ${TITLE}`}</title>
        </Helmet>
        hello
    </Box>
);

export default XDatasets;
