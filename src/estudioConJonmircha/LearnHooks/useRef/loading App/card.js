import React, { useState, useRef, useEffect } from "react";
import { getPost } from "./helpers/getPost";

const initialPost = {
  id: 1,
  title: "post 1",
  body: "lorem ipsum",
};

export const Card = () => {
  const [post, setPost] = useState(initialPost)
  const [loading, setLoading] = useState(true)
  const isMountedRef = useRef(true)

  const updatePost = () => {
    getPost().then((newPost) => {
      setTimeout(() => {
        if (isMountedRef.current) {
          setPost(newPost)
          setLoading(false)
        }
      }, 2000)      
    })
  }

  useEffect(() => {
    updatePost()
    return () => {
      isMountedRef.current = false
    }
  }, []);

  if (loading) {
    return (
      <div className="">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-semibold mb-2">{post.title}</h1>
      <h2 className="text-1xl font-semibold mb-2 text-start p-2">
        {post.body}
      </h2>
    </div>
  );
};
