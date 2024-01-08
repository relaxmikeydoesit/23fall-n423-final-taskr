import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import { Card, Container, Grid, Image, Segment, Button, FormField, Form, Input } from 'semantic-ui-react'
// import FetchButtonComponent from '@/components/BoredButton';


export default function Home() {
  return (
    <>
    <div className={styles.box}>
      <p className={styles.signika}>TASKR  ||  Your life, in focus.</p>
    </div>

    <div className={styles.page}>

    <Grid padded stackable columns={3}>
    <Grid.Row className={styles.rowHeight}>
    <Grid.Column className={styles.rust}>
    <Container className={styles.container}>
    <Card centered 
    href='/bored'
    header='Bored?'
    meta='Bored Button'
    description='Bored? Click the button. Get a random activity. Do it. Repeat.'    
    />
  </Container>
  </Grid.Column>
  <Grid.Column>
  <Container className={styles.green}>
<Image src= 'robot-wave.png'
 size='medium'
 href='/robot' centered />
</Container>
</Grid.Column>
  <Grid.Column className={styles.cyan}>
    <Container className={styles.container}>
  <Card centered
    href='/strike'
    header='STRIKE'
    meta='Strike It Off Your List'
    description='ACCOMPLISH MORE, WITH STRIKE. Plan your day, and stick to it. Strike helps you manage and organize your daily To-Do list. Strike it off your list, and gamify productivity.'
  />
</Container>
  </Grid.Column>  
  </Grid.Row>
  </Grid>
  

{/* <Segment color='teal' inverted className={styles.footer}>
    <p>© 2023 MIKEY LEE. All rights reserved. </p>
    <p>[Made with lots of swearing, in Indianapolis.]
    Powered by Next.js and Semantic UI React |  Deployed on Vercel</p>
  </Segment> */}

  </div>
  </>
  );
}