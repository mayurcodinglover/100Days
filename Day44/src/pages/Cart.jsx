import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cartitem, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice, totalItems } = useContext(CartContext)

  const styles = {
    page: {
      minHeight: '100vh',
      background: '#faf8f5',
      fontFamily: '"DM Sans", "Segoe UI", sans-serif',
      padding: '3rem 2rem',
    },
    container: {
      maxWidth: '860px',
      margin: '0 auto',
    },
    header: {
      marginBottom: '2.5rem',
      paddingBottom: '1.5rem',
      borderBottom: '1px solid #e8e4dc',
    },
    eyebrow: {
      fontFamily: '"DM Mono", monospace',
      fontSize: '0.7rem',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: '#a09880',
      marginBottom: '0.5rem',
    },
    title: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontSize: '2.2rem',
      fontWeight: '700',
      color: '#0f0f0f',
      margin: 0,
    },
    empty: {
      textAlign: 'center',
      padding: '5rem 2rem',
      color: '#a09880',
      fontFamily: '"Playfair Display", Georgia, serif',
      fontSize: '1.3rem',
    },
    emptyLink: {
      display: 'inline-block',
      marginTop: '1.5rem',
      padding: '0.6rem 1.6rem',
      background: '#0f0f0f',
      color: '#f5f0e8',
      textDecoration: 'none',
      fontFamily: '"DM Mono", monospace',
      fontSize: '0.72rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      borderRadius: '2px',
    },
    layout: {
      display: 'grid',
      gridTemplateColumns: '1fr 320px',
      gap: '2rem',
      alignItems: 'start',
    },
    itemsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    item: {
      display: 'flex',
      gap: '1.2rem',
      background: '#fff',
      border: '1px solid #e8e4dc',
      borderRadius: '4px',
      padding: '1.2rem',
      transition: 'box-shadow 0.2s',
    },
    itemImg: {
      width: '90px',
      height: '90px',
      objectFit: 'cover',
      borderRadius: '2px',
      background: '#f8f6f2',
      flexShrink: 0,
    },
    itemInfo: {
      flex: 1,
    },
    itemCategory: {
      fontFamily: '"DM Mono", monospace',
      fontSize: '0.62rem',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: '#a09880',
    },
    itemName: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontSize: '1rem',
      fontWeight: '600',
      color: '#1a1a1a',
      margin: '0.2rem 0 0.5rem',
    },
    itemPrice: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: '700',
      color: '#0f0f0f',
      fontSize: '1rem',
    },
    qtyRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginTop: '0.8rem',
    },
    qtyBtn: {
      width: '28px',
      height: '28px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f8f6f2',
      border: '1px solid #ddd',
      borderRadius: '2px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '600',
      color: '#333',
      transition: 'background 0.15s',
    },
    qtyNum: {
      fontFamily: '"DM Mono", monospace',
      fontSize: '0.85rem',
      minWidth: '20px',
      textAlign: 'center',
    },
    removeBtn: {
      marginLeft: 'auto',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: '#c0a090',
      fontSize: '0.7rem',
      fontFamily: '"DM Mono", monospace',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      padding: '0.2rem',
      transition: 'color 0.2s',
      alignSelf: 'flex-start',
    },
    summary: {
      background: '#0f0f0f',
      color: '#f5f0e8',
      borderRadius: '4px',
      padding: '2rem',
      position: 'sticky',
      top: '90px',
    },
    summaryTitle: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontSize: '1.2rem',
      fontWeight: '700',
      marginBottom: '1.5rem',
      paddingBottom: '1rem',
      borderBottom: '1px solid #333',
    },
    summaryRow: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: '"DM Mono", monospace',
      fontSize: '0.8rem',
      letterSpacing: '0.05em',
      marginBottom: '0.8rem',
      color: '#b0a898',
    },
    summaryTotal: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '1.2rem',
      paddingTop: '1.2rem',
      borderTop: '1px solid #333',
      fontFamily: '"Playfair Display", Georgia, serif',
      fontSize: '1.3rem',
      fontWeight: '700',
    },
    checkoutBtn: {
      marginTop: '1.5rem',
      width: '100%',
      padding: '0.9rem',
      background: '#e8c547',
      color: '#0f0f0f',
      border: 'none',
      borderRadius: '2px',
      fontFamily: '"DM Mono", monospace',
      fontSize: '0.78rem',
      fontWeight: '700',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      cursor: 'pointer',
      transition: 'opacity 0.2s',
    },
  }

  if (cartitem.length === 0) {
    return (
      <div style={styles.page}>
        <div style={{ ...styles.container, ...styles.empty }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛍️</div>
          <p>Your cart is empty.</p>
          <Link to="/" style={styles.emptyLink}>Continue Shopping</Link>
        </div>
      </div>
    )
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <p style={styles.eyebrow}>Review & Checkout</p>
          <h1 style={styles.title}>Your Cart</h1>
        </div>

        <div style={styles.layout}>
          {/* Items */}
          <div style={styles.itemsList}>
            {cartitem.map((item) => (
              <div key={item.id} style={styles.item}>
                <img src={item.image} alt={item.name} style={styles.itemImg} />
                <div style={{ ...styles.itemInfo, display: 'flex', flexDirection: 'column' }}>
                  <span style={styles.itemCategory}>{item.category}</span>
                  <h3 style={styles.itemName}>{item.name}</h3>
                  <span style={styles.itemPrice}>${item.price}</span>
                  <div style={styles.qtyRow}>
                    <button
                      style={styles.qtyBtn}
                      onClick={() => decreaseQuantity(item.id)}
                      onMouseEnter={e => e.currentTarget.style.background = '#e0ddd8'}
                      onMouseLeave={e => e.currentTarget.style.background = '#f8f6f2'}
                    >−</button>
                    <span style={styles.qtyNum}>{item.quantity}</span>
                    <button
                      style={styles.qtyBtn}
                      onClick={() => increaseQuantity(item.id)}
                      onMouseEnter={e => e.currentTarget.style.background = '#e0ddd8'}
                      onMouseLeave={e => e.currentTarget.style.background = '#f8f6f2'}
                    >+</button>
                    <button
                      style={styles.removeBtn}
                      onClick={() => removeFromCart(item.id)}
                      onMouseEnter={e => e.currentTarget.style.color = '#c0392b'}
                      onMouseLeave={e => e.currentTarget.style.color = '#c0a090'}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div style={styles.summary}>
            <p style={styles.summaryTitle}>Order Summary</p>
            <div style={styles.summaryRow}>
              <span>Items</span>
              <span>{totalItems}</span>
            </div>
            <div style={styles.summaryRow}>
              <span>Subtotal</span>
              <span>${totalPrice}</span>
            </div>
            <div style={styles.summaryRow}>
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div style={styles.summaryTotal}>
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>
            <button
              style={styles.checkoutBtn}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Checkout →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart