import CustomInput from './CustomInput';

const CustomInput2 = ({ placeholder1, placeholder2, label1, label2, value1, value2 }) => (
    <main style={{ display: 'flex' }}>
        <aside style={{ flex: 1, paddingRight: 10 }}>
            <CustomInput
                placeholder={placeholder1}
                label={label1}
                value={value1}
                style={{ marginRight: 10 }}
            />
        </aside>
        <aside style={{ flex: 1 }}>
            <CustomInput
                placeholder={placeholder2}
                label={label2}
                value={value2}
                style={{ marginRight: 10 }}
            />
        </aside>
    </main>
);

export default CustomInput2;
