import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { Container, Icons, Text } from './styles';

export function Footer () {
  return(
    <Container>
    <Icons>
      <FiGithub className="social-icons" />
      <FiLinkedin className="social-icons" />
      <FiInstagram className="social-icons" />
    </Icons>
    <Text>
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/contact">Contact</Link>
    </Text>
    <a href="https://www.github.com/viniscode" target="_blank">© created by viniscode - 2022 </a>
  </Container>
  );
}