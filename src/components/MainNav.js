import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNav.module.css"

function MainNav(){
    return (
        <header className={classes.header}>
            <Link to='/'><div className={classes.logo}>Boulder<br/>Camp</div></Link>
            <nav>
                <ul>
                    <li><Link className={classes.register} to='/register'>Записаться на занятие</Link></li>
                    <li><Link to='/'>О нас</Link></li>
                    <li><Link to='/price'>Цены</Link></li>
                    <li><Link to='/service'>Услуги</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNav