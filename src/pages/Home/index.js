import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Search from '../../components/Search/index';
import AsideNav from '../../components/AsideNav/index';
import Card from '../../components/Card/index';
import * as TagsAction from '../../store/modules/tags/actions';

import api from '../../services/api';

import { Container, Main, Cards } from './styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const response = await api.get('/tags');
    const { addTag } = this.props;
    const { data } = response;
    data.forEach((e) => addTag(e));
  }

  render() {
    return (
      <Container>
        <AsideNav />

        <Main>
          <Search />

          <Cards>
            <Card />
            <Card />
            <Card />
            <Card />
          </Cards>
        </Main>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(TagsAction, dispatch);

export default connect(null, mapDispatchToProps)(Home);
