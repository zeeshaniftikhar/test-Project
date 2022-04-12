import React from 'react';
import useStore from '../store/store';
import "../css/people.css"


export default function People() {
  const people = useStore(state => state.people)
  console.log(people)
  return (
    <div className='main_Detail'>
      <p className='unread_heading'>you have {people.length} new messages </p>
      <ul className='message_items'>
        {people.map(p => (
          <div className={p.user === 'user1' ? 'right' : 'left'}>
             {p.message}
             <br/>
          </div>

        ))}
      </ul>
    </div>
  )
}