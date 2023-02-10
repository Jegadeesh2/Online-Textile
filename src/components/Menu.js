import React from 'react'

const Menu = ({categories, filterProducts}) => {
  return(
    <div className="menu-container">
      {categories.map((category,index)=>{
        return <button key={index} className="menu-btn" onClick={()=> filterProducts
        (category)}> {category}</button>
      })}
    </div>
  )
}

export default Menu