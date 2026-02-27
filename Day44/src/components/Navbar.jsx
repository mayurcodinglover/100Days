import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Navbar = () => {
  const { cartitem } = useContext(CartContext)

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 2.5rem',
      height: '70px',
      background: '#0f0f0f',
      borderBottom: '1px solid #1e1e1e',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <Link to="/" style={{
        fontFamily: '"Playfair Display", Georgia, serif',
        fontSize: '1.5rem',
        fontWeight: '700',
        color: '#f5f0e8',
        textDecoration: 'none',
        letterSpacing: '0.02em',
      }}>
        SHOPHAUS
      </Link>

      <Link to="/cart" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontFamily: '"DM Mono", "Courier New", monospace',
        fontSize: '0.8rem',
        fontWeight: '500',
        color: '#f5f0e8',
        textDecoration: 'none',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        padding: '0.5rem 1.2rem',
        border: '1px solid #333',
        borderRadius: '2px',
        transition: 'all 0.2s ease',
      }}
        onMouseEnter={e => {
          e.currentTarget.style.background = '#f5f0e8'
          e.currentTarget.style.color = '#0f0f0f'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'transparent'
          e.currentTarget.style.color = '#f5f0e8'
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 01-8 0"/>
        </svg>
        Cart
        {cartitem.length > 0 && (
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '20px',
            height: '20px',
            background: '#e8c547',
            color: '#0f0f0f',
            borderRadius: '50%',
            fontSize: '0.7rem',
            fontWeight: '700',
          }}>
            {cartitem.length}
          </span>
        )}
      </Link>
    </nav>
  )
}

export default Navbar