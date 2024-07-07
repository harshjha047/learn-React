import React, { useEffect, useState } from 'react'
import appConfig from '../Appwright/AppConfig'
import{Container,Card}from'../components/index'


function AllPost() {
   const[posts,setPosts]= useState([])
   useEffect(()=>{
    appConfig.getPost([posts]).then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }
       })
   },[])
  
  return (
    <div>
        <Container>
            <div className="">
                {posts.map((post)=>(
                    <div key={post.$id} className="">
                        <Card post= {post}/>
                    </div>
                ))}
            </div>
        </Container>
        
    </div>
  )
}

export default AllPost