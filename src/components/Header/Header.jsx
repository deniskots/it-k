import React from 'react';
import classes from'./Header.module.css';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
  return <header className={ classes.header}>
  <img src="https://cdn.dribbble.com/users/60166/screenshots/13967952/media/9ea8447026fdcadf66196aa38fcc0207.jpg?compress=1&resize=400x300" alt={""}></img>
    <div className={s.loginBlock}>
      {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
    </div>
  </header>
}
export default Header;