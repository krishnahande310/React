import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      This is header
      <button className={styles.btn}>Submit</button>
    </div>
  )
}

export default Header
