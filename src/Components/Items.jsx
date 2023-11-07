import React, { useState } from 'react'
import VegCard from './VegCard'


const Items = () => {
    const [vegtables,setVegetables]=useState([
        {
            id: 1,
            image: "f1",
            name: "Tomato",
            price: 200
        },
        {
            id: 2,
            image: "f2",
            name: "Tomato",
            price: 200
        },
        {
            id: 3,
            image: "f3",
            name: "Tomato",
            price: 200
        },
        {
            id: 4,
            image: "f4",
            name: "Tomato",
            price: 200
        },
        {
            id: 5,
            image: "f5",
            name: "Tomato",
            price: 200
        } ,
        {
            id: 6,
            image: 'f6',
            name: "Tomato",
            price: 200
        }
       ]
    )
  return (
   <section className=' w-5/6 mx-auto grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 my-10 py-10'>
    {
        vegtables.map((veg) => {
            return <VegCard key={veg.id} veg={veg} />
        })
    }
   </section>
  )
}

export default Items