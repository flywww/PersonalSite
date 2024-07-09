import React from 'react'

function SkillItem(props){
    return(
        <div className='skillItem'>
            <img className='skillItem__image' src={props.imgURL} alt={props.imgALT} />
            <div className='skillItem__content'>
              <h3 className='skillItem__title' >{props.title}</h3>
              <p className='skillItem__description'>{props.description}</p>
            </div>
        </div>
    )
}

export default SkillItem;