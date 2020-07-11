import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Search from '../../components/Search/index';
import AsideNav from '../../components/AsideNav/index';
import Card from '../../components/Card/index';
import { addTagApi } from '../../store/modules/tags/actions';
import { addCardApi } from '../../store/modules/cards/actions';
import api from '../../services/api';

import { Container, Main, Cards, Scroll } from './styles';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getTags() {
      const response = await api.get('/tags');
      const { data } = response;
      dispatch(addTagApi(data));
    }
    getTags();
  }, []);

  useEffect(() => {
    async function getCards() {
      const response = await api.get('/cards');
      const { data } = response;
      dispatch(addCardApi(data));
    }
    getCards();
  }, []);

  return (
    <Container>
      <AsideNav />

      <Main>
        <Search />
        <Scroll>
          <Cards>
            <Card />
          </Cards>
        </Scroll>
      </Main>
    </Container>
  );
}
