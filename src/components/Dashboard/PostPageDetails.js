import React, { useEffect, useState } from "react";
import withRouter from "../../utils/withRouter";
import Header from "./Header";

function PostPageDetails(props) {
  const [post, setPost] = useState([
    {
      id: 1,
      title: "Social 1",
      description: "soical description 1",
    },
    {
      id: 2,
      title: "Social 2",
      description: "soical description 2",
    },
    {
      id: 3,
      title: "Social 3",
      description: "soical description 3",
    },
  ]);

  const [result, setResult] = useState({
    id: 0,
    title: "",
    description: "",
  });

  useEffect(() => {
    post.filter((e) => {
      if (e.id == props.router.params.id) {
        setResult({
          ...result,
          id: e.id,
          title: e.title,
          description: e.description,
        });
      }
    });
  });
  return (
    <div>
      <Header />
      <div className="post">
        {result && (
          <div className="post-ele">
            <div>{result.title}</div>
            <div>{result.description}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default withRouter(PostPageDetails);
