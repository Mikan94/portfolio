import React from 'react';

import { Link } from 'react-router-dom';

function Songstories() {
  return (
    <div>
      <h1 class='my-96'>Songstories</h1>
      <Link to='/' class='btn'>
        Go back
      </Link>
    </div>
  );
}

export default Songstories;
