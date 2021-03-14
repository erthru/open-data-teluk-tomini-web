import { Box } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

const Header = () => {
    const history = useHistory();
    const [isHomeMode, setIsHomeMode] = useState(false);

    useEffect(() => {
        setIsHomeMode(history.location.pathname === "/");
        console.log(history.location.pathname)
    }, [history.location.pathname]);

    return <Box></Box>;
};

export default Header;
