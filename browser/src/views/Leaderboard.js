import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';
import getLeaderBoardInfo from '../data/getLeaderboardInfo';

export default class Leaderboard extends Component {
  state = {
    scores: [],
  }

  componentDidMount() {
    getLeaderBoardInfo().then((resp) => {
      console.warn(resp);
      this.setState({
        scores: resp,
      });
    });
  }

  render() {
    return (
      <div className='leaderboard-container'>
        <div className='small-container'>
          <div className='leaderboard-exit'>
            <Button className="closeBtn" color="link" onClick={() => this.props.history.push('/thanks')}>Exit</Button>
          </div>
          <h1>Leaderboard</h1>
          {this.state.scores && <ScoresTable scores={this.state.scores} />}
        </div>
      </div>
    );
  }
}

function ScoresTable(props) {
  return (
    <Table borderless>
      <tbody>
        {props.scores.map((s, i) => <tr key={i}>
        <th scope="row">{i + 1}</th>
        <td>{s.initials}</td>
        <td>{s.score}</td>
        </tr>)}
      </tbody>
    </Table>
  );
}
