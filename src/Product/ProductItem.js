import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'
// import { useContext } from 'react'

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem',
  },

}

function ProductItem({ prod, index, onChange }) {
  const { removeProd } = useContext(Context)
  const classes = []

  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <strong>{index + 1}</strong>
        &nbsp;
        {prod.title}
      </span>

      <button className="rm" onClick={removeProd.bind(null, prod.id)}>
        &times;
      </button>
    </li>
  )
}

ProductItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
}

export default ProductItem