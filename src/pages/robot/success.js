import React from 'react';
import { Image } from 'semantic-ui-react';
import styles from '@/styles/Robot.module.css';


export default function RobotSuccess() {
    return ( 
    <>
    <Image className={styles.herobot} src='/greenwide.jpeg' />

    <div className={styles.robotContainer}>
        <h1>Contact details sent successfully!</h1>
        <Image className={styles.lingwo} src='/wrench-robot.jpeg' />
    </div>
    </>
    );
}