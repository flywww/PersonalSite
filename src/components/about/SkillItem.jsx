import {React, memo} from 'react'

const SkillItem = memo(function SkillItem({title, description, imgURL, imgALT}){
    return(
        <div className='skillItem'>
            <img className='skillItem__image' src={imgURL} alt={imgALT} />
            <div className='skillItem__content'>
              <h3 className='skillItem__title' >{title}</h3>
              <p className='skillItem__description'>{description}</p>
            </div>
        </div>
    )
})

export default SkillItem;