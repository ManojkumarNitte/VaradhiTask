import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, useParams } from 'react-router-dom';
import Header from '../../../Common/header/Header';

import * as action from '../../../redux/actions/PostsAction';
import './PostDetail.scss';
interface Props extends  RouteComponentProps{

}
 const PostDetail:FC<Props> =(props)=>{
     const [search,searchdata]= useState('' as any);
     const [refData,TempData]= useState([] as any);
     const [listData,setlist]= useState([] as any);
     const [accesssearch,getsearch] = useState(false as any);
     const [setid,getid] = useState();

     let user :any= useSelector((state:any)=>{ return state.Post.postListId});
     let dispatch = useDispatch();
     const { id }:any = useParams();
     useEffect(()=>{
         
       
     
        // getid(id)
        dispatch(action.PostById(id));
      
               
     },[])

     useEffect(()=>{
        setlist(user);
        TempData(user);
     },[user])
     useEffect(()=>{
         if(accesssearch){
             setlist(listData.filter((res:any)=>{return res.name.toLowerCase().includes(search.toLowerCase())}))
        
         }
         if(search===''){
            setlist(refData);
            }
       
       
     },[search,listData]);
     const HandleText=(event:any)=>{
         console.log(event.target.value)
        searchdata(event.target.value);
     }
     const SearchData=()=>{
         if(search){
            getsearch(true);
         }
       
       
        


//   setlist([])
     }

     const HandleDetail=(id:any)=>{
     }
     return(<div className="container-fluid">
         <Header HandleSearch={(e:any)=>HandleText(e)} SubmitSearch={SearchData} {...props}/>
       <div className="row">
   
                <div className="col-12 text-center">
                 <div className="card mt-4 mb-4 card-list" onClick={()=>HandleDetail(listData.id)}>
                   

                         <div className="card-body">
                         <u>Title</u>
                         <p>{listData.title}</p>
                       
                         <u>Description</u>
                         <p>{listData.body}</p>
                       
                        
                         </div>
                     </div>
                     
                </div>
           
          
       </div>
     </div>)
 }
 export default PostDetail;