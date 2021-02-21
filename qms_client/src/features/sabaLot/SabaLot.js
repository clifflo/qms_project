import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  selectCount
} from './sabaLotSlice'

export function SabaLot(){
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}>
          +
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  );
}
