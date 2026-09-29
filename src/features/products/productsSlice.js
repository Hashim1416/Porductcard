import { createSlice } from '@reduxjs/toolkit';

const dummyProducts = [
  { id: '1', name: 'Quantum Over-Ear Headphones', price: 299.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000', category: 'Audio' },
  { id: '2', name: 'Nova Smartwatch Pro', price: 199.50, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000', category: 'Wearables' },
  { id: '3', name: 'Aura Mechanical Keyboard', price: 149.00, image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=1000', category: 'Accessories' },
  { id: '4', name: 'Lumina 4K Webcam', price: 129.99, image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&q=80&w=1000', category: 'Cameras' },
  { id: '5', name: 'Nexus Gaming Mouse', price: 79.99, image: 'https://images.unsplash.com/photo-1632160872021-7e65d76ad849?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Accessories' },
  { id: '6', name: 'Zenith VR Headset', price: 399.00, image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=1000', category: 'Gaming' },
];

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: dummyProducts,
    status: 'idle',
  },
  reducers: {}
});

export default productsSlice.reducer;
