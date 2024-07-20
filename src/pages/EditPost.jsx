import React, { useEffect, useState } from 'react'
import { Container, PostForm } from '../components'
import { useNavigate, useParams } from 'react-router-dom'
import appwriteService from '../appwrite/config';

const EditPost = () => {
const { slug } = useParams();
const [post,setPost] = useState(null);
const navigate = useNavigate();

useEffect(()=>{
    if(slug){
        appwriteService.getPost(slug).then((post)=>{
            if(post) {
                setPost(post);
            }

        })
    }else{
        navigate('/');
    }
},[navigate,slug])

  return (
    <Container>
        <PostForm post={post} />
    </Container>
  )
}

export default EditPost