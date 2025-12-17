import React, { useState, useEffect } from 'react'
import Container from './container/Container'
// import list from "../../public/list.json"
import axios from "axios"
import Card from './Card'
import { Link } from 'react-router-dom'

function Course() {
  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:5002/book");

        setBook(res.data)
      } catch (error) {
        console.log(error)
      }

    }
    getBook()

  }, [])
  return (
    <>

      <div className=' max-w-screen-2xl bg-white container mx-auto md:px-20 px-4 dark:bg-slate-900'>
        <div className='mt-[63px] items-center justify-center text-center dark:bg-slate-900'>

          <h1 className='text-2xl md:text-4xl'>We're delighted to have you {" "}
            <span className='text-pink-500'> Here! :)</span>
          </h1>
          <p className='mt-12'>
            Congratulations on signing up — great move.
            You now have full access to our amazing collection of stock‑focused books.
            Explore powerful insights across a wide range of genres and start leveling up your knowledge.
            Dive into expert strategies, timeless classics, and modern market guides curated just for you.



          </p>
          <Link to={"/"}>
            <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200 mt-6'> Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            book.map((item) => (
              <Card key={item.id} item={item} />
            ))
          }
        </div>
      </div>


    </>
  )
}

export default Course
