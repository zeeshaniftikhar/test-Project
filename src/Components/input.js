import React, { useRef } from 'react'
import useStore from "../store/store.js"
import { Button } from '@mui/material'
import '../css/input.css';

export default function Input() {
    const inputRef = useRef()
    const addPerson = useStore((state) => state.addPerson)
    const people = useStore((state) => state.people) ?? []

    const add = () => {
        let even = false;
         let lastIndex = people.length;
         let isEven = lastIndex % 2
        if (people.length === 0 || isEven === 0) {
            even = true
        }

        let obj = {
            user: even ?  'user1' : 'user2',
            message: inputRef.current.value
        }
        addPerson(obj)
        console.log("hello")
    }
    return (
        <div className='main'>
            <input 
            className='input_TXT'
            type="text"
            ref={inputRef} />
            <Button className='btn_submit' onClick={add} >Send</Button>
        </div>
    )
}
