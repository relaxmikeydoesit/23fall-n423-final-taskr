import React from "react";
import 'semantic-ui-css/semantic.min.css';
import { Button, Input, Menu, Form } from 'semantic-ui-react';


export default function Top3() {

    return (
        <>
          <h1>Today's Top3 Priorities</h1>
        <Form>
        <Input type="text" placeholder='1.' />
        <Input type="text" placeholder='2.' />
        <Input type="text" placeholder='3.' />
        
        </Form>
      

        </>
    )

}