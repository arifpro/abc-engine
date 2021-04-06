import { createRef } from 'react';
import Pdf from 'react-to-pdf';
import styles from '../../styles/ResultPage/ResultTableStyles.module.scss';

const ResultTable = ({ projectState }) => {
    const ref = createRef();

    return (
        <main className={styles.resultTable}>
            {projectState && (
                <section className={styles.tableSection} ref={ref}>
                    <h1>Result Table</h1>
                    <table>
                        <tr>
                            <th>projectName</th>
                            <td>
                                {projectState.projectName?.length > 10
                                    ? `${projectState.projectName.slice(0, 12)}...`
                                    : projectState.projectName}
                            </td>
                        </tr>
                        <tr>
                            <th>projectDesc</th>
                            <td>
                                {projectState.projectDesc?.length > 10
                                    ? `${projectState.projectDesc.slice(0, 12)}...`
                                    : projectState.projectDesc}
                            </td>
                        </tr>
                        <tr>
                            <th>client</th>
                            <td>{projectState.client}</td>
                        </tr>
                        <tr>
                            <th>contractor</th>
                            <td>{projectState.contractor}</td>
                        </tr>
                        <tr>
                            <th>max_X</th>
                            <td>{projectState.maxX}</td>
                        </tr>
                        <tr>
                            <th>min_X</th>
                            <td>{projectState.minX}</td>
                        </tr>
                        <tr>
                            <th>max_Y</th>
                            <td>{projectState.maxY}</td>
                        </tr>
                        <tr>
                            <th>min_Y</th>
                            <td>{projectState.minY}</td>
                        </tr>
                        <tr>
                            <th>max_Z</th>
                            <td>{projectState.maxZ}</td>
                        </tr>
                        <tr>
                            <th>min_Z</th>
                            <td>{projectState.minZ}</td>
                        </tr>
                    </table>
                </section>
            )}

            <div style={{ textAlign: 'center', margin: '3rem 0' }}>
                {projectState && (
                    <Pdf targetRef={ref} filename="abc-engine.pdf">
                        {({ toPdf }) => (
                            <button type="button" className="appCustom__btn" onClick={toPdf}>
                                Generate Pdf
                            </button>
                        )}
                    </Pdf>
                )}
            </div>
        </main>
    );
};

export default ResultTable;
