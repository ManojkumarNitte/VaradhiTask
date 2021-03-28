import React, { useEffect, useMemo } from 'react';
import { FC } from 'react';
import Header from '../Common/header/Header';
import './Home.scss';
interface Props{

}
const Home:FC<Props> =(props)=>{
    useEffect(()=>{
        console.log("datata");
    })
    return(<div className="container-fluid">
        <div className="row l1">
            <div className="col-12">
                {/* <Header {...props}/> */}
          

            </div>
        </div>

    </div>)
}

export default Home;