import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';
import getLeaderBoardInfo from '../data/getLeaderboardInfo';
import sustaingame from '../images/sustaingame.png';
import UglLogo from '../images/UglLogo.png';

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
          <img src={sustaingame} alt="sustain game" className="sustaingame-img"/>
          <h1>Leaderboard</h1>
          <div className='score-table'>{this.state.scores && <ScoresTable scores={this.state.scores} />}</div>
          <div className='leaderboard-exit'>
            <Button className="closeBtn" color="link" onClick={() => this.props.history.push('/thanks')}>Exit</Button>
          </div>
        </div>
        <p>brought to you by</p>
        <img src={UglLogo} alt="urban green lab" className="ugl-logo"/>
      </div>
    );
  }
}

function ScoresTable(props) {
  return (
    <Table borderless>
      <tbody>
        {props.scores.map((s, i) => <tr key={i}>
        <td></td>
        <th scope="row">{i + 1}</th>
        <th scope="row">{s.initials}</th>
        <td className='align-right'>{s.score}pts</td>
        </tr>)}
      </tbody>
    </Table>
  );
}
