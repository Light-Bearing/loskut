import React,{Component} from 'react';


const Card =({property}) =>{
    const {id,index,name,price,picture} = property;
    return(
        <div id={`card-${index}`} className="card">
            <img src={picture} alt = {name} width="200" height="200"/>
            <div className="details">
                {/* <span className="index">{index+1}</span> */}
                <p className="name">
                    {name}<br />
                    {price}
                </p>
            </div>
        </div>

    )
}

export default Card;