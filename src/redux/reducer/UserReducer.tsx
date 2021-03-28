import * as types from '../types/Type'
interface initialState{
userList:any;
}
const initialState:initialState ={
    userList:[]
}


export const UserReducer =(state = initialState,action:any):any=>{

    switch(action.type){
        case types.USERS_LIST:{
            return{
                ...state,
                userList:action.payload

            }
        }
        default:{
            return state;
        }
    }

}


