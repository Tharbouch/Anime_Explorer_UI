import { Link } from "react-router-dom"

const NotFoud = () => {
    return (
        <article className="not-found" >
            <h1>Oops!</h1>
            <p>Page Not Found</p>
            <div >
                <Link to="/">Visit Our Homepage</Link>
            </div>
        </article>
    )
}

export default NotFoud