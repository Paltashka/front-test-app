import { useState } from 'react';
import DefaultButton from '../defaultButton';
import Popup from '../popup';
import styles from './index.module.css';


function CampaignCard({donate, setDonate, ammount}) {

    return (
        <div className={styles.card}>
            <div style={{ backgroundColor: "#D9D9D9", width: 378, height: 150, borderRadius: 10 }}>
            </div>

            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4>Company name</h4>
                    <p >Status</p>
                </div>
                <div style={{ width: 350 }}>
                    <p>Lorem ipsum dolor sit amet consectetur. Sed at odio commodo enim nibh amet et. Augue nunc purus donec molestie velit arcu sapien risus odio. Hendrerit sed non sagittis quisque massa mi. Vulputate faucibus urna morbi bibendum venenatis lorem.</p>
                </div>
            </div>

            <div>
                <div style={{ margin: "40px 0px", display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <p style={{ color: "#2F80ED" }}>{`$ ${ammount}`}</p>
                    <div onClick={() => setDonate(!donate)}><DefaultButton state={donate} text={'Donate'} padding={'14px 50px'}/></div>
                </div>
            </div>


        </div>
    );
}

export default CampaignCard;