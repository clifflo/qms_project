import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  selectCount
} from './sabaLotSlice'
import '../../App.css';

export function SabaLot(){
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <button
        aria-label="Increment value"
        className="Count"
        onClick={() => dispatch(increment())}>
          +
      </button>
      <span className="Count">{count}</span>
      <button
        className="Count"
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  );
}
