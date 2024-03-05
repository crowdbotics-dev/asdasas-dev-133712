import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_testmanytomany_list = createAsyncThunk(
  "testManyToManies/api_v1_testmanytomany_list",
  async payload => {
    const response = await apiService.api_v1_testmanytomany_list(payload)
    return response.data
  }
)
export const api_v1_testmanytomany_create = createAsyncThunk(
  "testManyToManies/api_v1_testmanytomany_create",
  async payload => {
    const response = await apiService.api_v1_testmanytomany_create(payload)
    return response.data
  }
)
export const api_v1_testmanytomany_retrieve = createAsyncThunk(
  "testManyToManies/api_v1_testmanytomany_retrieve",
  async payload => {
    const response = await apiService.api_v1_testmanytomany_retrieve(payload)
    return response.data
  }
)
export const api_v1_testmanytomany_update = createAsyncThunk(
  "testManyToManies/api_v1_testmanytomany_update",
  async payload => {
    const response = await apiService.api_v1_testmanytomany_update(payload)
    return response.data
  }
)
export const api_v1_testmanytomany_partial_update = createAsyncThunk(
  "testManyToManies/api_v1_testmanytomany_partial_update",
  async payload => {
    const response = await apiService.api_v1_testmanytomany_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_testmanytomany_destroy = createAsyncThunk(
  "testManyToManies/api_v1_testmanytomany_destroy",
  async payload => {
    const response = await apiService.api_v1_testmanytomany_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const testManyToManiesSlice = createSlice({
  name: "testManyToManies",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_testmanytomany_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_testmanytomany_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmanytomany_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmanytomany_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_testmanytomany_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmanytomany_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmanytomany_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_testmanytomany_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmanytomany_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmanytomany_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_testmanytomany_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmanytomany_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        api_v1_testmanytomany_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_testmanytomany_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_testmanytomany_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_testmanytomany_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_testmanytomany_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmanytomany_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_testmanytomany_list,
  api_v1_testmanytomany_create,
  api_v1_testmanytomany_retrieve,
  api_v1_testmanytomany_update,
  api_v1_testmanytomany_partial_update,
  api_v1_testmanytomany_destroy,
  slice: testManyToManiesSlice
}
