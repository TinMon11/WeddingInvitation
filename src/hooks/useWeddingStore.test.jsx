import { renderHook } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { useWeddingStore } from './useWeddingStore'
import React from 'react'

// Mock simple de Firebase
vi.mock('../firebase/firebase', () => ({
  FirebaseDB: {}
}))

vi.mock('firebase/firestore/lite', () => ({
  collection: vi.fn(),
  doc: vi.fn(),
  getDocs: vi.fn(),
  setDoc: vi.fn(),
  updateDoc: vi.fn(),
}))

// Mock de uid
vi.mock('uid', () => ({
  uid: () => 'test-uid-123'
}))

// Mock simple de las acciones de Redux
vi.mock('../store/wedding/weddingSlice', () => ({
  weddingSlice: {
    reducer: (state = { weddings: {} }, action) => state,
  },
  onAddNewLike: vi.fn(),
  onAddNewSong: vi.fn(),
  onGetSongs: vi.fn(),
}))

const createTestStore = () => {
  return configureStore({
    reducer: {
      weddings: (state = { weddings: {} }, action) => state,
    },
    preloadedState: {
      weddings: {
        weddings: {}
      }
    }
  })
}

const wrapper = ({ children }) => {
  const store = createTestStore()
  return React.createElement(Provider, { store }, children)
}

describe('useWeddingStore', () => {
  test('should return the expected properties and functions', () => {
    const { result } = renderHook(() => useWeddingStore(), { wrapper })
    
    expect(result.current).toHaveProperty('weddings')
    expect(result.current).toHaveProperty('addNewLike')
    expect(result.current).toHaveProperty('addNewSong')
    expect(result.current).toHaveProperty('getWeddingSongs')
    
    expect(typeof result.current.addNewLike).toBe('function')
    expect(typeof result.current.addNewSong).toBe('function')
    expect(typeof result.current.getWeddingSongs).toBe('function')
  })

  test('should have initial weddings state', () => {
    const { result } = renderHook(() => useWeddingStore(), { wrapper })
    
    expect(result.current.weddings).toEqual({})
  })
})
