import React from 'react'; 
import { Container, Form, Checkbox, Button } from 'semantic-ui-react'

export default function Robot() {
    return (
        <>
        <h1>enjoy</h1>

        <div>
        <iframe width="1120" height="630" src="https://www.youtube.com/embed/XnZH4izf_rI?si=6DfAfjVRGzdhZ5SV?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <Form >
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to leave my infomation in exchange for a free virtual gift, but I will not receive spam messages for this exchange.' />
    </Form.Field>
    <Button type='submit'
    onClick=''>Submit</Button>
  </Form>

        </>
    )
}