import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext)
  const [added, setAdded] = useState(false)
  const [hovered, setHovered] = useState(false)

  const handleAdd = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '280px',
        margin: '1rem',
        background: '#fff',
        border: '1px solid #e8e4dc',
        borderRadius: '4px',
        overflow: 'hidden',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 20px 40px rgba(0,0,0,0.12)'
          : '0 2px 8px rgba(0,0,0,0.04)',
        fontFamily: '"DM Sans", "Segoe UI", sans-serif',
      }}
    >
      {/* Image */}
      <div style={{
        width: '100%',
        height: '260px',
        overflow: 'hidden',
        background: '#f8f6f2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: '1.2rem' }}>
        <span style={{
          fontFamily: '"DM Mono", monospace',
          fontSize: '0.65rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#a09880',
        }}>
          {product.category}
        </span>

        <h2 style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: '1.1rem',
          fontWeight: '600',
          color: '#1a1a1a',
          margin: '0.3rem 0 0.6rem',
          lineHeight: '1.3',
        }}>
          {product.name}
        </h2>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '1rem',
        }}>
          <span style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: '1.2rem',
            fontWeight: '700',
            color: '#0f0f0f',
          }}>
            ${product.price}
          </span>

          <button
            onClick={handleAdd}
            style={{
              padding: '0.5rem 1.1rem',
              background: added ? '#2d7a4f' : '#0f0f0f',
              color: '#f5f0e8',
              border: 'none',
              borderRadius: '2px',
              fontSize: '0.72rem',
              fontFamily: '"DM Mono", monospace',
              fontWeight: '500',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'background 0.25s ease, transform 0.1s ease',
              transform: added ? 'scale(0.97)' : 'scale(1)',
            }}
          >
            {added ? '✓ Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard