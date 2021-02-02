import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>Not found 404</h1>
      <Link
          to="/"
          style={{
            fontSize:"22px",
            padding:"20px 30px",
            background:"red",
            color:"#FFF",
            border:"none",
            borderRadius:"50px",
            textDecoration:"none",
            marginTop:"20px",
            display:"inline-block"
          }}
        >
          Go to Home
        </Link>
    </>
  );
}

export default NotFound;
