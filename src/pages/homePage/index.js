import { useState } from 'react';
import CampaignCard from '../../components/campaignCard';
import Popup from '../../components/popup';
import styles from './index.module.css';
function Home() {
    const [donate, setDonate] = useState(false);
    const [price, setPrice] = useState(100);

    return (
        <>
            {donate && <Popup closeModal={() => setDonate(false)} />}
            <div className={styles.home}>
                <CampaignCard donate={donate} setDonate={setDonate} />
                <CampaignCard donate={donate} setDonate={setDonate} />
                <CampaignCard donate={donate} setDonate={setDonate} />
                <CampaignCard donate={donate} setDonate={setDonate} />
                <CampaignCard donate={donate} setDonate={setDonate} />
                <CampaignCard donate={donate} setDonate={setDonate} />
            </div>
        </>

    );
}

export default Home;