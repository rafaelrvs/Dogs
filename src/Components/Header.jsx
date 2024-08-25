import React from 'react'
import styles from './Header.module.css/'
import { Link } from 'react-router-dom'
import "../App.css"

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className='container'> 
        <Link to="/" >Home</Link>
        <Link to="/Login" >Login- Cadastro</Link>
      </nav>
    </div>
  )
}

export default Header
