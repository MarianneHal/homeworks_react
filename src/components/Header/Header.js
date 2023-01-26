import {Link, NavLink} from "react-router-dom";

import style from './Header.module.css';


const Header = () => {

    return(
        <div className={style.Header}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/todos'}>Todos</NavLink>
                <NavLink to={'/albums'}>Albums</NavLink>
                <NavLink to={'/comments'}>Comments</NavLink>
        </div>
    )
}

export {Header}