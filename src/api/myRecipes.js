// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// axios.defaults.baseURL = 'https://drink-master-db.onrender.com';

// export const fetchMyRecipes = createAsyncThunk(
//   'myRecipes/fetchMyRecipes',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await axios.get(`/recipes`);
//       console.log(data);

//       // При успешном запросе возвращаем промис с данными
//       return data;
//     } catch (e) {
//       // При ошибке запроса возвращаем промис
//       // который будет отклонен с текстом ошибки
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const deleteMyRecipes = createAsyncThunk(
//   'myRecipes/deleteMyRecipes',
//   async (_id, thunkAPI) => {
//     try {
//       const { data } = await axios.delete(`/recipes/${_id}`);
//       return data.id;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
