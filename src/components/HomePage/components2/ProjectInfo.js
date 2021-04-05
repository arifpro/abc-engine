import CustomInput from '../../../custom/CustomInput';

const ProjectInfo = ({ formData, handleInputChange, disabled }) => (
    <div>
        {!formData && <h3 style={{ textAlign: 'center' }}>Project Information</h3>}
        <CustomInput
            placeholder="Enter your project name"
            label="Project Name"
            name="projectName"
            value={formData?.projectName}
            onChange={handleInputChange}
            disabled={disabled}
        />
        <CustomInput
            placeholder="Enter your project description"
            label="Project Description"
            name="projectDesc"
            value={formData?.projectDesc}
            onChange={handleInputChange}
            disabled={disabled}
        />
        <CustomInput
            placeholder="Enter your client name"
            label="Client"
            name="client"
            value={formData?.client}
            onChange={handleInputChange}
            disabled={disabled}
        />
        <CustomInput
            placeholder="Enter your contractor name"
            label="Contractor"
            name="contractor"
            value={formData?.contractor}
            onChange={handleInputChange}
            disabled={disabled}
        />
    </div>
);

export default ProjectInfo;
