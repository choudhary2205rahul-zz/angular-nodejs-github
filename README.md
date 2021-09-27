# Angular

REDUX: 
------
State management library

Store (Application State) 
     |
Reducer (get copy of store & actions and update the store immutably) (reducers are sync)
     |
Actions (handles side effects like https calls)
     |
Dispatch
     |
Services & Components (receive state from store and dispatch update events)
