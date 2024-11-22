import React, { useState, useEffect } from 'react'
import ERR from './ERR';
import { editUser,submitEditUser } from '../Actions';
import { useParams, useHistory,Redirect} from 'react-router-dom';

const Edit = () => {

  const history=useHistory()
  const id=useParams()
  useEffect(() => {
     getUsr()
  },[])

  const getUsr=async ()=>{
    const res= await editUser(id.id)
    await setData(res.data[0])
  }

  // const getUser=async()=>{
  //     return await getUsr()
  // }
  
  const[data,setData]=useState({
    name:"",
    email:"",
    password:""
  })
  function inputValues(e){
    setData({...data,[e.target.name]:e.target.value})
  }
  
  const Submit= async()=>{
    history.push('/')
     await submitEditUser(data,id.id)
  }

  return (
       <>
      <h1>Page 2</h1>
      <div>
        <label>Name</label>
        <input onChange={(e) => inputValues(e)} name="name" defaultValue={data.name}/>
        <label>Email</label>
        <input onChange={(e) => inputValues(e)} name="email" value={data.email}/>
        <label>Password</label>
        <input onChange={(e) => inputValues(e)} name="password" defaultValue={data.password}/>
        <button onClick={() => Submit()}>Edit User</button>
      </div>
    </>
  )
}

export default Edit