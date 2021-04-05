import { useEffect, useState } from 'react';
import { MultiStepForm, Step } from 'react-multi-form';
import styles from '../../styles/HomePage/ProjectFormStyles.module.scss';
// components
import Confirmation from './components2/Confirmation';
import CsvInfo from './components2/CsvInfo';
import ProjectInfo from './components2/ProjectInfo';

const ProjectForm = () => {
    const [active, setActive] = useState(1);
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
        console.log(formData);
    }, [formData]);

    return (
        <main className={styles.projectForm}>
            <MultiStepForm activeStep={active}>
                <Step label="Project Info">
                    <ProjectInfo handleInputChange={handleInputChange} />
                </Step>
                <Step label="CSV File">
                    <CsvInfo formData={formData} setFormData={setFormData} />
                </Step>
                <Step label="confirmation">
                    <Confirmation />
                </Step>
            </MultiStepForm>

            {active !== 1 && (
                <button type="button" className="testBtn" onClick={() => setActive(active - 1)}>
                    Previous
                </button>
            )}
            {active !== 3 && (
                <button
                    type="button"
                    onClick={() => setActive(active + 1)}
                    style={{ float: 'right' }}
                    className="testBtn"
                >
                    Next
                </button>
            )}
            <style jsx>{`
                .textBtn {
                    background-color: #24a19c;
                    padding: 8px 20px;
                    border: 1px solid #24a19c;
                    color: #fff;
                    margin: 2px 5px;
                    cursor: pointer;
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    font-weight: 600;
                    border-radius: 7px;
                }
            `}</style>
        </main>
    );
};

export default ProjectForm;
