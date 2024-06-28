import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/profile.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import styles from '../styles/Username.module.css';





export default function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }
  
   
  
  
  return (
    <div className="container mx-auto">

    <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass}>

            <div className="title flex flex-col items-center">
              <h4 className='text-5xl font-bold'>KYB!</h4>
              <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
                
              </span>
            </div>
            <form onSubmit={handleSubmit}>

        <label>Business Name
            <input type="text" name="username" value={inputs.username || ""} onChange={handleChange}/>
        </label>

        <label>Account Name
          <input type="text" name="username" value={inputs.username || ""} onChange={handleChange}/>
        </label>

        <input type="submit" />
    </form>

            

        </div>
      </div>
    </div>
    
    
  )
}
