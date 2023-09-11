import React , {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import Header from './Header';
function Register(){
    const navigate =useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            navigate('/add');
        }
    },[])
    const [name,setName] = useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    async function signUp() {
        let item = {name, password, email}
        let result = await fetch("http://localhost:8000/api/register", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
        result = await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        navigate("/add")
    }
    return(
        <>
        <Header />
        <div className="col-sm-6 offset-sm-3">
            <h1>Register Now</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Name"></input>
            <br/>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email"></input>
            <br/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password"></input>
            <br/>
            <button type="submit" onClick={signUp} className="btn btn-primary">Sign Up</button>
        </div>
        </>
    )
}

export default Register