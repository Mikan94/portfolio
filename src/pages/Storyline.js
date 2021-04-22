import React from 'react';

import { Link, useHistory } from 'react-router-dom';

function Storyline() {
  const history = useHistory();

  return (
    <div>
      <h1 class='my-96'>Storyline</h1>
      <button
        class='btn'
        onClick={() => {
          history.goBack();
        }}
      >
        Go back
      </button>
    </div>
  );
}

export default Storyline;
