import {useReducer, useRef} from "react";

import {UsersClassComponent} from "./components/UserClassComponents/UsersClassComponent";
import {Cats} from "./components/Cats/Cats";
import {Dogs} from "./components/Dogs/Dogs";


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CAT':
            const [last] = state.cats.slice(-1)
            const id = last ? last.id + 1 : 0
            return {...state, cats: [...state.cats, {id, name: action.payload}]}
        case 'DELETE_CAT':
            const index = state.cats.findIndex(cat => cat.id === action.payload)
            state.cats.splice(index, 1)
            return {...state}
        case 'ADD_DOG':
            const [lastDog] = state.dogs.slice(-1)
            const idD = lastDog ? lastDog.id + 1 : 0
            return {...state, dogs: [...state.dogs, {idD, name: action.payload}]}
        case 'DELETE_DOG':
            const indexDog = state.dogs.findIndex(dog => dog.id === action.payload)
            state.dogs.splice(indexDog, 1)
            return {...state}
        default:
            return {...state}

    }
}

function App() {

    const inputCat = useRef()
    const inputDog = useRef()

    const [state, dispatch] = useReducer(reducer, {cats:[], dogs:[]}, (data) => data)

    const createCat = () => {
    dispatch({type:'ADD_CAT', payload: inputCat.current.value})
        inputCat.current.value = ''
    }

    const creatDog = () => {
        dispatch({type:'ADD_DOG', payload: inputDog.current.value})
        inputDog.current.value = ''
    }


  return (
    <div className="App">
        <UsersClassComponent/>
        <hr/>
           <input type="text" ref={inputCat}/>
           <button onClick={createCat}>Create Cat</button>
           <Cats cats={state.cats} dispatch={dispatch}/>


            <input type="text" ref={inputDog}/>
            <button onClick={creatDog}>Create Dog</button>
            <Dogs dogs={state.dogs} dispatch={dispatch}/>


    </div>
  );
}

export {App};
