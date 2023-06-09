import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
    users: [
      {name: "Robert",
      email: "Robert@gmail.com",
      gen: "+27749293931",
      id: uuid(),
    }
    ],
  };
  
  export const userSlice = createSlice({
      name: "userSlice",
      initialState,
      reducers : {
           createUser: (state, action) => {
              state.users.push(action.payload)
            }
      }
  })
  
  export const { createUser } = userSlice.actions
  export default userSlice.reducer