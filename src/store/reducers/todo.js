import { ADD_TODO, REMOVAL_TODO, TOGGLE_TODO, SORTING_TODO} from "../actions/types/todo";

const initialState = {
  allIds: [],
  byIds: {},
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;

      return {
        ...state,

        allIds: [...state.allIds, id],

        byIds: {
          ...state.byIds,

          [id]: {
            content,
            complete: false,
          },
        },
      };
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;

      const targetTodo = state.byIds[id];

      return {
        ...state,

        byIds: {
          ...state.byIds,
          [id]: {
            ...targetTodo,
            completed: !targetTodo.completed,
          },
        },
      };
    }
    case REMOVAL_TODO: {
      const { id } = action.payload;

      
      state.allIds=state.allIds.filter(item => item !=id)
      delete state.byIds[id]

      return {
        ...state
      };
    }
    
    case SORTING_TODO:{
      state.byIds.id.sort((prev, next) => prev.completed - next.completed)
      console.log('сортируем');
      return{
        ...state
      }
    }

    default:
      return state;
  }
}
