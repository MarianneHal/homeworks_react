

const Dog = ({dog, dispatch}) => {

    return (
        <div>
            <div>{dog.name}</div>
            <button onClick={() => dispatch({type: 'DELETE_DOG', payload:dog.id})}>DELETE</button>

        </div>
    )
}

export {Dog}