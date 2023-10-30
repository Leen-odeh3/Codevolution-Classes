import  { useEffect, useState } from "react";
import axios from "axios";

const FetchApi = () => {
  const [users, setUsers] = useState({});
  const [id,setid]=useState(0);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, [id]); // Empty dependency array ensures useEffect runs only once

  return (
    <div>
     
      <input type="text" onChange={(e)=>setid(e.target.value)}/>
     
     <p>{users.name}</p> 
    </div>
  );
};

export default FetchApi;
