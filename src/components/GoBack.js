import React from 'react';
import { useHistory } from 'react-router-dom';

import backArrow from 'images/ic_arrow_back_white.svg';

export default function GoBack() {
  let history = useHistory();

  return (
    <img
      className="
        absolute
        cursor-pointer
        ml-5
        mt-8
      "
      src={backArrow} alt="Back" onClick={() => history.goBack()}
    />
  )
};
