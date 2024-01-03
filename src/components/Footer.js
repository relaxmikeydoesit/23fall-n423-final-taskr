import React from "react";
import { Segment } from "semantic-ui-react";
import styles from '@/styles/Footer.module.css';

export default function Footer() {

    return (
    <>
    <Segment color='teal' inverted className={styles.footer}>
    <p>© 2023 MIKEY LEE. All rights reserved. </p>
    <p>[Made with lots of swearing, in Indianapolis.]
    Powered by Next.js and Semantic UI React |  Deployed on Vercel</p>
    </Segment>
      
    </>
    );
}