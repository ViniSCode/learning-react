
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '../firebase-config';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
  }
  
  p {
    font-size: 1rem;
  }
`

export function Posts() {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);
  return <h1>{postLists.map(post => {
    return(
      <Container key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.postText}</p>
      </Container>
    )
  })}</h1>;
}