import styles from '../../styles/ResultPage/ResultTableStyles.module.scss';

const ResultTable = ({ projectState }) => (
    <main className={styles.resultTable}>
        <h1>Result Table</h1>
        {/* <section className={styles.tableSection} ref={ref}>
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
            </section> */}

        <section className={styles.tableSection2}>
            {projectState && (
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
            )}
        </section>
    </main>
);

export default ResultTable;
