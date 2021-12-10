import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// const carsInitialState = {
//     carList: {
//         status: "idle",
//         data: {},
//         error: {}
//     }
// }

export const fetchCarList = createAsyncThunk(
  'cars/fetchCarList',
  async () => {
    const a = await axios
      .get(`http://localhost:3005/cars`)
    return a.data;
  }
);

export const fetchCarDetail = createAsyncThunk(
  'cars/fetchCarDetail',
  async (id) => {
    const res = await axios.get(`http://localhost:3005/cars/${id}`);
    return res.data
  }
);

export const fetchCarDelete = createAsyncThunk(
  'cars/fetchCarDelete',
  async (id) => {
    const res = await axios.delete(`http://localhost:3005/cars/${id}`);
    return res.data
  }
);
export const fetchCarCreate = createAsyncThunk(
  'cars/fetchCarCreate',
  async (carState) => {
    const res = await axios.post("http://localhost:3005/cars", carState)
    return res.data
  }
);
export const fetchCarLoad = createAsyncThunk(
  'cars/fetchCarLoad',
  async (id) => {
    const result = await axios.get(`http://localhost:3005/cars/${id}`)
    return result.data
  }
);

export const fetchCarEdit = createAsyncThunk(
  'cars/fetchCarLoad',
  async (carState) => {
    const result = axios.put(`http://localhost:3005/cars/${carState._id}`, carState)
    return result.data
  }
)


// const carsInitialState = {
//   carList: {
//     status: "idle",
//     list: [],
//     error: {}
//   }
// }

// const carsInitialState = {
//     data: [],
//     status: "idle",
// }

// const carSlice = createSlice ({
//     name: "cars",
//     initialState: carsInitialState,
//     reducers: {},
//     extraReducers: (builder) => {
//           builder
//               .addCase(fetchCarList.pending, state => {console.log("loading"), state.status = 'loading'})
//               .addCase(fetchCarList.fulfilled, (state, action) => {
//                 console.log("idle", console.log(action.payload)),
//                   state.status = 'idle';
//                  return state.data = action.payload;
//               })
//               .addCase(fetchCarList.rejected, state => {
//                 console.log('error')
//                   state.status = 'error'
//               })
//               .addDefaultCase(() => {})
//       }
// })

const carSlice = createSlice({

  name: "cars",
  // initialState: carsInitialState,
  initialState: {
    status: "idle",
    list: [],
    error: {}
  },

  reducers: {
    // add(state, {payload}) {
    //   state.push(payload)
    // },
    // del(state, {payload}) {
    //   return state = state.filter(({id}) = id !== payload)
    // }
    // del(state, {payload: index}) {
    //   state = state.filter(({id}) = id !== payload)
    //   state.splice(index, 1)
    // }
    /////////
    // del(state, {payload: index} ) {
    //   console.log(index)
    //   // state.splice(index, 1)
    //   // state.splice(index, 1)
    //   // return state = state.filter(({id}) = id !== payload)
    // del(state, { payload: index }) {
    //   console.log(index)
    //   state.splice(index, 1)
    // }
    // del: (state, action) => {
    //   state.list = state.list.filter(item => item.id !== action.payload)

    // }
  },

  extraReducers: {
    [fetchCarList.pending.type]: (state) => {

      return state
    },
    [fetchCarList.fulfilled.type]: (state, action) => {

      state.list = action.payload
      return state
    },
    [fetchCarList.rejected.type]: (state) => {

      return state
    },
    // [fetchCarDetail.pending.type]: (state, action) => {
    //   
    //     return state
    //   },
    //   [fetchCarDetail.fulfilled.type]: (state, action) => {
    //     
    //     return state
    //   },
    //   [fetchCarDetail.rejected.type]: (state, action) => {
    //     
    //     return state
    //   },
    [fetchCarDelete.pending.type]: (state) => {

      return state
    },
    [fetchCarDelete.fulfilled.type]: (state) => {

      return state
    },
    [fetchCarDelete.rejected.type]: (state) => {

      return state
    },
    // [fetchCarLoad.pending.type]: (state, action) => {

    //   return state
    // },
    // [fetchCarLoad.fulfilled.type]: (state, action) => {

    //   return state
    // },
    // [fetchCarLoad.rejected.type]: (state, action) => {

    //   return state
    // },
    // [fetchCarEdit.pending.type]: (state, action) => {

    //   return state
    // },
    // [fetchCarEdit.fulfilled.type]: (state, action) => {
    //   console.log(state)
    //   return state
    // },
    // [fetchCarEdit.rejected.type]: (state, action) => {

    //   return state
    // },
  },


})

export const { add, del } = carSlice.actions
export default carSlice.reducer;