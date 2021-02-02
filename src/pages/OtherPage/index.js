import { Link } from 'react-router-dom';

function OtherPage() {
  return (
    <>
      <h1>Other Page</h1>
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

export default OtherPage;
