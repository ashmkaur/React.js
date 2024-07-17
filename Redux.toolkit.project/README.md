# Notes of redux toolkit

Redux toolkit ki notes
1. Create Store - single source of truth
it has configureStore
introduce reducer

2. Create Slice(functions) method(createSlice)
Slice has name, initialState, reducers :{key: function}
Access of two things (State, action)
state = state value in the store
action = action.payload 
export individual functionality 
export main source export

3. Add Todo - Give values to State i.e Dispatch Courier  = use method useDispatch()
 dispatch(addTodo())

4. Take Values - useSelector((state) =>state.todos) state ka access chaiye
variable me values lelo ek baar aagaie uske baad pure JS concept hai 

Note: Todo's Project basic nai hote xD  :)

# Summary (Finale)

redux(library) is different react-redux(implementation),

React- toolkit--> never mutate your state

1. Store banaao--> Application of singh truth
2. features--> slices
% namr, initial state, reducer list=
objects->functions here(state,action) // no ... problem

components--> select use Dispatch
