import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { Route, RouteComponentProps, Switch ,Redirect} from 'react-router-dom';
import { async } from 'validate.js';
import Home from '../home/Home';
import Login from '../modules/auth/Login';
import Dashboard from '../modules/dashboard/Dashboard';
import PostDetail from '../modules/posts/postdetails/PostDetail';
import Posts from '../modules/posts/Posts';

interface Props extends RouteComponentProps { }{

}
const BaseRoute:FC<Props> =()=>{
    const [get,set]=useState('' as any);

    const [getaccess,setaccess]=useState('' as any);
    const mainaccess:any =  localStorage.getItem("login");
    let localaccess = JSON.parse(mainaccess)
    console.log("main accesss",localaccess);

    
    const getlocalStorage= async()=>{
        const access:any = await localStorage.getItem("login");
         
        setaccess(JSON.parse(access));
    }
 
    return(<div className="container-fluid">
        <div className="row">
            <div className="col-12">
             
                    <Route exact path='/'>
                        <Redirect to='/login' />
                      
                    </Route>
                    <Route exact path="/login" component={Login} />
                {
                    localaccess?.access=== true &&
                    <div>
                      <Route exact path="/home" component={Home} />
                  
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/posts" component={Posts} />
                    <Route exact path="/postdetail/:id" component={PostDetail} />
                        </div>
                }
                  

            </div>
        </div>

    </div>)
}

export default BaseRoute;