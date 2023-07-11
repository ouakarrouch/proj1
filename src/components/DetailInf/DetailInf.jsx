import React from 'react'
import './DetailInf.css'

const DetailInf = (props) => {
  return (
    <div className="left-info DetailsInfo">
    {props.children}
</div>
  )
}

export default DetailInf
