

const Flight = (props) => {

    let {item} = props

    return(
        <div>
            <h2>{item.mission_name}</h2>
            <div>{item.launch_year}</div>
            <img src={item.links.mission_patch_small} alt={item.mission_name}/>
        </div>
    )

}

export {Flight}