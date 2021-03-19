import { Box } from "@chakra-ui/layout";
import React from "react";

type Props = {
    children?: React.ReactNode;
    w?: string;
    h?: string;
};

const CCard = (props: Props) => (
    <Box rounded="lg" bg="white" p="16px" h={props.h} w={props.w}>
        {props.children}
    </Box>
);

export default CCard;
