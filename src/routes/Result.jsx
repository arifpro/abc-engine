import { createRef } from 'react';
import { connect } from 'react-redux';
import Pdf from 'react-to-pdf';
import Layout from '../components/Layout';
import ResultChart from '../components/ResultPage/ResultChart';
import ResultTable from '../components/ResultPage/ResultTable';

const Result = ({ projectState }) => {
    const ref = createRef();

    return (
        <Layout>
            <div ref={ref}>
                <ResultTable projectState={projectState} />
                <ResultChart projectState={projectState} />
            </div>

            <div style={{ textAlign: 'center', margin: '3rem 0' }}>
                {projectState && (
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => (
                            <button type="button" className="appCustom__btn" onClick={toPdf}>
                                Generate Pdf
                            </button>
                        )}
                    </Pdf>
                )}
            </div>
        </Layout>
    );
};

const mapStateToProps = (state) => ({
    projectState: state.project.projectData,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
