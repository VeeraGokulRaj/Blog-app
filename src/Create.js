import { useState } from "react";
import useFetch from './useFetch';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = ()=>{
    const {data,isLoading,error} =useFetch('http://localhost:8000/blogs')
    const [title,setTitle] = useState('');
    const [body,setBoy] = useState('');
    const [author,setAuthor] = useState('');
    const history = useHistory();

    function handelSubmit(e){

        e.preventDefault();     //To prevent auto re-fresh on submiting the form
        const blog={title, author,body};
        
        fetch('http://localhost:8000/blogs',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            alert("New Blog Added!")
            history.push('/')
        })
    }

    return(
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handelSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e)=>setBoy(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <input 
                    required
                    type="text"
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                />
                <button>
                    Add Blog
                </button>
            </form>
        </div>
    );
}
export default Create;