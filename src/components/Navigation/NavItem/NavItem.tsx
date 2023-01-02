import { FC } from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

interface Props {
  path: string;
  text: string;
}

export const NavItem: FC<Props> = (props) => {
  const { path, text } = props;

  return (
    <NavLink
      to={path}
      className={({ isActive }) => (
        cn('navbar-item', {
          'is-active': isActive,
        }))}
    >
      {text}
    </NavLink>
  );
};
