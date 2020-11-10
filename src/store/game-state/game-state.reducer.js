import { INITIALIZE_BOARD } from './game-state.action-types'
import defaultState from './game-state.state'

export default (state = defaultState, action) => {
  switch (action.type) {
    case INITIALIZE_BOARD:
      return {
        ...state,
        board: [...Array(action.payload.width)].map(() => Array(action.payload.height).fill(0)),
      }
    default:
      return state
  }
}
