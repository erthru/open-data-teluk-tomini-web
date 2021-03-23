import { Box } from "@chakra-ui/layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import CDatasets from "../../components/datasets";
import CGridVisualizations from "../../components/grid-visualizations";
import CInfographics from "../../components/infograpics";
import { setNavigationKey } from "../../data/store/navigation/actions";
import { TITLE } from "../../helpers/environments";

const XSearch = () => {
    const query = new URLSearchParams(useLocation().search);
    const [keywords, setKeywords] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNavigationKey(null));
    }, []);

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

                {keywords !== "" && (
                    <TabPanels>
                        <TabPanel>
                            <CDatasets toFetch="search" searchKeywords={keywords} />
                        </TabPanel>

                        <TabPanel>
                            <CGridVisualizations toFetch="search" searchKeywords={keywords} />
                        </TabPanel>

                        <TabPanel>
                            <CInfographics toFetch="search" searchKeywords={keywords} />
                        </TabPanel>
                    </TabPanels>
                )}
            </Tabs>
        </Box>
    );
};

export default XSearch;
