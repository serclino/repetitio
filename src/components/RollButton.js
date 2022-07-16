import React from 'react';
import { rollDice } from '../features/listsSlice';
import { useDispatch } from 'react-redux';

export const RollButton = () => {
  const dispatch = useDispatch();
  
  return (
    <>
      <div className='component'>RollButton</div>
      <button onClick={() => dispatch(rollDice())}>Roll a dice</button>
    </>
  );
}
