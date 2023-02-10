import React from 'react'

const Products = ({products}) => {
  return (
    <div className="product-container">
      {products.map((product)=> {
        const {id,name,image,type,price}= product;
  //Function 
        const buttonHandler = () => {
          alert(`your ${product.name} is added to the cart😊..`);
        }
        return(
          <article key= {id}>
          <img src={image} alt="dress" className='image'/>
          <h3 className="name">{name}</h3>
          <p className="type">{type}</p>
          <div className="btn-container">
          <h3 className="price">{price}</h3>
          <button className='order' onClick={()=> {buttonHandler()}}>Order</button>
          </div>
          </article>
        )
      })}
    </div>
  )
}

export default Products