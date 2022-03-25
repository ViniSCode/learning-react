import { Card, Container, Text } from './styles';

export function LastTwoPosts() {
  const lastTwoPosts = [
    {
      id: 1,
      title: 'EUA é o melhor país do mundo para se tra...',
      content: 'o ganho médio anual é de 95.879 dólares (cerca de 39 mil reais por mês). Na Suíça, que ficou em segundo lugar, o valor é de 90.462 dólares. No Canadá, terceiro lugar, o salário médio é de 71.193 dólares. A pesquisa, no entanto, não leva em consideração o custo de vida nesses países. Índia, Marrocos e Tunísia são os lugares que pagam menos...',
      image: 'https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 2,
      title: 'Robô pintor de paredes é lançado no Bra...',
      content: 'o “Myro” foi desenvolvido pela indiana “Eternal Robotics” e é uma solução para construtoras. O equipamento pinta até 92 m2 por hora, reduzindo em até 70% os custos totais com mão de obra de pintura. O robô utiliza sensores para detectar janelas, portas – pintando ao redor – e evitar obstáculos no seu caminho. As informações são do....',
      image: 'https://images.pexels.com/photos/1258865/pexels-photo-1258865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
  ]

  return (
    <Container>
      {lastTwoPosts.map(post => {
        return(
          <Card key={post.id}>
            <img src={post.image} />
            <Text>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </Text>
          </Card>)
      })}
    </Container>
  );
}