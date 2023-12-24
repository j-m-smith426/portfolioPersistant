import React from 'react'
import "./Contact.scss";
import useInputHook from '../Input/useInputHook';

type Props = {}

const Contact = (props: Props) => {
    const name = useInputHook("text", "Name");
    const email = useInputHook("email", "email");

  return (
    <div className='contact'>
        <div className="contact_left">
            <h3>Feel free to send me a message or give me a call. I look forward to hearing from you</h3>

        </div>
        <div >
              <form action="" className="contact_right">
                {name}
                {email}
            </form>
        </div>
    </div>
  )
}

export default Contact