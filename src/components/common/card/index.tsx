import { Box } from "@chakra-ui/layout";
import React from "react";

type Props = {
    children?: React.ReactNode;
    w?: string;
    h?: string;
    overflowY?: "auto" | "hidden" | "scroll" | "visible";
};

const CCard = (props: Props) => (
    <Box rounded="lg" bg="white" p="16px" h={props.h} w={props.w} overflowY={props.overflowY}>
        {props.children}
    </Box>
);

export default CCard;
