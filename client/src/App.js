import React,{useEffect,useState} from 'react'

const App = () => {

  const [data,setData] = useState([]);

  const url = "";

  const loadData = ()=>{

  }

  useEffect(()=>{
    loadData();
  },[]);


  return (
    <React.Fragment>
      <h1>Data With Pagination</h1>
    </React.Fragment>
  )
}

export default App