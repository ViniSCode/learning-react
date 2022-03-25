import { Container } from './styles';

export function Avatar(props) {
  console.log(props);
  const post = props.post;

  return (
    <Container>
      <img src={post.user.image} alt="" />
      <p>{post.user.name}</p>
    </Container>
  )
}