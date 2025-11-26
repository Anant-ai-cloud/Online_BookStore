import React from 'react'
import { useForm } from 'react-hook-form'
import Navbar from './navbar'
import Footer from './Footer'
import { useState } from 'react'

function Contact() {
  
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()
    const onSubmit = (data)=> console.log(data)
  return (
    <>
    <Navbar/>
    <div className='flex h-screen items-center justify-center'>
   <form onSubmit={handleSubmit(onSubmit)} className=''>
    <h1 className='text-[25px] font-medium'>Contact us</h1>
    <div className='my-3'>
        <h3>Name</h3>
        <input type="text" placeholder='Enter your name' className='border outline-none w-96 rounded-md p-1 dark:bg-slate-900 dark:text-white'
        {...register("name", { required:true })}
        />
    </div>
     <div className='my-3'>
        <h3>Email</h3>
        <input type="email" placeholder='Enter your email'className='border outline-none w-96 rounded-md p-1  dark:bg-slate-900 dark:text-white' 
        {...register("email", { required:true })}

        />
    </div>
    <div className='my-3'>
        <h3>Message</h3>
        <textarea type="text" placeholder='Type your message' className='border outline-none w-96 h-24 rounded-md text-left align-top font-normal  dark:bg-slate-900 dark:text-white'
        {...register("message", { required:true })}
        
        />
    </div>
    <button className='bg-blue-600 text-white px-2 py-1 rounded-md mt-2'> Submit</button>
 </form>
    </div>
    <Footer/>
    </>
  )
}

export default Contact
