import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: MenuItem[]
  isOpen: boolean
  isOrderOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isOrderOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MenuItem>) => {
      const item = state.items.find((item) => item.id === action.payload.id)

      if (!item) {
        state.items.push(action.payload)
      } else {
        alert('Já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    orderOpen: (state) => {
      state.isOrderOpen = true
    },
    closeOrderOpen: (state) => {
      state.isOrderOpen = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, remove, open, close, clear, closeOrderOpen, orderOpen } =
  cartSlice.actions
export default cartSlice.reducer
