import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_hobby_list = createAsyncThunk(
  "hobbies/api_v1_hobby_list",
  async payload => {
    const response = await apiService.api_v1_hobby_list(payload)
    return response.data
  }
)
export const api_v1_hobby_create = createAsyncThunk(
  "hobbies/api_v1_hobby_create",
  async payload => {
    const response = await apiService.api_v1_hobby_create(payload)
    return response.data
  }
)
export const api_v1_hobby_retrieve = createAsyncThunk(
  "hobbies/api_v1_hobby_retrieve",
  async payload => {
    const response = await apiService.api_v1_hobby_retrieve(payload)
    return response.data
  }
)
export const api_v1_hobby_update = createAsyncThunk(
  "hobbies/api_v1_hobby_update",
  async payload => {
    const response = await apiService.api_v1_hobby_update(payload)
    return response.data
  }
)
export const api_v1_hobby_partial_update = createAsyncThunk(
  "hobbies/api_v1_hobby_partial_update",
  async payload => {
    const response = await apiService.api_v1_hobby_partial_update(payload)
    return response.data
  }
)
export const api_v1_hobby_destroy = createAsyncThunk(
  "hobbies/api_v1_hobby_destroy",
  async payload => {
    const response = await apiService.api_v1_hobby_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const hobbiesSlice = createSlice({
  name: "hobbies",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_hobby_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_hobby_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hobby_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hobby_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_hobby_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hobby_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hobby_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_hobby_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hobby_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hobby_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_hobby_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hobby_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hobby_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_hobby_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hobby_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hobby_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_hobby_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hobby_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_hobby_list,
  api_v1_hobby_create,
  api_v1_hobby_retrieve,
  api_v1_hobby_update,
  api_v1_hobby_partial_update,
  api_v1_hobby_destroy,
  slice: hobbiesSlice
}
