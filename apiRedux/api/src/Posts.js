import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux/es/exports'
import { fetchPosts } from './Action'
const Posts = () => {
    const dispatch=useDispatch();
    const posts=useSelector((state)=>state);
    useEffect(()=>{
    dispatch(fetchPosts())
    },[])
  return (
    <div>
      {posts.map(el=>{
        return <h3>{el.title}</h3>
      })}
    </div>
  )
}

export default Posts
