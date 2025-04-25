import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  searchQuery: string;
  category: string | null;
}

const initialState: FiltersState = {
  searchQuery: "",
  category: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setCategory(state, action: PayloadAction<string | null>) {
      state.category = action.payload;
    },
    resetFilters(state) {
      state.searchQuery = "";
      state.category = null;
    },
  },
});

export const { setSearchQuery, setCategory, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;