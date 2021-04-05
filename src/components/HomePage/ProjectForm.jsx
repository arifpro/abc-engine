import styles from '../../styles/HomePage/ProjectFormStyles.module.scss';

const ProjectForm = () => {
    const name = 'Project Form';
    return (
        <main className={styles.projectForm}>
            <h1>{name}</h1>
        </main>
    );
};

export default ProjectForm;
