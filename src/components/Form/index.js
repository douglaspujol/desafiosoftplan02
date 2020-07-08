import React, { Component } from 'react';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import { Container } from './styles';

import * as TagsAction from '../../store/modules/tags/actions'
import { bindActionCreators } from 'redux';


import { connect } from 'react-redux'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      valueInput: '',
    };
  }

  handleInputChange = e => {
    this.setState({ valueInput: e.target.value });
  }


  handleSubmit = async e => {
    e.preventDefault();
    const { addTag } = this.props;
    const newTag = {
      id: this.state.valueInput,
      name: this.state.valueInput,
      background: '#0078d7'
    }


    addTag(newTag);
    this.setState({ valueInput: '' });
  }

  focusFalse = (e) => {
    this.setState({ focus: false });
  }
  focusTrue = (e) => {
    this.setState({ focus: true });
  }


  render() {
    const { focus, valueInput } = this.state;
    return (
      <Container isFocus={focus} onSubmit={this.handleSubmit}>
        <LabelOutlinedIcon />
        <input
          value={valueInput}
          onChange={this.handleInputChange}
          onFocus={() => this.focusTrue()}
          onBlur={() => this.focusFalse()}
          type="text"
          placeholder="Criar Etiqueta" />

        <button type="submit">
          <CheckOutlinedIcon />
        </button>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(TagsAction, dispatch)

export default connect(null, mapDispatchToProps)(Form);
