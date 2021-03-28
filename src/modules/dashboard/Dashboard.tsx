import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import Header from '../../Common/header/Header';
import * as action from '../../redux/actions/UsersAction';
import './Dashboard.scss';
interface Props extends  RouteComponentProps{

}
 const Dashboard:FC<Props> =(props)=>{
     const [search,searchdata]= useState('' as any);
     const [refData,TempData]= useState([] as any);
     const [listData,setlist]= useState([] as any);
     const [accesssearch,getsearch] = useState(false as any);

     let user :any= useSelector((state:any)=>{ return state.User.userList});
     let dispatch = useDispatch();

     useEffect(()=>{
        dispatch(action.usersList());
      
     },[]);

     useEffect(()=>{
        setlist(user);
        TempData(user);
     },[user])
     useEffect(()=>{
         if(accesssearch){
             console.log("accesssearch",accesssearch);
             console.log("called");
             setlist(listData.filter((res:any)=>{return res.name.toLowerCase().includes(search.toLowerCase())}))
            
         }
         if(search===''){
            setlist(refData);
            getsearch(false);
            }
       
       
     },[accesssearch,search]);
     const HandleText=(event:any)=>{
      
        searchdata(event.target.value);
     }
     const SearchData=()=>{
         console.log("Searched ",search);
         if(search!==''){

            getsearch(true);
         }else{
            getsearch(false);
         }
       
       
        


//   setlist([])
     }
     return(<div className="container-fluid">
         <Header HandleSearch={(e:any)=>HandleText(e)} SubmitSearch={SearchData} {...props}/>
       <div className="row">
       {listData?.map((res:any,i:any)=>{
          
               return(
                <div className="col-lg-3 col-xl-3 col-md-3 col-sm-12 col-12 text-center" key={i}>
                 <div className="card mt-4 mb-4 card-list">
                     <div className="text-center card-header">
                         <p>{res.name}</p>
                         <p>{res.email}</p>
                         </div>

                         <div className="card-body">
                         <u>Address</u>
                         <p>{res.address.street}</p>
                         <p>{res.address.city}</p>
                         <u>Company</u>
                         <p>{res.company.name}</p>
                       
                        
                         </div>
                     </div>
                     
                </div>
               )
           })}
          
       </div>
     </div>)
 }
 export default Dashboard;