import React from 'react'
import classes from './Header.module.css'
import logo from '../../assets/group.svg'

const Header = () => {
  return (
    <header className={classes.header}>
        <div className={classes['img-wrapper']}>
            <img className={classes.logo} src={logo} alt="group logo" />
        </div>
        <h1 className={classes['header-text']}>USERS</h1>
    </header>
  )
}

export default Header