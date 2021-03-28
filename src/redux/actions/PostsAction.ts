import axios from 'axios';
import * as types from '../types/Type';
const PostAction =()=>{
    return (dispatch:any)=>{
     axios.get('https://jsonplaceholder.typicode.com/posts').then((res:any)=>{
    
    dispatch(userListType(res.data))
     }).catch((e:any)=>{

         
    })

    }

}

const userListType =(data:any)=>{
return{
    type:types.POSTS_LIST,
    payload:data
}
}

const PostById =(id:any)=>{
    return (dispatch:any)=>{
     axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res:any)=>{
         console.log("response",res);
    
    dispatch(postId(res.data))
     }).catch((e:any)=>{

         
    })

    }
  

}
const postId =(data:any)=>{
    return{
        type:types.POSTS_LIST_ID,
        payload:data
    }
    }

export {PostAction,PostById}