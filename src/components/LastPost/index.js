import { Avatar } from '../Avatar/index';
import { Container, RightText } from './../LastPost/styles';
import { Left } from './styles';

const post = {
  createdAt: 'March 24, 2022',
  title: 'Marca de cerveja consegue injetar anúncio em sonho com sucesso.',
  content: 'A norte-americana Bobbi Gould afirma que a cervejaria Molson Coors pagou 1.000 dólares a ela, seu namorado e uma dezena de outras pessoas para realizar o experimento – assistir a uma produção audiovisual da marca até adormecer. Gould afirma que teve diversos “sonhos estranhos” durante o teste – em um deles, ela voava em um avião e jogava latas de cerveja para fora, com pessoas a aplaudindo. Além da Molson Coors, Xbox e Burger King também estão desenvolvendo tecnologias similares para injetar anúncios em sonhos. As informações são do site Futurism...',
  user: {
    name: 'Vinícius Rodrigues',
    image: 'https://avatars.githubusercontent.com/u/72752044?v=4',
  }
}

export function LastPost() {
  return (
    <Container>
      <Left>
        <img src="https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
      </Left>
      <RightText>
        <small>March 24, 2022</small>
        <h2>Marca de cerveja consegue injetar anúncio em sonho com sucesso.</h2>
        <p>A norte-americana Bobbi Gould afirma que a cervejaria Molson Coors pagou 1.000 dólares a ela, seu namorado e uma dezena de outras pessoas para realizar o experimento – assistir a uma produção audiovisual da marca até adormecer. Gould afirma que teve diversos “sonhos estranhos” durante o teste – em um deles, ela voava em um avião e jogava latas de cerveja para fora, com pessoas a aplaudindo. Além da Molson Coors, Xbox e Burger King também estão desenvolvendo tecnologias similares para injetar anúncios em sonhos. As informações são do site Futurism...</p>
        <Avatar post={post}/>
      </RightText>
    </Container>
  )
}