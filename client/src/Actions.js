import axios from 'axios'

const URL="http://localhost:5000"
export const Submit=async (data)=>{
    try{
       return await axios.post(`${URL}/`,data)
    }catch(error){
       console.log(error, 'front')
    }
}

export const showUsers=async ()=>{
   try{
      return await axios.get(`${URL}/`)
   }catch(error){
      console.log(error, 'not fetched (Actions)')
   }
}

export const editUser=async (id)=>{
   console.log(id)
   try{
      return await axios.get(`${URL}/edit/${id}`)
   }catch(error){
      console.log(error, 'not fetched (Actions)')
   }
}

export const submitEditUser=async (editData,id)=>{
   try{
      return await axios.put(`${URL}/edit/${id}`, editData)
   }catch(error){
      console.log(error, 'not fetched (Actions)')
   }
}

export const delUser=async (id)=>{
   console.log(id)
   try{
      return await axios.delete(`${URL}/${id}`)
   }catch(error){
      console.log(error, 'not Deleted..')
   }
}