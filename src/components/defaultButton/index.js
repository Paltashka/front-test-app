import { useNavigate } from 'react-router-dom';
import styles from './index.module.css';

function DefaultButton({text, padding, path}) {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(path)} style={{padding: padding}} className={styles.button}>
            {text}
        </button>
    );
}

export default DefaultButton;