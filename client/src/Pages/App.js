import { useState, useEffect } from 'react';
import { Submit, showUsers, delUser } from '../Actions';
import { Link } from 'react-router-dom';
import '../App.css';

function App() {


  const [del, setDel] = useState("")
  useEffect(() => {
    shwFetchUsrs()
  }, [del],[])

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })
  function inputValues(e) {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const [shwUsers, setShwUsrs] = useState([])
  ///////
  const fetchUsers = async () => {
    let response = await showUsers()
    setShwUsrs(response.data)
  }
  const shwFetchUsrs = async () => {
    return await fetchUsers()
  }
  ///////
  const submit = async () => {
    setDel(Math.random()*1000)
    await Submit(data)
  }
  const deleteUser = async (id) => {
    setDel(id)
    await delUser(id)
  }
  return (
    <>
      <div>
        <label>Name</label>
        <input onChange={(e) => inputValues(e)} name="name" value={data.name}/>
        <label>Email</label>
        <input onChange={(e) => inputValues(e)} name="email" value={data.email} />
        <label>Password</label>
        <input onChange={(e) => inputValues(e)} name="password" value={data.password} />
        <button onClick={() => submit()}>Submit</button>
      </div>
      <div>
        <button onClick={() => shwFetchUsrs()}>Show All</button>
        {
          shwUsers.length > 0 ? shwUsers.map((shwUsers, i) => {
            return (
              <>
                <li><p>{shwUsers.name}</p>
                  <Link to={`/edit/${shwUsers._id}`}><button>Edit</button></Link>
                  <button onClick={() => deleteUser(shwUsers._id)}>Del</button></li>
              </>
            )
          }) : <h1>NO USERS IN DB</h1>
        }
      </div>
    </>
  );
}

export default App;
