import { createSlice, configureStore } from "@reduxjs/toolkit";
import data from "./shop-data";

const dataSlice = createSlice({
  name: "store",
  initialState: { data },
  reducers: {},
});

const store = configureStore({
  reducer: dataSlice.reducer,
});

export default store;
