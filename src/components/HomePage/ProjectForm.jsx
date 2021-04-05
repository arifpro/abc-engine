import { useEffect, useState } from 'react';
import { MultiStepForm, Step } from 'react-multi-form';
import { useDispatch } from 'react-redux';
import setProject from '../../redux/actions/projectActions';
import styles from '../../styles/HomePage/ProjectFormStyles.module.scss';
// components
import CsvInfo from './CsvInfo';
import ProjectInfo from './ProjectInfo';

const ProjectForm = () => {
    const dispatch = useDispatch();
    const [active, setActive] = useState(1);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        projectName: '',
        projectDesc: '',
        client: '',
        contractor: '',
        max_X: null,
        min_X: null,
        max_Y: null,
        min_Y: null,
        max_Z: null,
        min_Z: null,
    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value.trim(),
        });
    };

    useEffect(() => {
        if (formData.max_X !== null) {
            dispatch(setProject(formData));
            // setProject(formData);
        }
    }, [formData, dispatch]);

    return (
        <main className={styles.projectForm}>
            <MultiStepForm activeStep={active}>
                <Step label="Project Info">
                    <ProjectInfo handleInputChange={handleInputChange} setError={setError} />
                </Step>
                <Step label="CSV File">
                    <CsvInfo formData={formData} setFormData={setFormData} />
                </Step>
                <Step label="table">
                    <div>
                        <h1>table</h1>
                    </div>
                </Step>
            </MultiStepForm>

            {error !== '' && <div className={styles.error}>{error}</div>}

            {active !== 1 && (
                <button
                    type="button"
                    className={styles.testBtn}
                    onClick={() => setActive(active - 1)}
                >
                    Previous
                </button>
            )}
            {active !== 3 && (
                <button
                    type="button"
                    onClick={() => {
                        if (
                            formData.projectName !== '' &&
                            formData.projectDesc !== '' &&
                            formData.client !== '' &&
                            formData.contractor !== ''
                        ) {
                            setActive(active + 1);
                        } else {
                            setError('All fields must be provided');
                        }
                    }}
                    style={{ float: 'right' }}
                    className={styles.testBtn}
                >
                    Next
                </button>
            )}
        </main>
    );
};

export default ProjectForm;
