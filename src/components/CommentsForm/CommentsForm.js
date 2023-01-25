import {useForm} from "react-hook-form";
import {commentsService} from "../../services";


const CommentsForm = ({setComments}) => {
const {register, handleSubmit, reset, formState:{errors, isValid}}= useForm({mode:'all'})

    const submit = async (data) => {
    await commentsService.create(data).then(({data}) => setComments((prev) => [...prev, data]))
        console.log(data)
        reset()
    }
    return(
        <div>
          <form onSubmit={handleSubmit(submit)}>
              <input type="text" placeholder="your comments" {...register('body')}/>
              <button>Create</button>
          </form>
        </div>
    )
}


export {CommentsForm}