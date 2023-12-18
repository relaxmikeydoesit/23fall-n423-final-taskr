import React from "react";
import 'semantic-ui-css/semantic.min.css';
import { Button, Input, Menu, Form } from 'semantic-ui-react';
import styles from '@/styles/Top3.module.css';

export default function Top3() {
    let item1 = 'Finishing the assignment';
    let item2 = 'Finding work';
    let item3 = 'Cleaning the house.';

    function submitTop3(e) {
        e.preventDefault();
        console.log(item1, item2, item3);   
    }
    function updateTop3(e) {
        console.log(e.currentTarget.name, e.currentTarget.value);
        if (e.currentTarget.name === 'item1') {
            item1 = e.currentTarget.value;
        }
        if (e.currentTarget.name === 'item2') {
            item2 = e.currentTarget.value;
        }
        if (e.currentTarget.name === 'item3') {
            item3 = e.currentTarget.value;
        }
  
    }   
    return (
       <>
         <h1 className={styles.title}>top3</h1>
         <h2 className={styles.sub}>top3 | What are your three main priorities for the day?</h2>
       <form className={styles.form} onSubmit={submitTop3}>
    <div className={styles.formField}>
        <label className={styles.label}>Item #1:</label>
        <input className={styles.input} name='item1' 
        type='text' placeholder='Most Important...' />
    </div>
    <div className={styles.formField}>
        <label className={styles.label}>Item #2:</label>
        <input className={styles.input} name='item2' 
        type='text' placeholder='Pretty Important' />
    </div>
    <div className={styles.formField}>
        <label className={styles.label}>Item #3:</label>
        <input className={styles.input} name='item3' 
        type='text' placeholder='Important' />
    </div>
    <div className={styles.formField}>
        <input className={styles.submit} 
        type='submit' value='Create' onSubmit={submitTop3}/>
    </div>   
</form>
       </>
    )

}