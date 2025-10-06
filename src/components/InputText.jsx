import React, { useState } from 'react'

const InputText = () => {

  const [text, setText] = useState([]);
  const [inputText, setInputText] = useState('');


  const handleAdd = () => {
    const add = [...text, inputText];
    setText(add);
    setInputText('');
  }

  return (
    <div className='flex flex-col mt-10 ml-10 gap-3'>
      <input type="text" className=' px-2 py-1 border w-60' placeholder='text'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)} />
      <button className='h-9 bg-teal-600 w-35 rounded' onClick={handleAdd}>Add</button>

      <div className='flex  gap-2 mt-5'>
        {text.map((item, index) => (
          <p key={index} className='bg-teal-300 w-25 h-7 text-center rounded'>{item}</p>
        ))}
      </div>
    </div>
  )
}

export default InputText