import {Link} from "react-router-dom";

import css from './Heder.module.css';

const Header = () => {

    return (
        <div className={css.Header}>
            <div>
                <Link to={'/login'}>LOGIN</Link>
                <Link to={'/register'}>REGISTER</Link>
            </div>
        </div>
    )
}

export {Header}