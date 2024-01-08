import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import '@/styles/globals.css';
import {Menu, Input, Icon, Header} from 'semantic-ui-react';
import Link from 'next/link';
import Footer from '@/components/Footer.js';

export default function App({ Component, pageProps }) {
  
  return (
    <div>
      <Header as='h1' className='logo' textAlign='center' color='red'>TASKR</Header>
      <Menu inverted fluid widths={4} stackable>
        <Menu.Item as={Link} href='/bored'>
          boredom buster
        </Menu.Item>
        <Menu.Item as={Link} href='/'>
          home
        </Menu.Item>
        <Menu.Item as={Link} href='/strike'>
          strike
        </Menu.Item>

    
      </Menu>
      <Component {...pageProps} />
      <Footer/>     
      </div>
  )
}
