import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import Header from '../../Common/header/Header';
import * as action from '../../redux/actions/PostsAction';
import './Posts.scss';
interface Props extends  RouteComponentProps{

}
 const Posts:FC<Props> =(props)=>{
     const [search,searchdata]= useState('' as any);
     const [refData,TempData]= useState([] as any);
     const [listData,setlist]= useState([] as any);
     const [accesssearch,getsearch] = useState(false as any);

     let user :any= useSelector((state:any)=>{ return state.Post.postList});
     let dispatch = useDispatch();

     useEffect(()=>{
        dispatch(action.PostAction());
     },[])
     useEffect(()=>{
      
        setlist(user);
        TempData(user);
     },[user])
     useEffect(()=>{
         if(accesssearch){
             setlist(listData.filter((res:any)=>{return res.title.toLowerCase().includes(search.toLowerCase())}))
        
         }
         if(search===''){
            setlist(refData);
            getsearch(false)
            }
       
       
     },[search,accesssearch]);
     const HandleText=(event:any)=>{
        
        searchdata(event.target.value);
     }
     const SearchDatas=()=>{
        if(search!==''){

            getsearch(true);
         }else{
            getsearch(false);
         }
       
       
    
     }

     const HandleDetail=(id:any)=>{
       
        props.history.push(`/postdetail/${id}`);

     }
     return(<div className="container-fluid">
         <Header HandleSearch={(e:any)=>HandleText(e)} SubmitSearch={SearchDatas} {...props}/>
       <div className="row">
       {listData?.map((res:any,index:any)=>{
               return(
                <div className="col-lg-3 col-xl-3 col-md-3 col-sm-12 col-12 text-center" key={index}>
                 <div className="card mt-4 mb-4 card-list" onClick={()=>HandleDetail(res.id)}>
                   

                         <div className="card-body">
                         <u>Title</u>
                         <p className="contentfont-size">{res.title}</p>
                       
                         <u>Description</u>
                         <p className="contentfont-size">{res.body}</p>
                       
                        
                         </div>
                     </div>
                     
                </div>
               )
           })}
          
       </div>
     </div>)
 }
 export default Posts;