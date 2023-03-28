import React,{useState, useEffect} from 'react'
import Registration from './Registration.js';
import { Link } from 'react-router-dom';
import './login.css';


export default function Login() {
    
        const data = { email: "",userName:"", password: "" }
    
        const [inputData, setInputData] = useState(data);
        const [flag, setFlag] = useState(false);
        
        //re-render for alert
        useEffect(() =>{
            console.log('Registerd')
        },[flag])
    
        function handleData(e) {
            setInputData({ ...setInputData, [e.target.value]: e.target.value })
            console.log(inputData);
        }
    
        function handleSubmit(e) {
            e.preventDefault();   //used to avoid bydefault clearation of data
            if (!inputData.email || !inputData.userName || !inputData.password ) {
                alert("All fiels are maditory");
            }
            else {
                setFlag(true);
            }
        }
        return (
            <>
            <prev>{(flag) ? <h2 className='ui-define' >''{inputData.email} ,Signed Successfully'</h2> : " "}</prev>
          
                <form className='container' onSubmit={handleSubmit}>
    
                    <div className='Header'>
                        <h1>Login</h1>
                    </div>

    
                    <div className='inputFiled'>
                        <input type='text' placeholder='Enter your Email' name='email' value={inputData.email}
                         onChange={handleData}></input>
                    </div>

                    
    
                    <div className='inputFiled'>
                        <input type='Password' placeholder='Enter your password' name='password' value={inputData.password} 
                        onChange={handleData}></input>
                    </div>
    
                    {/* <input type='checkbox'>remember me</input> */}
                    
                            <div className='login-btn'>
                                <Link to='/home'>
                                    <button type="submit">Login</button>
                                </Link>
                            </div>
                           
                           <p>Don't have an account?</p>
                            <div className='login-btn'>
                                <Link to='/Registration'>
                                    <button type="submit">Register</button>
                                </Link>
                            </div>
            
                </form>
            </>
        );
    }