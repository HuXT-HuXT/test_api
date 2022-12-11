import React from 'react';
import './Main.css';

export default function Main() {

  return (
    <div className='main'>
      <form className='main__form' action='#'>
        <h4 className='main__form-title'>Add photo</h4>
        <p className='main__input-title'>Name</p>
        <input type='text' className='main__input'  required minLength='2' maxLength='15' value={name} />
        <p className='main__input-title'></p>
        <input type='text' className='main__input' required minLength='2' maxLength='15' value={name} />
      </form>
    </div>
  );
};