import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { auth, db } from '../firebase-config';


const Container = styled.div`
  max-width: 500px;
  margin: 3rem auto 2rem auto;
  background-color: #fff;
  padding: 2rem;
  border-radius: 5px;
  border: 1px solid #aaa;
  box-shadow: 1px 2px 20px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow .2s ease;

  &:hover{
    box-shadow: none;
  }
`;

const CreatePostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 2rem;
  }
`;

const Input = styled.div`
  width: 100%;

  input {
    width: 100%;
    margin: 1rem 0 2rem 0;
    padding: 0.8rem 2rem;
    border-radius: 5px;
    border: 1px solid #aaa;

    &:focus {
      outline: none;
    }
  }

  label {
    font-size: 1.4rem;
  }

  textarea {
    border: 1px solid #aaa;
    margin: 1rem 0 0 0;
    width: 100%;
    min-width: 100%;
    min-height: 180px;
    padding: 2rem;
    resize: none;
    border-radius: 5px;

    &:focus {
      outline: none;
    }
  }
`;

const CreatePostButton = styled.button`
  background-color: var(--primary);
  border-radius: 5px;
  color: white;
  border: none;
  transition: filter .3s ease;
  
  cursor: pointer;
  
  margin-top: 1rem;
  padding: 0.8rem 2rem;
  width: 100%;

  &:hover{
    filter: brightness(0.9);
  }
`
export function CreatePost() {
  let navigate = useNavigate();

  const [ title, setTitle ] = useState("");
  const [ postText, setPostText ] = useState("");

  const postsCollectionRef = collection(db, "posts");
  const handleCreateNewPost = async () => {
    await addDoc(postsCollectionRef, 
      {
        title, 
        postText, 
        author: {
          name: auth.currentUser.displayName, 
          id: auth.currentUser.uid
        }
      }
      );
      navigate("/posts");
  }

  return (
    <Container>
      <CreatePostContainer>
        <h2>Create A Post</h2>
        <Input>
          <label>Title: </label>
          <input type="text" placeholder="Title..." onChange={(event)=> setTitle(event.target.value)}/>
        </Input>
        <Input>
          <label>Post: </label>
          <textarea placeholder="Post..." onChange={(event)=> setPostText(event.target.value)}/>
        </Input>
        <CreatePostButton onClick={handleCreateNewPost}>
          Submit Post
        </CreatePostButton>
      </CreatePostContainer>
    </Container>
  );
}
