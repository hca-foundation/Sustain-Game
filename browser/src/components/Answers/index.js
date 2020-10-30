import React from 'react';
import { Button } from 'reactstrap';

const Answer = (props) => props.a.map((a, i) => <Button
    className='answer-btn btn btn-outline-dark'
    key={i}
    onClick={() => props.click(props.id, a.is_correct)}
  >
    {a.answer}
  </Button>);

export default Answer;
