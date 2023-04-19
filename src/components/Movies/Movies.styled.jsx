import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MoviesList = styled.ul`
  li {
    padding: 4px 0;
  }
`;

export const Link = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  color: #000000;
  font-weight: 500;

  &:hover,
  &:focus {
    color: #c02b51;
  }
`;
