import { Text } from "@chakra-ui/layout";

type Props = {
    title: string;
};

const CSectionTitle = (props: Props) => (
    <Text fontWeight="bold" fontSize={{ base: "16px", md: "21px" }} color="gray.700">
        {props.title}
    </Text>
);

export default CSectionTitle;
