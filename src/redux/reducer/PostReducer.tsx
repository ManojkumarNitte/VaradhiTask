import * as types from '../types/Type'
interface initialState{
postList:[];
postListId:[];
}
const initialState:initialState ={
    postList:[],
    postListId:[]
}


export const PostReducer =(state = initialState,action:any):any=>{

    switch(action.type){
        case types.POSTS_LIST:{
            return{
                ...state,
                postList:action.payload

            }
        }
        case types.POSTS_LIST_ID:{
            return{
                ...state,
                postListId:action.payload

            }
        }
        default:{
            return state;
        }
    }

}


