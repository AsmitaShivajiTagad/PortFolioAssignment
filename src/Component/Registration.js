import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUpForm() {
    const data = { FirstName: "", LastName: "", email: "", password: "" }

    const [inputData, setInputData] = useState(data);
    const [flag, setFlag] = useState(false);

    //re-render for alert
    useEffect(() => {
        console.log('Registerd')
    }, [flag])

    function handleData(e) {
        setInputData({ ...setInputData, [e.target.value]: e.target.value })
        console.log(inputData);
    }

    function handleSubmit(e) {
        e.preventDefault();   //used to avoid bydefault clearation of data
        if (!inputData.email || !inputData.userName || !inputData.password) {
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
                    <h1>Register</h1>
                </div>



                <div className='inputFiled'>
                    <input type='text' placeholder='Email' name='Email' value={inputData.LastName}
                        onChange={handleData}></input>
                </div>

                <div className='inputFiled'>
                    <input type='text' placeholder='UserName' name='userName' value={inputData.userName}
                        onChange={handleData}></input>
                </div>

                <div className='inputFiled'>
                    <input type='Password' placeholder=' password' name='password' value={inputData.password}
                        onChange={handleData}></input>
                </div>


                <div className='login-btn'>
                    <Link to='/Login'>
                        <button type="submit">Register</button>
                    </Link>
                </div>


            </form>
        </>
    );
}