import CSVReader from 'react-csv-reader';
import CustomInput2 from '../../custom/CustomInput2';
import ProjectInfo from './ProjectInfo';

const CsvInfo = ({ formData, setFormData }) => {
    const handleForce = (rows) => {
        const x = [];
        const y = [];
        const z = [];

        rows.forEach((row) => {
            x.push(row.x);
            y.push(row.y);
            z.push(row.z);
        });

        setFormData({
            ...formData,
            max_X: Math.max(...x),
            min_X: Math.min(...x),
            max_Y: Math.max(...y),
            min_Y: Math.min(...y),
            max_Z: Math.max(...z),
            min_Z: Math.min(...z),
        });
    };

    const parserOptions = {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        transformHeader: (header) => header.toLowerCase().replace(/\W/g, '_'),
    };

    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>CSV File Information</h3>
            <ProjectInfo formData={formData} disabled />

            <div style={{ textAlign: 'center', padding: '15px', margin: '10px auto' }}>
                <CSVReader
                    cssClass="react-csv-input"
                    label="Select CSV file include X, Y, Z value list"
                    onFileLoaded={handleForce}
                    parserOptions={parserOptions}
                />
            </div>

            <CustomInput2
                placeholder1="Value of max X"
                placeholder2="Value of min X"
                label1="max_X"
                label2="min_X"
                value1={formData?.max_X}
                value2={formData?.min_X}
            />
            <CustomInput2
                placeholder1="Value of max Y"
                placeholder2="Value of min Y"
                label1="max_Y"
                label2="min_Y"
                value1={formData?.max_Y}
                value2={formData?.min_Y}
            />
            <CustomInput2
                placeholder1="Value of max Z"
                placeholder2="Value of min Z"
                label1="max_Z"
                label2="min_Z"
                value1={formData?.max_Z}
                value2={formData?.min_Z}
            />
        </div>
    );
};

export default CsvInfo;
