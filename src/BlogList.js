import {Link} from "react-router-dom";
const BlogList = ({blogs,test})=>{
    // const blogs=props.blogs;
    // const test=props.test;
    return(
        <div className="blog-list">
            <h1>{test}</h1>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>{blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
export default BlogList