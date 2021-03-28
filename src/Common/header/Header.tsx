import React, { useEffect, useMemo, useState,useReducer } from 'react';
import { FC } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { async } from 'validate.js';
// import { ListBox } from 'primereact/listbox';
// import { Dropdown } from 'primereact/dropdown';
import './Header.scss';



interface Props extends RouteComponentProps {
HandleSearch:(event:any)=>any;
SubmitSearch:()=>any;
}

 

const Header:FC<Props> =(props)=>{
    const [state,setindex]=useState();
    const [route,setroute]=useState('' as any);
    const [routeaccess,getrouteaccess]=useState(false);
    const [user,getuser] = useState('' as any);
    
  
     useEffect(()=>{
     const fetch :any=localStorage.getItem("login");
      getuser(JSON.parse(fetch));
      console.log("userss",user);
     },[])

     useEffect(()=>{
     
      setindex(state);
      if(routeaccess){
      
       props.history.push(route);
      }
   
    },[state])

  const  HandleRoute=(id:any,routes:any)=>{
    
      setindex(id);
      setroute(routes);
    // await setroute(routes);
    getrouteaccess(true);

     // setindex(id);
    
  }

  const Handlelogout=()=>{
    localStorage.removeItem("login");
    props.history.push("/login");
  }
    
    return(<div className="container-fluid">
        <div className="row">
            <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Varadhi Smartek</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className='nav-item active nav-linkcls' onClick={()=>HandleRoute(0,'/dashboard')}>
       <a className="nav-link"> Home</a>
      </li>
    
      <li  className='nav-item active nav-linkcls' onClick={()=>HandleRoute(2,'/posts')}>
        <a className="nav-link" >Posts </a>
      </li>
      <li  className='nav-item active nav-linkcls' onClick={()=>HandleRoute(1,'/dashboard')} >
        <a className="nav-link"  >Lists </a>
      </li>


     
   
    </ul>
    {/* <form className="form-inline my-2 my-lg-0"> */}
      <input className="form-control mr-sm-2 input-searchcls" type="search" placeholder="Search" aria-label="Search" onChange={props.HandleSearch}/>
      <button className="btn btn-outline-warning my-2 my-sm-0"  onClick={props.SubmitSearch}>Search</button>
      <li>
       <h5 className="text-danger">Welcome {user.password}</h5>
       <h5 className="text-danger" onClick={Handlelogout}>Logout</h5>
      </li>
    {/* </form> */}
  </div>
</nav>
       
            </div>
        </div>
      
  


    </div>)
}

export default Header;