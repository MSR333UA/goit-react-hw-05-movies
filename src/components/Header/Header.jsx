import { routes } from 'services/routes';
import { HeaderStyle, NavigationLink } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyle>
      <NavigationLink to={routes.HOME}>Home</NavigationLink>
      <NavigationLink to={routes.MOVIES}>Movies</NavigationLink>
    </HeaderStyle>
  );
};
