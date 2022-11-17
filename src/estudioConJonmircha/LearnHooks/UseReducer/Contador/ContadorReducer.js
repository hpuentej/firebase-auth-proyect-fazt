import { useReducer } from 'react' 

const TYPES = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset'
}

const reducer = (state, action) => {
  if(action.type === TYPES.INCREMENT) return state + 1
  else if(action.type === TYPES.DECREMENT) return state - 1
  else if(action.type === TYPES.RESET) return 0
  return state 
}

export function ContadorReducer() {

  const [counter, counterDispatch] = useReducer(reducer, 0)

  return (
    <>
      <h1 className="text-3xl mb-3">Contador usando useReducer</h1>
      <div className="text-xl mb-3 ">
        <button
          className="bg-lime-400 px-2 py-1 mr-2 rounded-lg"
          onClick={() => {counterDispatch({type: TYPES.INCREMENT})}}
        >
          Increment
        </button>
        <button
          className="bg-amber-400 px-2 py-1 mr-2 rounded-lg"
          onClick={() => {counterDispatch({type: TYPES.DECREMENT})}}
        >
          Decrement
        </button>
        <button
          className="bg-indigo-400 px-2 py-1 mr-2 rounded-lg"
          onClick={() => {counterDispatch({type: TYPES.RESET})}}
        >
          Reset
        </button>
      </div>
      <h1 className="text-2xl bg-sky-300 py-2">Clicks: {counter}</h1>
    </>
  );
}
