import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {userValidator} from "../../validators/userValidator";
import {userService} from "../../services";
import {useEffect} from "react";


const UsersForm = ({setUsers, updateUser}) => {
const {register,handleSubmit,reset,formState:{errors,isValid},setValue}= useForm({mode:"all", resolver:joiResolver(userValidator)})

    useEffect(()=> {
        if(updateUser){
            setValue('name', updateUser.name)
            setValue('email', updateUser.email)
        }

    },[updateUser])



    const submit = async (data) => {
    if (data.id && updateUser) {
        const {} = await userService.updateById(data.id, data)
        setUsers(user=>[...user])
        reset()
    } else {
      await userService.create(data).then(({data}) =>
        setUsers(prev=>[...prev,data]))
        reset()
    }}


    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" placeholder={'email'} {...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}
            <button disabled={!isValid}>{updateUser?'update':'save'}</button>
        </form>
    )
}


export {UsersForm}