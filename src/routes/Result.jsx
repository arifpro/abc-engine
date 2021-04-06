import { connect } from 'react-redux';
import Layout from '../components/Layout';
import ResultChart from '../components/ResultPage/ResultChart';
import ResultTable from '../components/ResultPage/ResultTable';

const Result = ({ projectState }) => (
    <Layout>
        <ResultTable projectState={projectState} />
        <ResultChart projectState={projectState} />
    </Layout>
);

const mapStateToProps = (state) => ({
    projectState: state.project.projectData,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
