import {useForm} from "react-hook-form";

import {UserService} from "../../services";
import {useNavigate} from "react-router-dom";
import {useState} from "react";


const RegisterPage = () => {

    const {handleSubmit, register} = useForm()
    const navigate = useNavigate();
    const [error, setError] = useState(null)

    const registerUser = async (user) => {
     try {
         await UserService.create(user)
         navigate('/login')
     }catch (e) {
         setError(e.response.data.detail)
     }
    }


    return (
        <div>
            <div>
                {error && <div>{error}</div>}
            </div>
            <div>
              <form onSubmit={handleSubmit(registerUser)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
                <button>REGISTER</button>
              </form>
            </div>
        </div>
    )
}

export {RegisterPage}