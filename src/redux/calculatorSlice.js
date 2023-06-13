import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  input: '',
  value: 0,
  operation: '',
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    equal: (state, action) => {
      switch(state.operation){
        case "add":
          state.value += +action.payload
          state.input = ''
          state.operation = ''
          break;
        case "subtract":
          state.value -= action.payload
          state.input = ''
          state.operation = ''
          break;
        case "multiply":
          state.value *= action.payload
          state.input = ''
          state.operation = ''
          break;
        case "divide":
          state.value /= action.payload
          state.input = ''
          state.operation = ''
          break;
        default:
          console.log("Please enter a value")
      }
    },
    add: (state, action) => {
      if (state.operation === '') {state.value = +action.payload}
      else {}
      
      state.operation = "add"
      state.input = ''
    },
    subtract: (state, action) => {
      if (state.operation === '') {state.value = +action.payload}
      state.input = ''
      state.operation = "subtract"
    },
    multiply: (state, action) => {
      if (state.operation === '') {state.value = +action.payload}
      state.input = ''
      state.operation = "multiply"
    },
    divide: (state, action) => {
      if (state.operation === '') {state.value = +action.payload}
      state.input = ''
      state.operation = "divide"
    },
    inputAppend: (state, action)=>{
      state.input = state.input.concat(action.payload)
    },
    inputClear: (state) => {
      state.input = '';
    },
    valueClear: (state) => {
      state.value = 0;
    },
  },
})

// Action creators are generated for each case reducer function
export const { equal, add, subtract, multiply, divide, inputAppend, inputClear, valueClear } = calculatorSlice.actions

export default calculatorSlice.reducer