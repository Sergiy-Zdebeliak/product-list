import React from 'react'
import ProductList from './Product/ProductList'
import Context from './context'
import { AddProducts } from './Product/AddProducts'
import Modal from './Modal/modal'

function App() {
  const [prod, setProds] = React.useState([
    { id: 1,  title: 'Bread' },
    { id: 2,  title: 'Aplle' },
    { id: 3,  title: 'Milk' },
  ])

  

  function toggleProd(id) {

  }
   

  function removeProd(id) {
    setProds(prod.filter((prod) => prod.id !== id))
  }
  function addProd(title) {
    setProds(prod.concat([
      {
        title,
        id: Date.now()
        
    }
  ]))
  }
  return (
    <Context.Provider value={{ removeProd }}>
      <div className="wraper">
        <h1>Product list</h1>
        <Modal/>
         <AddProducts onCreate={addProd}/>
        {prod.length ? (
          <ProductList prods={prod} onToggle={toggleProd} />
        ) : (
          <p>No products!</p>
        )}
      </div>
    </Context.Provider>
  )
}

export default App