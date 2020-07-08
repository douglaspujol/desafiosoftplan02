import React from 'react';
import { Link } from 'react-router-dom';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import { Navigation, Container } from './styles';

export default function Header() {
  return (
    <Container>
      <Navigation>
        <Link to="/">
          <strong>APP</strong>
        </Link>

        <Link to="/">
          <PermIdentityOutlinedIcon />
        </Link>
      </Navigation>
    </Container>
  );
}
