import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{padding:"20px"}}>

      <h1 style={{fontSize:"50px"}}>Home</h1>
      <h2 style={{fontSize:"35px"}}>Home</h2>
      <p style={{fontSize:"22px"}}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, animi et illum accusantium iure ad neque deleniti amet numquam assumenda ducimus quaerat porro accusamus laborum obcaecati doloribus in voluptates commodi.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, animi et illum accusantium iure ad neque deleniti amet numquam assumenda ducimus quaerat porro accusamus laborum obcaecati doloribus in voluptates commodi.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, animi et illum accusantium iure ad neque deleniti amet numquam assumenda ducimus quaerat porro accusamus laborum obcaecati doloribus in voluptates commodi.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, animi et illum accusantium iure ad neque deleniti amet numquam assumenda ducimus quaerat porro accusamus laborum obcaecati doloribus in voluptates commodi.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, animi et illum accusantium iure ad neque deleniti amet numquam assumenda ducimus quaerat porro accusamus laborum obcaecati doloribus in voluptates commodi.
      </p>

      <Link
        to="/other-page"
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
        Go to Other Page
      </Link>

    </div>
  );
}

export default Home;
