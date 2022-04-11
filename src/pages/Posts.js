
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '../firebase-config';
import { Avatar } from './../components/Avatar/index';
import { ReadMoreButton } from './../components/ReadMoreButton/index';

const Container = styled.div`
  min-height: 100vh;
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

const Card = styled.div`
  border: 1px solid #B0B0B0;
  border-radius: 5px;
  padding: 3.5rem 3.75rem;
  width: 80%;

  & {
    margin-bottom: 2rem;
  }
  
  &:last-child {
    margin-bottom: 0;
  }

    
  .divider {
    margin-top: 2.60rem;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 1px;
    background: #DCDCDC;
  }

  
  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: 1.688rem;
  }
  
  p.postText{
    font-size: 1rem;
    margin-top: 1rem;
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
          console.log(post.id)
          return(
            <Card key={post.id}>
              <Avatar post={post.author}/>
              <h2>{post.title}</h2>
              <p className="postText">{post.postText}</p>
              <div className="divider" />
              <ReadMoreButton id={post.id}/>
            </Card>
          )
        })
      )}
    </Container>
  )
}