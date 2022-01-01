import React from 'react';
import classes from'./../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem  = (props) => {
    return (
        <div  className={classes.dialog}>
            <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt={""}/>
            <NavLink to={"/dialogs/" + props.id} className={({isActive}) => isActive? `${classes.active}`:""} > {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;