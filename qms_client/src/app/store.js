import { configureStore } from '@reduxjs/toolkit'
import sabaLotReducer from
  '../features/sabaLot/sabaLotSlice';

export default configureStore({
  reducer: {
    sabaLot: sabaLotReducer
  }
})
