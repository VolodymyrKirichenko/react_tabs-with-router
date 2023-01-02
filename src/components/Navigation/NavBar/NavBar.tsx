import { FC } from 'react';
import { NavItem } from '../NavItem/NavItem';

export const NavBar: FC = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavItem path="/" text="Home" />
          <NavItem path="/tabs" text="Tabs" />
        </div>
      </div>
    </nav>
  );
};
