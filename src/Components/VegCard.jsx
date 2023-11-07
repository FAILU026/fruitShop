import React from 'react'

const VegCard = ({veg}) => {
  return (
    <div className=' rounded-2xl overflow-hidden shadow-xl transform group hover:scale-110 duration-100 relative'>
        <img src={require(`../assests/${veg.image}.jpg`)} alt="pic" 
             className=' w-full h-52 object-full' 
        />
        <div className=' flex flex-col items-center my-1 py-1 space-y-1'>
            <span className=' font-display text-slate-500 block'>{veg.name}</span>
            <span className=' font-display text-slate-500'>${veg.price}</span>
            <span className=' font-display text-sm text-yellow-300  group-hover:visible invisible'>ADD TO CART</span>
        </div>
        <span className=' absolute top-3 right-3 bg-sky-400 text-white border-none p-1 rounded-lg text-sm'> 10% Off</span>
    </div>
    
  
  )
}

export default VegCard