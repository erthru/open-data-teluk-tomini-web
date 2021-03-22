import { Box } from "@chakra-ui/layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router";
import { TITLE } from "../../helpers/environments";

const XSearch = () => {
    const query = new URLSearchParams(useLocation().search);
    const [keywords, setKeywords] = useState("");

    useEffect(() => {
        if (query.get("query") !== null) setKeywords(query.get("query")!!);
    }, [query.get("query")]);

    return (
        <Box>
            <Helmet>
                <title>{`Cari ${query.get("query")} | ${TITLE}`}</title>
            </Helmet>

            <Tabs>
                <TabList>
                    <Tab>Dataset</Tab>
                    <Tab>Visualisasi</Tab>
                    <Tab>Infografis</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>1</TabPanel>
                    <TabPanel>2</TabPanel>
                    <TabPanel>3</TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default XSearch;
