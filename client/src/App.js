import React,{useEffect,useState} from 'react'

const App = () => {

  const [data,setData] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/posts";

  const loadData = ()=>{

    fetch(url,{
      method: "GET"
    }).then(res=>res.json())
    .then(result=>{

      if(result){
        setData(result);
        console.log(result);
      }

    }).catch(err=>{
      console.log(err);
    })

  }

  useEffect(()=>{
    loadData();
  },[]);


  return (
    <React.Fragment>
      <h1>Data With Pagination</h1>
      <h1>{JSON.stringify(data)}</h1>
    </React.Fragment>
  )
}

export default App