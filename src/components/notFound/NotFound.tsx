import React, { FC } from 'react'
type Props ={
    msg: string
}
const NotFound:FC<Props> = ({msg}) => {
  return (
    <div className=" mx-auto">
        <span>{msg}</span>
    </div>
  )
}

export default NotFound