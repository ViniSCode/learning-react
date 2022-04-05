
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '../firebase-config';

const Container = styled.div`
  min-height: 100vh;
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

const Loading = styled.div`
  .spinner-1:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    height: 60px;
    width: 60px;
    margin-top: -30px;
    margin-left: -30px;
    border-radius: 50%;
    border: 3px solid lightgrey;
    border-top-color: coral;
    animation: spinner .7s linear infinite;
   }

   @keyframes spinner {
     to {
       transform: rotate(360deg);
      }
   }
`

export function Posts() {
  const [postLists, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      try {
        setIsLoading(true);
        const data = await getDocs(postsCollectionRef);
        setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (e) {
        console.log(e)
      }
      setIsLoading(false);
    };

    getPosts();
  }, []);
  
  return (
    <Container>
      {}
      {
      isLoading ? 
      (<Loading>
        <div className="spinner-1"></div>
      </Loading>) : 
      (
        postLists.map(post => {
          return(
            <div key={post.id}>
              <h2 >{post.title}</h2>
              <p>{post.postText}</p>
            </div>
          )
        })
      )}
    </Container>
  )
}