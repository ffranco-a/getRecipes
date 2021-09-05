import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRecipeById } from '../actions';

class Detail extends Component {

  componentDidMount() {
    this.props.getRecipeById(this.props.match.params.id); // no está funcionando
  }

  render() {
    return <h3>Details of {this.props.details.title}</h3>;
  }
}

const mapStateToProps = state => {
  return {
    details: state.details,
  };
};

export default connect(mapStateToProps, { getRecipeById })(Detail);
