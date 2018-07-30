import { add } from './Actions'

export type AddType = ReturnType<typeof add>

export interface Counter {
  age: string
}

const initialState: Counter = {
  age: '2',
}

const RootReducer = (state = initialState, action: AddType) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        age: action.payload,
      }
    default:
      return state
  }
}

export default RootReducer
