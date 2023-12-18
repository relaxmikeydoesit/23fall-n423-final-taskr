import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import '@/styles/globals.css';
import {Menu, Input, Icon, Button, Header} from 'semantic-ui-react';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  
  return (
    <div>
      <Header as='h1' className='logo' textAlign='center' color='red'>TASKR</Header>
      <Menu inverted fluid widths={4} stackable>
        <Menu.Item as={Link} href='/top3'>
          top3
        </Menu.Item>
        <Menu.Item as={Link} href='/schedule'>
          schedule
        </Menu.Item>
        <Menu.Item as={Link} href='/strike'>
          strike
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item as={Link} href='/'>
            <Icon name='home' />
          </Menu.Item>
      </Menu.Menu>
      </Menu>
      <Component {...pageProps} />
      </div>
  )
}
