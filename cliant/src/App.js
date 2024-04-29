import logo from './logo.svg';
import useState, { useEffect } from 'react'
import axios from 'axios'
import './App.css';

function App() {

  const {allproduct,setAllproduct}=useState([])
  console.log(allproduct);

  const getData=async()=>{
    try{
      const response=await axios.get('https://fakestoreapi.com/products')
      // if(response?.data.length){
      //   setAllproduct(response.data)
      // }
      setAllproduct(response.data)

    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="App">
      <h1>All Product</h1>

    </div>
  );
}

export default App;
