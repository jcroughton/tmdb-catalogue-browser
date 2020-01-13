import React from 'react';
import { useHistory } from 'react-router-dom';

export default function GoBack() {
  let history = useHistory();

  return (
    <button type="button" onClick={() => history.goBack()}>
      Get back...
    </button>
  )
};
