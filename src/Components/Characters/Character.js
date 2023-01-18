import './CharactersStyle.css'
const Character = ({character}) => {
    const {id, name, status, species, image} = character
    return(
        <div className="div">
            <div className="title">{id}</div>
            <div className="paragraph">{name}</div>
            <div className="paragraph">{status}</div>
            <div className="paragraph">{species}</div>
            <img className="img" src={image} alt={name}/>
        </div>
    )
}
export {Character}