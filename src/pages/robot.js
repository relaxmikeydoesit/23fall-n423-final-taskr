import React from 'react'; 
import { Image, Container, Form, Checkbox, Button } from 'semantic-ui-react';
import { useRouter } from 'next/router';    
import styles from '@/styles/Robot.module.css';


export default function RobotSuccess() {
  const [fullName, setFullName] = React.useState('Mikey Lee');
  const [email, setEmail] = React.useState('mikeylee@zohomail.com');  
  
  const router = useRouter();

  function formSubmit(e) { 
        e.preventDefault();
        router.push('/robot/success');            
        console.log('contact form submitted!');          // console.log('contact form submitted!');
    }   
    return (
        <>
        <Image className={styles.herobot} src='greenwide.jpeg' />
        <div className={styles.robotContainer}>
        <h1>enjoy</h1>
        <iframe id="ytplayer" type="text/html" width="720" height="405"
          src="https://www.youtube.com/embed/XnZH4izf_rI?autoplay=1"
          frameborder="0" allowfullscreen/>

        <Form>
    <Form.Field>
      <label>Full Name</label>
      <input placeholder='Full Name' />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to leave my infomation in exchange for a free virtual gift, but I will not receive spam messages for this exchange.' />
    </Form.Field>
    <Button type='submit'
    onClick={formSubmit}>Submit</Button>
  </Form>
</div>
        </>
    )
}