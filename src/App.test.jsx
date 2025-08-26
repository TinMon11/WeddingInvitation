import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import App from './App'
import React from 'react'
import { vi } from 'vitest'

// Mock simple de todos los componentes
vi.mock('./components/DaySection', () => ({
  default: () => React.createElement('div', { 'data-testid': 'day-section' }, 'Day Section')
}))

vi.mock('./components/Ceremony', () => ({
  Ceremony: () => React.createElement('div', { 'data-testid': 'ceremony' }, 'Ceremony')
}))

vi.mock('./components/AboutUs', () => ({
  AboutUs: () => React.createElement('div', { 'data-testid': 'about-us' }, 'About Us')
}))

vi.mock('./components/Gifts', () => ({
  default: () => React.createElement('div', { 'data-testid': 'gifts' }, 'Gifts')
}))

vi.mock('./components/ConfirmAssist', () => ({
  ConfirmAssist: () => React.createElement('div', { 'data-testid': 'confirm-assist' }, 'Confirm Assist')
}))

vi.mock('./components/DressCode', () => ({
  DressCode: () => React.createElement('div', { 'data-testid': 'dress-code' }, 'Dress Code')
}))

vi.mock('./components/Instagram', () => ({
  Instagram: () => React.createElement('div', { 'data-testid': 'instagram' }, 'Instagram')
}))

vi.mock('./components/Songs', () => ({
  Songs: () => React.createElement('div', { 'data-testid': 'songs' }, 'Songs')
}))

vi.mock('./components/Information', () => ({
  Information: () => React.createElement('div', { 'data-testid': 'information' }, 'Information')
}))

// Mock de react-icons
vi.mock('react-icons/io', () => ({
  IoIosArrowDown: () => React.createElement('div', { 'data-testid': 'arrow-down' }, 'Arrow Down')
}))

describe('App Component', () => {
  test('renders main wedding names', () => {
    render(
      React.createElement(Provider, { store }, React.createElement(App))
    )
    
    expect(screen.getByText('Vicky')).toBeInTheDocument()
    expect(screen.getByText('&')).toBeInTheDocument()
    expect(screen.getByText('Gonza')).toBeInTheDocument()
  })

  test('renders all main sections', () => {
    render(
      React.createElement(Provider, { store }, React.createElement(App))
    )
    
    expect(screen.getByTestId('day-section')).toBeInTheDocument()
    expect(screen.getByTestId('ceremony')).toBeInTheDocument()
    expect(screen.getByTestId('about-us')).toBeInTheDocument()
    expect(screen.getByTestId('gifts')).toBeInTheDocument()
    expect(screen.getByTestId('confirm-assist')).toBeInTheDocument()
    expect(screen.getByTestId('dress-code')).toBeInTheDocument()
    expect(screen.getByTestId('instagram')).toBeInTheDocument()
    expect(screen.getByTestId('songs')).toBeInTheDocument()
    expect(screen.getByTestId('information')).toBeInTheDocument()
  })

  test('renders arrow down icon', () => {
    render(
      React.createElement(Provider, { store }, React.createElement(App))
    )
    
    expect(screen.getByTestId('arrow-down')).toBeInTheDocument()
  })
})
