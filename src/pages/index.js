import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import { Card, Grid } from 'semantic-ui-react'


export default function Home() {
  return (
    <>
    <div className={styles.box}>
      <p className={styles.signika}>TASKR  ||  Your life, in focus.</p>
    </div>
    <Grid centered stackable columns={3}>
    <Grid.Column color='yellow'>
    <Card centered
    href='/top3'
    header='top3'
    meta='Top Priorities'
    description='What 3 Things Do You Want To Accomplish Today?'
  />
   </Grid.Column>
    <Grid.Column color='blue'>
  <Card centered
    href='/schedule'
    header='schedule'
    meta='Schedule'
    description='What Does Your Day Look Like?'
  />
  </Grid.Column>
  <Grid.Column color='purple'>
  <Card centered
    href='/strike'
    header='Strikethrough'
    meta='strike'
    description='What Do You Want To Mark Off Your List?'
  />
  </Grid.Column>
  </Grid>
    </>
  )
}
