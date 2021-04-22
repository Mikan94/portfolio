import React from 'react';

import { Link, useHistory } from 'react-router-dom';

function Nazzle() {
  const history = useHistory();

  return (
    <div>
      <h1 class='my-96'>Nazzle</h1>
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

export default Nazzle;
