import { Link } from "react-router-dom/cjs/react-router-dom.min"
const pageNotFound =()=>{
    return(
        <div className="not-found">
            <h2>Page not Found</h2>
            <Link to="/">Click to Home page</Link>
        </div>
    )
}
export default pageNotFound;