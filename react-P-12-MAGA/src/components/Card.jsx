import React from 'react'
import appConfig from '../Appwright/AppConfig'
import {Link} from'react-router-dom'

function Card({$id, title, featuredImage}) {
  return (
    <>  
    <Link to={`/post/${$id}`}>
      <div>
          <div className="">
              <img src={appConfig.getFilePreview(featuredImage)} alt={title}/>
          </div>
          <h2>{title}</h2>
      </div>
    </Link>
    </>
  )
}

export default Card