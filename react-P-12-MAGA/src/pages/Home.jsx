import React, { useEffect, useState } from 'react'
import appConfig from '../Appwright/AppConfig'
import { Card, Container} from '../components'

function Home() {
    const[posts,setPosts]= useState([])
    useEffect(()=>{
        appConfig.getPost([posts]).then((posts)=>{
            if(posts){
                setPosts(posts.documents)
            }
           }) 
    },[])
    
    if (posts.length===0) {
        return (
            <div><Container>
                <h1>nop</h1>
                </Container>
                </div>
          )
    } else{
        return (
            <div><Container>
                <h1>posts</h1>
                {posts.map((post)=>{
                    <div className="" key={post.id}>
                     <Card {...post}/>
                     </div>
                })}
                </Container>
                </div>
          )
    }
}

export default Home