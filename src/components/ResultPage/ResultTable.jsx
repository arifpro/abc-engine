import { connect } from 'react-redux';
import styles from '../../styles/ResultPage/ResultTableStyles.module.scss';

const ResultTable = ({ projectState }) => (
    <main className={styles.resultTable}>
        <section className={styles.tableSection}>
            <table>
                <thead>
                    <tr>
                        <th>projectName</th>
                        <th>projectDesc</th>
                        <th>client</th>
                        <th>contractor</th>
                        <th>max_X</th>
                        <th>min_X</th>
                        <th>max_Y</th>
                        <th>min_Y</th>
                        <th>max_Z</th>
                        <th>min_Z</th>
                    </tr>
                </thead>

                <tbody>
                    {projectState && (
                        <tr>
                            <td>
                                {projectState.projectName?.length > 10
                                    ? `${projectState.projectName.slice(0, 12)}...`
                                    : projectState.projectName}
                            </td>
                            <td>
                                {projectState.projectDesc?.length > 10
                                    ? `${projectState.projectDesc.slice(0, 12)}...`
                                    : projectState.projectDesc}
                            </td>
                            <td>{projectState.client}</td>
                            <td>{projectState.contractor}</td>
                            <td>{projectState.maxX}</td>
                            <td>{projectState.minX}</td>
                            <td>{projectState.maxY}</td>
                            <td>{projectState.minY}</td>
                            <td>{projectState.maxZ}</td>
                            <td>{projectState.minZ}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </section>
    </main>
);

const mapStateToProps = (state) => ({
    projectState: state.project.projectData,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ResultTable);
