import React from 'react';

import { Link } from 'react-router-dom';

function Smartdress() {
  return (
    <div>
      <h1 class='my-96'>Smartdress</h1>
      <Link to='/' class='btn'>
        Go back
      </Link>
    </div>
  );
}

export default Smartdress;
