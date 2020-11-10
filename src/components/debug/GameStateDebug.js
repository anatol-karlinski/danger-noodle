import { connect } from 'react-redux'
import actionTypes from '../../store/action-types'
import './GameStateDebug.scss'

const mapState = (state) => ({
  board: state.gameStateReducer.board,
})

const mapDispatch = (dispatch) => ({
  initializeBoard: (payload) => dispatch({ type: actionTypes.INITIALIZE_BOARD, payload }),
})

function GameStateDebug(props) {
  const { board } = props

  return (
    <div className="game-state-debug">
      <div className="game-state-debug__title">GameState</div>
      {
        board.map((col, i) => {
          const row = col.join('\t.\t')
          return (<div key={i}>{row}</div>)
        })
      }
    </div>
  )
}

export default connect(mapState, mapDispatch)(GameStateDebug)
