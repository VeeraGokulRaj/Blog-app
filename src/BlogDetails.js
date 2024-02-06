import { useParams } from "react-router-dom";
import useFetch from'./useFetch';
import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const BlogDetails = () =>{
  const{id} =useParams();
  const history=useHistory();
  const {data,isLoading,error} =useFetch("http://localhost:8000/blogs");
  const [selectedBlog,setSelectedBlog]= useState('');

  useEffect(() => {
    if (data) {
      const newBlog = data.find((blog) => blog.id.toString() === id.toString());
      setSelectedBlog(newBlog);
    }
  }, [data, id]);

  function handelDelet(){
    fetch("http://localhost:8000/blogs/"+id,{
      method:"DELETE",
    }).then(()=>{
      alert("Blog Deleted!")
      history.push("/")
    })
  }
  // const blog=data[id-1];
    return (
        <div className="blog-details">
          {(isLoading ) && <p>Loading...</p>}
          {selectedBlog  && 
            <article>
              <h2>{selectedBlog.title}</h2>
              <p>Written by - {selectedBlog.author}</p>
              <div>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{selectedBlog.body}</p>
                <button onClick={handelDelet}>Delete</button>
              </div>
            </article>
          }
        </div>
      );
      
} 
export default BlogDetails;