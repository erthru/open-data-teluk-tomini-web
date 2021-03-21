import { Box } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import CSectionTitle from "../../components/common/section-title";
import CVisualizationDetail from "../../components/visualization-detail";
import * as visualizationRepo from "../../data/api/repositories/visualization-repository";
import { setNavigationKey } from "../../data/store/navigation/actions";
import { NavigationKey } from "../../data/store/navigation/types";
import { TITLE } from "../../helpers/environments";

type Params = {
    slug: string;
};

const XVisualizationBySlug = () => {
    const params = useParams<Params>();
    const dispatch = useDispatch();
    const [visualization, setVisualization] = useState<visualizationRepo.Visualization>({});

    useEffect(() => {
        dispatch(setNavigationKey(NavigationKey.visualizations));
    }, []);

    return (
        <Box>
            <Helmet>
                <title>{`${visualization.title} | ${TITLE}`}</title>
            </Helmet>

            {Object.keys(visualization).length !== 0 && (
                <Box pb="16px">
                    <CSectionTitle title={visualization.title!!} />
                </Box>
            )}

            <CVisualizationDetail toFetch="bySlug" slug={params.slug} onLoaded={(_visualization) => setVisualization(_visualization)} />
        </Box>
    );
};

export default XVisualizationBySlug;
