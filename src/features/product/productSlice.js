import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchProductsStatus",
  async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    entities: [],
    loading: "idle",
    isLoading: false,
    currentRequestId: undefined,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          //   state.currentRequestId = action.payload.meta.requestId;
          state.isLoading = true;
        }
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        // const { requestId } = action.payload.meta;
        if (
          state.loading === "pending"
          //   state.currentRequestId === requestId
        ) {
            const data = action.payload;
          state.loading = "idle";
          state.isLoading = false;
          state.entities.push(...data);
          state.currentRequestId = undefined;
        }
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        // const { requestId } = action.payload.meta;
        if (
          state.loading === "pending"
          //   state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.isLoading = false;
          state.error = action.error;
          state.currentRequestId = undefined;
        }
      });
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
