import React, { useState } from 'react';

const ReducerSample2 = () => {
  const [state, setState] = useState({
    count: 0,
    text: 'hello',
    color: 'red',
    isGood: true,
  });

  return (
    <div>
      <p>
        <code>count: </code> {state.count}
      </p>
      <p>
        <code>text: </code> {state.text}
      </p>
      <p>
        <code>color: </code> {state.color}
      </p>
      <p>
        <code>isGood: </code> {state.isGood ? 'true' : 'false'}
      </p>
      <div>
        <button onClick={() => setState({ ...state, count: 5 })}>SET_COUNT</button>
        <button onClick={() => setState({ ...state, text: 'bye' })}>SET_TEXT</button>
        <button onClick={() => setState({ ...state, color: 'orange' })}>SET_COLOR</button>
        <button onClick={() => setState({ ...state, isGood: !state.isGood })}>TOGGLE_GOOD</button>
      </div>
    </div>
  );
};

export default ReducerSample2;
