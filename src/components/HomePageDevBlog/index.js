import { Link } from 'react-router-dom';
import heroImg from '../../assets/hero.svg';
import { AllPostsButton } from './../AllPostsButton/index';
import { Card, Container, Text } from './styles';

export function HomePageDevBlog() {
  return (
    <Container>
      <Card>
        <Text>
          <h2>DevBlog</h2>
          <h2>All in one place</h2>
          <ul>
            <li>Learn something.</li>
            <li>Teach something.</li>
            <li>Share something.</li>
            <li>Create something.</li>
            <li>Enjoy All for free.</li>
          </ul>
          <Link to="/posts">
            <AllPostsButton />
          </Link>
        </Text>
        <img src={heroImg} />
      </Card>
    </Container>
  );
}