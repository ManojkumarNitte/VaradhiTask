import axios from 'axios';
import * as types from '../types/Type';
const usersList =()=>{
    return (dispatch:any)=>{
     axios.get('https://jsonplaceholder.typicode.com/users').then((res:any)=>{
    
    dispatch(userListType(res.data))
     }).catch((e:any)=>{

         
    })

    }

}

const userListType =(data:any)=>{
return{
    type:types.USERS_LIST,
    payload:data
}
}


export {usersList}