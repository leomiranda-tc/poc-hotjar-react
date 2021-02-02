import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {hotjarInitialization} from '../../utils/hotjar';

function OtherPage() {

  useEffect(() => {
    hotjarInitialization();
  });

  return (
    <div style={{padding:"20px"}}>
      <h1>Other Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus tempore dolores sed! Asperiores officia saepe illo dolorum at eveniet modi ad architecto accusamus, omnis quaerat. Ratione autem laborum eligendi! Corrupti!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus tempore dolores sed! Asperiores officia saepe illo dolorum at eveniet modi ad architecto accusamus, omnis quaerat. Ratione autem laborum eligendi! Corrupti!
      </p>
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
    </div>
  );
}

export default OtherPage;
