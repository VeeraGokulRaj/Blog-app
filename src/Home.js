import { useState} from "react";
import BlogList from "./BlogList"
import useFetch from "./useFetch"

const Home=()=>{
    // Example of UseState
    const[name,setName]=useState("Shree");
    const[age,setAge]=useState(22);

    //Example of the function with argument and without argument 
    function handelClick(name,age){
        setName(name);
        setAge(age);
    }

    var test="All Blogs!"

    const {data : blogs,isLoading,error} = useFetch("http://localhost:8000/blogs"); //setting the Variable name blogs to the data

    return(
        <div className="home">

            <h1 style={{color: '#f1356d'}}>This is Home Content</h1>
            <p>This is {name} and the age is {age}</p>
            <button onClick={()=>handelClick("Veera",21)}>Click Me</button>
            <br/><br/>

            {error && <div>Error in connecting to Network!</div>}
            {isLoading && <div>Loading...</div> }  {/*Setting a loading msg coz realtime API take time to load data*/}
            {blogs && <BlogList blogs={blogs} test={test}/>}  {/*PROPS*/}
        </div>
    );
}
export default Home;