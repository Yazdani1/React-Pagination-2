import React, { useEffect, useState } from "react";
import Posts from "./Posts";
import Pagination from "./Pagination";

const PaginationIndex = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    //pagination
  
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(10);
  
    const url = "https://jsonplaceholder.typicode.com/posts";
  
    const loadData = () => {
      fetch(url, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result) {
            setData(result);
            setLoading(false);
            console.log(result);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    useEffect(() => {
      loadData();
    }, []);
  
    // if (loading) {
    //   return (
    //     <div class="text-center my-25">
    //       <h1>Loading...</h1>
    //     </div>
    //   );
    // }
  
    //To get the last posts index position
  
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  
    //to change page
  
    const paginate =(pageNumber)=>{
      setCurrentPage(pageNumber)
    }
  
    return (
      <React.Fragment>
        <h1>Data With Pagination</h1>
        <Posts posts={currentPosts} />
        <Pagination 
        postsPerPage={postsPerPage} 
        totalPosts={data.length} 
        paginateClick={paginate}
        />
      </React.Fragment>
    );
}

export default PaginationIndex