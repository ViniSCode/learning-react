import { Link } from 'react-router-dom';
import { Avatar } from '../Avatar/index';
import { Divider } from './../Divider/index';
import { Card, Container, RightText } from './../LastPost/styles';
import { ReadMoreButton } from './../ReadMoreButton/index';

const post = {
  createdAt: 'March 24, 2022',
  title: 'EUA é o melhor país do mundo para se trabalhar....',
  content: 'A norte-americana Bobbi Gould afirma que a cervejaria Molson Coors pagou 1.000 dólares a ela, seu namorado e uma dezena de outras pessoas para realizar o experimento – assistir a uma produção audiovisual da marca até adormecer. Gould afirma que teve diversos “sonhos estranhos” durante o teste – em um deles, ela voava em um avião e jogava latas de cerveja para fora, com pessoas a aplaudindo. Além da Molson Coors, Xbox e Burger King também estão desenvolvendo tecnologias similares para injetar anúncios em sonhos. As informações são do site Futurism...',
  user: {
    name: 'Vinícius Rodrigues',
    image: 'https://avatars.githubusercontent.com/u/72752044?v=4',
  }
}

export function LastPost() {
  return (
    <Container>
      <h2>Last Post</h2>
      <Card>
        <RightText>
          <Avatar post={post}/>
          <h2>EUA é o melhor país do mundo para se trabalhar...</h2>
          <p>A norte-americana Bobbi Gould afirma que a cervejaria Molson Coors pagou 1.000 dólares a ela, seu namorado e uma dezena de outras pessoas para realizar o experimento – assistir a uma produção audiovisual da marca até adormecer. Gould afirma que teve diversos “sonhos estranhos” durante o teste – em um deles, ela voava em um avião e jogava latas de cerveja para fora, com pessoas a aplaudindo. Além da Molson Coors, Xbox e Burger King também estão desenvolvendo tecnologias similares para injetar anúncios em sonhos. As informações são do site Futurism...</p>
          <Divider />
          <Link to="/posts">
            <ReadMoreButton />
          </Link>
        </RightText>
      </Card>
    </Container>
  )
}