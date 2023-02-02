import {useReducer, useState} from "react";

import {CatDog} from "../CatDog/CatDog";



const reducer = (state = null, action) => {
    switch (action.type) {
        case 'AddCat':
            return {...state, cats: state.cats.concat([action.payload])}
        case 'AddDog':
            return {...state, dogs: state.dogs.concat([action.payload])}
        case 'DeleteCat':
            return {...state, cats: state.cats.filter(item => item.id !== action.payload.id)}
        case 'DeleteDog':
            return {...state, dogs: state.dogs.filter(item => item.id !== action.payload.id)}
    }
}
const CatDogComponent = () => {
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []})
    const [cat, setCat] = useState({id: null, body: ''})
    const [dog, setDog] = useState({id: null, body: ''})
    return (
            <div>
                <div style={{display: "flex"}}>
                <CatDog
                    setAnimal={setCat}
                    animal={cat}
                    animals={state.cats}
                    dispatch={dispatch}
                    addAnimal={'AddCat'}
                    deleteAnimal={'DeleteCat'}
                    create={'Cat'}
                />
            </div>
                <div style={{display: "flex"}}>
                    <CatDog
                        setAnimal={setDog}
                        animal={dog}
                        animals={state.dogs}
                        dispatch={dispatch}
                        addAnimal={'AddDog'}
                        deleteAnimal={'DeleteDog'}
                        create={'Dog'}
                    />
                </div>

            </div>

    );
};

export {CatDogComponent}