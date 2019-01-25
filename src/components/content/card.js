import React,{Component} from 'react';


const Card =({property,center,position}) =>{
    const {id,index,name,price,picture} = property;
    return(
        <div id={`card-${center === position ? "3" : "1"}`} className="card">
            <img src={picture} alt = {name} width="200" height="200"/>
            <div className="details">
                {/* <span className="index">{index+1}</span> */}
                <p className="name">
                    Название: {name}<br />
                    Цена от {price} ₽
                </p>
            </div>
        </div>

    )
}

export default Card;