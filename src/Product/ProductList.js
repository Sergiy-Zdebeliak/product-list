import React from 'react'
import PropTypes from 'prop-types'
import ProductItem from './ProductItem'

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
}

function ProductList(props) {
  return (
    <ul style={styles.ul}>
      {props.prods.map((prod, index) => {
        return (
          <ProductItem
            prod={prod}
            key={prod.id}
            index={index}
            onChange={props.onToggle}
          />
        )
      })}
    </ul>
  )
}

ProductList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
  
}

export default ProductList