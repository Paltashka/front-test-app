import Input from '../input';
import styles from './index.module.css';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import { useEffect, useRef, useState, useMemo } from 'react';
import DefaultButton from '../defaultButton';

const mockedData = [
    { label: 'ETH', value: 'Entherium' },
    { label: 'BTC', value: 'Bitcoin' },
    { label: 'SOL', value: 'Solana' },
    { label: 'DOGE', value: 'Dogecoin' },
    { label: 'DOW J', value: 'Dow Jones Industrial Average' },
];

const calcData = [
    { name: mockedData[0].label, value: 19220 },
    { name: mockedData[1].label, value: 1300.000058 },
    { name: mockedData[2].label, value: 0.073 },
    { name: mockedData[3].label, value: 0.01123123 },
    { name: mockedData[4].label, value: 325 },
];

function Popup(props) {
    const ref = useRef();
    const [selectedItem, setSelectedItem] = useState(mockedData[0]);
    const [count, setCount] = useState(null);

    const cryptoState = useMemo(() => {
        if (count) {
            const item = calcData.find(item => item.name === selectedItem.label);
            return (count / item.value).toFixed(3);
        }
        return null;
    }, [selectedItem, count]);

    const onChange = (value) => {
        setCount(value);
    };

    const handleChange = (selectedOption) => {
        setSelectedItem(selectedOption);
    };

    useEffect(() => {
        console.log(cryptoState, 'cryptoState');
    }, [cryptoState]);

    const closeModalOnBackground = (e) => {
        if (ref && ref.current && ref.current.id && e.target.id === ref.current.id) {
            props.closeModal();
        }
    };

    useEffect(() => {
        window.addEventListener('click', (closeModalOnBackground));
        return () => window.removeEventListener('click', closeModalOnBackground);
    }, []);

    return ReactDOM.createPortal(
        <div style={{ position: 'fixed', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', top: 0, left: 0 }}>
            <div ref={ref} id={"modal"} style={{ backgroundColor: 'black', opacity: 0.8, position: 'absolute', zIndex: 2, width: '100%', height: '100%' }} />
            <div className={styles.popup}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 25 }}>
                    <Input placeholder="Ammount" onChange={(value) => onChange(value)} value={count || ''} type="number" />
                    <Select
                        value={selectedItem}
                        onChange={handleChange}
                        options={mockedData}
                    />
                    <Input disabled placeholder="$" defaultValue={count ? `${count}$` : ''} type="text" />
                    <Input disabled placeholder={selectedItem.label} defaultValue={cryptoState || ''} type="text" />
                    <DefaultButton padding="15px" text="Donate" />
                </div>
            </div>
        </div>, document.getElementById('portal')
    );
}

export default Popup;