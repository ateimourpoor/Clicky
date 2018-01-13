
import React, { Component } from 'react';
import Nav from './components/Nav';
import Card from './components/Card';
import {Col, Container, Row} from "./components/Grid";
import players from './players.json';
import './App.css';
const shuffle = require('shuffle-array');

class App extends Component {

  state = {

    players,
    subtitle: 'Click an image to begin!',
    score: 0,
    topScore: 0,
    pickArray: []
  };

  handlePick = id => {

    if (this.state.pickArray.indexOf(id) === -1) {

      const pickArray = this.state.pickArray;
      pickArray.push(id);

      this.setState(() => ({ subtitle: 'You Guessed Correctly' }));
      this.setState(() => ({ pickArray: pickArray }));

      if (this.state.topScore <= this.state.score) {

        this.setState(() => ({ score: this.state.score + 1 }));
        this.setState({ topScore: this.state.topScore + 1 });
      } 
      else {

        this.setState(() => ({ score: this.state.score + 1 }));
      }
    } 
    else {

      this.setState({ score: 0 });
      this.setState({ subtitle: 'You Guessed Incorrectly' });
      this.setState(() => ({ pickArray: [] }));
    }
  };

  render() {

    return (

      <Container fluid>
        <Nav
          subtitle={this.state.subtitle}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <div className="main">
          <Row>
            <Col size="md-9">
              {shuffle(
                this.state.players.map(player => (

                  <Card
                    key={player.id}
                    id={player.id}
                    handlePick={this.handlePick}
                    name={player.name}
                    image={player.image}
                    subtitle={this.state.subtitle}
                    score={this.state.score}
                    topScore={this.state.topScore}
                  />
                ))
              )}
            </Col> 
          </Row>
        </div>
      </Container>
    );
  }
}

export default App;
