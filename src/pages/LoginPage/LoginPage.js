import {useForm} from "react-hook-form";
import {authService} from "../../services";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


const LoginPage = () => {
  const {register, handleSubmit} = useForm()

   const [errors, setErrors] = useState(null)
    const navigate = useNavigate();

    const login = async (userCredential) => {
     try {
         await authService.login(userCredential)
         navigate('/cars')
     }catch (e) {
         if (e.response.status === 401){
             setErrors(e.response.data)
         }
     }

    }


    return (
        <div>
            <div>
        <form onSubmit={handleSubmit(login)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>LOGIN</button>
        </form>
        </div>
            {errors?.detail &&
                <div>
                    {errors.detail}
                </div>
            }
            </div>
    )
}

export {LoginPage}