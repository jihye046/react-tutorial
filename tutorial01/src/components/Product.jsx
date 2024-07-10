import React from 'react'

export default function Product(props) {
  return (
    <div>
        <img src={props.url} alt={props.alt}/>
        <div>{props.name}</div>
        <div>{props.price}</div>
    </div>
  )
}
