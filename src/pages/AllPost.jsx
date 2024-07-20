import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import { set } from "react-hook-form";

const AllPost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService
      .getPosts([])
      .then((post) => {
        if (post) {
          setPosts(post.documents);
        }
      })
      .catch(() => {
        console.log("error while fetching all post!!!!");
      });
  }, []);
  return <Container>
    <div className="flex flex-wrap">
        {posts.map((post)=>(
            <div className="w-1/4 p-2" key={post.slug}>
                <PostCard {...post}/>
            </div>
        ))}
    </div>
  </Container>;
};

export default AllPost;
