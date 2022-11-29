import React from 'react'
import zaferes from './images/katie-zaferes.png'
import './Card.css'
import star from './images/star.png'

function Card() {
  return (
    <div className='card'>
        <div className='pic-div' style={{backgroundImage:`url(${zaferes})`
        }}>
            <p className='pic-text'>sold out</p>
        </div>
        <div className='card-info'>
            <div className='red-star-content' >
                <img className='red-star' src={star} alt={'a red star'}/>
                <p>5.0 <span className='rating-span'>(6) • USA</span></p>
            </div>
            <p className='card-text'>Life lessons with Katie Zaferes</p>
            <p className='card-text'><span>From $135</span>/ person</p>
        </div>
    </div>
  )
}

export default Card