const CustomInput = ({ type = 'text', placeholder, label, name, value, onChange, disabled }) => (
    <main>
        <p style={{ fontSize: '0.9rem', margin: 0 }}>{label}</p>
        <input
            type={type}
            placeholder={placeholder}
            label={label}
            name={name}
            className="testInput"
            value={value}
            onChange={onChange && ((e) => onChange(e))}
            disabled={disabled}
        />
        <style jsx>{`
            .testInput {
                width: 100%;
                padding: 10px 20px;
                border: 1px solid #ddd;
                border-radius: 8px;
                font-size: 0.95rem;
                outline: none;
                margin-top: 0.2rem;
                margin-bottom: 1rem;
                box-sizing: border-box;
            }
            .testInput:focus {
                border: 1.5px solid #24a19c;
            }
        `}</style>
    </main>
);

export default CustomInput;
