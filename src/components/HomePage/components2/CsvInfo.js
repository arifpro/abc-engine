import CustomInput from '../../../custom/CustomInput';
import ProjectInfo from './ProjectInfo';

const CsvInfo = ({ formData }) => (
    <div>
        <h3 style={{ textAlign: 'center' }}>CSV File Information</h3>
        <ProjectInfo formData={formData} disabled />

        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, paddingRight: 10 }}>
                <CustomInput
                    type="text"
                    placeholder="11/2024"
                    label="Expiry Date"
                    style={{ marginRight: 10 }}
                />
            </div>
            <div style={{ flex: 1 }}>
                <CustomInput placeholder="000" label="CVC Code" />
            </div>
        </div>
    </div>
);

export default CsvInfo;
