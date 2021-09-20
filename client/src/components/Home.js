import React, { Component } from "react";
import { connect } from 'react-redux';
import CharacterList from './RMCharacters/CharactersList';

class Home extends Component {
  constructor(props){
    super(props)
    if(!props.auth.isAuthenticated){
      this.props.history.push("/login");
    }
  }

  render() {
    return <CharacterList />;
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { })(Home);
