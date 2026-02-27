import React from 'react'
import ProductCard from '../components/ProductCard'
import products from '../data/Product.js'

const ProductList = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#faf8f5',
      fontFamily: '"DM Sans", "Segoe UI", sans-serif',
    }}>
      {/* Header */}
      <div style={{
        padding: '4rem 2.5rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <p style={{
          fontFamily: '"DM Mono", monospace',
          fontSize: '0.7rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#a09880',
          marginBottom: '0.5rem',
        }}>
          New Collection
        </p>
        <h1 style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: '700',
          color: '#0f0f0f',
          margin: 0,
          lineHeight: '1.15',
        }}>
          Featured Products
        </h1>
        <div style={{
          width: '48px',
          height: '2px',
          background: '#e8c547',
          marginTop: '1rem',
        }} />
      </div>

      {/* Grid */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1rem 1.5rem 4rem',
      }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList