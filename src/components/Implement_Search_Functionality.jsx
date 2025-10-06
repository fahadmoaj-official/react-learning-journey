import { useState } from 'react'
import React from 'react'
import { data } from '../data'

const Implement_Search_Functionality = () => {

  const [querySearch, setQuerySearch] = useState("")


  console.log(querySearch);
  return (
    <div>
      <h1 className='text-2xl font-bold text-center mt-10'> Learn Filter Search</h1>
      {/* <InputField/> */}
      <div className='flex justify-center mt-10'>

        <input type="text" placeholder='search...'
          value={querySearch}
          onChange={(e) => setQuerySearch(e.target.value)}
          className='w-200 h-9 px-2 bg-gray-200 rounded focus:outline-none' />
      </div>
      <div className='flex justify-center mt-10 gap-5'>
        <ul className='flex  gap-50 border  p-3 rounded w-300 font-bold justify-around bg-gray-200'>
          <li className=''>First name </li>
          <li>Last name </li>
          <li>Email </li>
          <li>Phone </li>
        </ul>



      </div>


      <div className='flex justify-center mt-2 gap-5'>


        <ul >

          {data.filter((item) => {
            return item.email.toLowerCase().includes(querySearch.toLowerCase())
              || item.first_name.toLowerCase().includes(querySearch.toLowerCase())
              || item.last_name.toLowerCase().includes(querySearch.toLowerCase())
              || item.phone.toLowerCase().includes(querySearch.toLowerCase())
          }).map((item) => (
            <ul className='flex  gap-50 border  p-3 rounded w-300 justify-center mt-1' key={item.id}>
              <li className='w-30' >{item.first_name} </li>
              <li className='w-30'>{item.last_name} </li>
              <li className='w-30'>{item.email} </li>
              <li className='w-30'>{item.phone} </li>
            </ul>
          ))}



        </ul>


      </div>

    </div>
  )
}

export default Implement_Search_Functionality