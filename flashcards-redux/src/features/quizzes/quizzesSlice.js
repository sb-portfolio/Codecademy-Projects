import { createSlice } from '@reduxjs/toolkit'
import { addQuizId } from '../topics/topicsSlice'

export const addNewQuiz = (payload) => {




  return (dispatch) => {
    dispatch(addQuizId({
      quizId: payload.id, 
      topicId: payload.topicId
    }))
    dispatch(quizzesSlice.actions.addQuiz({
          id: payload.id,
          name: payload.name, 
          topicId: payload.topicId,
          cardIds: payload.cardIds
        }))
  }
}

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {

      state.quizzes[action.payload.id] = {
          id: action.payload.id,
          name: action.payload.name, 
          topicId: action.payload.topicId,
          cardIds: action.payload.cardIds
        }
    },

  }
})

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
