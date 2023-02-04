import {useForm} from "react-hook-form";
import {useAppReducer} from "../../hooks/useAppReducer";
import {carAction} from "../../reducers/carReducer";


const CarForm = () => {
    const {register, reset, handleSubmit} = useForm()
    const [,dispatch] = useAppReducer(value => value.carReducer)

    const save =(car) => {
        dispatch(carAction.ADD(car))
        reset()

    }

    return(
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            <button> save </button>

        </form>
    )
}

export {CarForm}