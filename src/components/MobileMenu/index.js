import { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/logo.svg';
// import { MenuData } from '../../MenuData';
import { Container, Logo, NavMenu } from './styles';

export function MobileMenu({isAuth, menuVisible, setMenuVisible}) {
    
  const MenuData = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'Posts',
      path: '/posts'
    },
    {
      title: 'Create Post',
      path: '/create'
    },
    {
      title: 'Profile',
      path: '/profile'
    }
  ]


  useEffect(() => {
    document.body.style.overflowY = menuVisible ? 'hidden' : 'auto';
  }, [menuVisible]);

  return isAuth ? 
  (
    <Container isMenuVisible={menuVisible}>
      <IoClose onClick={() => setMenuVisible(false)} />  
        <Logo>
          <Link to="/">
            <img src={LogoImg} alt="Logo devblog" />
          </Link>
        </Logo>
      <nav>

        <NavMenu>
          {
            MenuData.map(navLink => {
              return (
                <Link 
                  key={navLink.title} 
                  to={navLink.path}
                  onClick={() => setMenuVisible(false)}
                >
                    {navLink.title}
                </Link>
              )
            })
          }
        </NavMenu>
      </nav>
    </Container>
  ) :
  (
    <Container isMenuVisible={menuVisible}>
      <IoClose onClick={() => setMenuVisible(false)} />  
      <Logo>
        <Link to="/">
          <img src={LogoImg} alt="Logo devblog" />
        </Link>
      </Logo>
      <nav>

        <NavMenu>
          {
            MenuData.map(navLink => {
              return (
                <Link 
                key={navLink.title} 
                to={navLink.path}
                onClick={() => setMenuVisible(false)}
                >
                  {navLink.title}
                </Link>
              )
            })
          }
        </NavMenu>
      </nav>
    </Container>
  );
}
