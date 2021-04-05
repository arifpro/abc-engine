import Layout from '../components/Layout';
import ResultTable from '../components/ResultPage/ResultTable';

const Result = () => {
    const name = 'Result';

    return (
        <Layout>
            <h1>{name} page</h1>
            <ResultTable />
        </Layout>
    );
};

export default Result;
