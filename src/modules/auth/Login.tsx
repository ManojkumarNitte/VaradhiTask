import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { LoginModel } from '../../Common/models/LoginModel';
import { Validation } from '../../Common/validation/Validation';
import * as action from '../../redux/actions/UsersAction';
import './Login.scss';
const data = [{ email: 'manoj@gmail.com', password: '*varnitha1' },
{ email: 'kumar@gmail.com', password: '*madikeri1' },
{ email: 'muruli@gmail.com', password: '*maragodu1' }]
interface Props extends  RouteComponentProps {

}
const Login: FC<Props> = (props) => {
    const Auth = new LoginModel();
    const validation = new Validation();

    const [loggedin, getlogincrendetials] = useState(Auth as any);
    const [error, handlerror] = useState({} as any);
    const [disablebtn, checkdisable] = useState(true);
   const user = useSelector((state:any)=>{return state.User.userList })
    const HandleInput = (event: any) => {
        let name = event.target.name;
        let password = event.target.value;

        getlogincrendetials({ ...loggedin, [name]: password })
        handlerror(name ? { ...error, [name]: validation.inputValidator(event) } : { ...error })

        
    }
    const dispatch= useDispatch();
    useEffect(()=>{
   dispatch(action.usersList());
    },[])
    useEffect(() => {
        let isDisabled = Object.values(loggedin)?.filter((err: any) => err === '').length !== 0;
        if (!isDisabled) { // check for non empty values for errors object
            isDisabled = Object.values(error)?.filter((err: any) => err !== '').length !== 0;
            checkdisable(isDisabled)
        }
        console.log("error", error);
        console.log("logged in", loggedin);

    }, [loggedin, error]);
    const HandleLogin = () => {

        let loginfilter = user.filter((res: any) => {
            return res.email.toLowerCase() === loggedin.email.toLowerCase() && res.username.toLowerCase() === loggedin.password.toLowerCase()
        });
        if (loginfilter.length > 0) {
            loggedin['access']=true;
            localStorage.setItem('login',JSON.stringify(loggedin))
            props.history.push('/dashboard');
        } else {
            window.alert("Invalid Credentials");
        }

    }
    return (

        <div className="container-fluid">
            <div className="row">
            <div className="col-lg-3 col-xl-3 col-md-3 col-sm-12 col-12 text-center company-logo">
               <h5 className=" text-color">Varadhi Smartek</h5>
                </div>
                <div className="col-lg-9 col-xl-9 col-md-9 col-sm-12 col-12">
                   <div className="login-card">
                    <div className="card">
                        <div className="form-align">
                        <div className="form-group">
                            <label className="label-color"> Email</label>
                            <input className="form-control" type="text" name="email" id="email" onChange={HandleInput}  />
                            <small className="text-danger">{error.email}</small>
                        </div>
                        <div className="form-group">
                        <label className="label-color">Enter Password</label>
                            <input className="form-control" type="text" name="password" id="password" onChange={HandleInput} />
                            <small className="text-danger">{error.password}</small>
                        </div>

                        <div className="float-right">
                            <button className="btn-cls" onClick={HandleLogin} disabled={disablebtn}>LOGIN</button>
                        </div>
                    </div>
                    </div>

</div>

                </div>    </div>

        </div>)
}

export default withRouter(Login);