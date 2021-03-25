import React,{useState,useEffect}from "react";
import "./style.css";
//https://api.github.com/users/KrapaGoutam
export default function App({login}) {
  const [data, setData] = useState(null);
      useEffect(() =>{
      fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData);
    }, [] );

      

if(data){
  return(
    <div>
    //{JSON.stringify(data)}
    <h1>{data.login}</h1>
    <img alt={data.login} src={data.avatar_url}/>
    </div>
  )
}
return(
  <div>
  no user available 
  </div>
)
}
