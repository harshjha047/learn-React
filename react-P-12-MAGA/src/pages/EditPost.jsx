import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import appConfig from '../Appwright/AppConfig'
import { Container, PostForm } from '../components'


function EditPost() {
    const [post,setPosts]= useState(null)
    const {slug}=useParams()
    const navigate=useNavigate()
    useEffect(()=>{
        if(slug){
            appConfig.getPost(slug).then((post)=>{
                if(post){
                    setPosts(post)
                }
            })
        }else{
            navigate('/')
        }
    },[slug,navigate])
  return post ? (
    <div className="">
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
  ): null
}

export default EditPost