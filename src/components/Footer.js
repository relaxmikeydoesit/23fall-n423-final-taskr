import React from "react";
import { Segment } from "semantic-ui-react";
import styles from '@/styles/Footer.module.css';

export default function Footer() {

    return (
    <>
    <Segment color='teal' inverted className={styles.footer}>
    <p>© 2023 MIKEY LEE. All rights reserved. </p>
    <div data-tf-live="01HK8DH54CN4TGX59AK8V2SF8N"></div><script src="//embed.typeform.com/next/embed.js"></script>
    </Segment>
      
    </>
    );
}