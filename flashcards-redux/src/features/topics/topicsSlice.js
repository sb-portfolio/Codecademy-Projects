import { createSlice } from '@reduxjs/toolkit'

export const topicSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      state.topics[action.payload.id] = {
          id: action.payload.id,
          name: action.payload.name, 
          icon: action.payload.icon,
          quizIds: []
        }
    },
    addQuizId: (state, action) => {
            state.topics[action.payload.topicId].quizIds.push(action.payload.quizId)
        }
    }
  })

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuizId } = topicSlice.actions;
export default topicSlice.reducer;