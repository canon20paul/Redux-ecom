import React from 'react'
import { useSelector } from 'react-redux'
import Item from './Item'

export default function Items() { 
  const itemsobj = useSelector(store=>store.itemsReducer)
  const itemslist = itemsobj.items

  const itemsdata = itemslist.map((item)=>{
    return <div className='col-md-4'>
      <Item item={item}/>
    </div>

  })
  return (
      <div>
           <div className='row'>
          {itemsdata}
      </div>
      </div>
  )
}
