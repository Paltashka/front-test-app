import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DefaultButton from '../../components/defaultButton';
import Input from '../../components/input';
import styles from './index.module.css';
function Authentication() {

    const [passwordVisibility, setPasswordVisibility] = useState(false)

    const [emailField, setEmailField] = useState(0)
    const [passwordField, setPasswordField] = useState(0)

    return (
        <div className={styles.auth}>
            <div className={styles.textBlock}>
                <h1>
                    LOG IN TO YOUR PERSONAL ACCOUNT
                </h1>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 25, textAlign: 'center' }}>
                <Input type={"text"} value={'Email'} />
                <Input type={passwordVisibility ? 'text' : 'password'} value={'Password'} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'start', gap: 5 }}>
                <input onClick={() => setPasswordVisibility(!passwordVisibility)} type="checkbox" />
                <h5>Show password?</h5>
            </div>



            <DefaultButton padding={"14px 124px"} path={'/'} text={'Log In'}/>

        </div>
    );
}

export default Authentication;