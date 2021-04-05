import styles from '../styles/CustomInputStyles.module.scss';

const CustomInput = ({
    type = 'text',
    placeholder,
    label,
    name,
    value,
    setError,
    onChange,
    disabled,
}) => (
    <main>
        <p style={{ fontSize: '0.9rem', margin: 0 }}>{label}</p>
        <input
            type={type}
            placeholder={placeholder}
            label={label}
            name={name}
            className={styles.customInput}
            defaultValue={value && value}
            onChange={onChange && ((e) => onChange(e))}
            onFocus={setError && (() => setError(''))}
            disabled={disabled}
        />
    </main>
);

export default CustomInput;
