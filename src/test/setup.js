import '@testing-library/jest-dom'

// Crear un elemento root para react-modal
const root = document.createElement('div')
root.id = 'root'
document.body.appendChild(root)

// Mock de react-modal para evitar errores en tests
vi.mock('react-modal', () => ({
  default: {
    setAppElement: vi.fn(),
  }
}))
