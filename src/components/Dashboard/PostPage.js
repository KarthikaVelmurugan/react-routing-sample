import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import withRouter from "../../utils/withRouter";
import Header from "./Header";

function PostPage(props){
  const [post,setPost] = useState([{
    id:1,
    title:"Social",
    description:"sdflshdflkdflksdfklfhldfslkdfsdlkfdsklfldsk"

  },
  {
    id:2,
    title:"Social",
    description:"sdflshdflkdflksdfklfhldfslkdfsdlkfdsklfldsk"

  },{
    id:3,
    title:"Social",
    description:"sdflshdflkdflksdfklfhldfslkdfsdlkfdsklfldsk"

  }])
  let navigate = useNavigate()
  return (
    <div>
      <Header/>
      <div className="post">

      { post.map((element,index)=>(
          <div className="post-ele" onClick={()=>{
            navigate(`/post/${element.id}`)
          }}>POST  {element.id}</div>

      ))}
            </div>


  </div>  )
}

export default withRouter(PostPage);
