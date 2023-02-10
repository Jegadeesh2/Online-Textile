import React, { useState } from "react";
import "./App.css";
import { BsScissors } from 'react-icons/bs'
import { items } from "./data";
import Menu from "./components/Menu";
import Products from "./components/Products";

const App =() => {
  const [products, setProducts] = useState(items);
  const categories = ["All", "Men", "Women", "Kids"];

  //Function

  const filterProducts = (category) =>{
    if(category === "All"){
      setProducts(items);
    }else{
      const newProducts = items.filter((product)=>
        product.category === category
      );
    setProducts(newProducts)
    }
  }
  return(
    <main className="App">
    <div className="title">
      <h1>Te<BsScissors/>tile</h1>      
    </div>
    <section>
    <Menu categories={categories} filterProducts={filterProducts}/>
    <Products products={products}/>
    </section>
    </main >
  )
}

export default App;
