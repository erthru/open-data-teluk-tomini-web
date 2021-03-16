import { useEffect, useState } from "react";
import * as datasetRepo from "../../data/api/repositories/dataset-repository";

const CDatasets = () => {
    const [page, setPage] = useState(1);
    const [datasets, setDatasets] = useState<datasetRepo.Dataset[]>([]);
    const limit = 10;

    useEffect(() => {
        getDatasets();
    }, []);

    useEffect(() => {
        getDatasets();
    }, [page]);

    const getDatasets = async () => {
        const response = await datasetRepo.getAll(page, limit);
        setDatasets(response.datasets);
    };
};

export default CDatasets;
