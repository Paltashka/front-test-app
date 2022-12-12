import styles from './index.module.css';

function Input({ value, type, onChange, placeholder, defaultValue, disabled }) {
    return (
        <input className={styles.input} value={value} disabled={disabled} defaultValue={defaultValue} onChange={(e) => onChange(e.target.value)} type={type} placeholder={placeholder} />
    );
}

export default Input;