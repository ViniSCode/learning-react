import { FiArrowRightCircle } from 'react-icons/fi';
import { Container } from './styles';

export function AllPostsButton() {
  return (
    <Container>
      All Posts
      <FiArrowRightCircle className='arrow-icon'/>
    </Container>
  );
}

