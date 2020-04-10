import React from 'react';
import Axios from 'axios';
import Display from './Display'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      players: []
    }
  }

  getPlayerData = () => {
    Axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        this.setState({players: res.data})
      })
      .catch(console.log);
  }

  componentDidMount() {
    this.getPlayerData()
  }

  render() {
    return (
      <div>
        {this.state.players && <Display players={this.state.players}/>}
      </div>
    );
  }
}

export default App;
