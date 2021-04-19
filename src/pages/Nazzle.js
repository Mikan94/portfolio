import React from 'react';

import { Link } from 'react-router-dom';

function Nazzle() {
  return (
    <div>
      <h1 class='my-96'>Nazzle</h1>
      <Link to='/' class='btn'>
        Go back
      </Link>
    </div>
  );
}

export default Nazzle;
