import React from 'react';

import { Link, useHistory } from 'react-router-dom';

function Hel() {
  const history = useHistory();

  return (
    <div>
      <h1 class='my-96'>Hygiene Lab</h1>
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

export default Hel;
