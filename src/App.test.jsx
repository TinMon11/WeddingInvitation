import { describe, test, expect } from 'vitest'

describe('App Component', () => {
  test('should pass basic test', () => {
    expect(true).toBe(true)
  })

  test('should handle basic math', () => {
    expect(2 + 2).toBe(4)
  })

  test('should work with strings', () => {
    expect('Vicky & Gonza').toContain('Vicky')
    expect('Vicky & Gonza').toContain('Gonza')
  })

  // Test que va a fallar intencionalmente
  test('should fail intentionally to demonstrate CI/CD behavior', () => {
    expect(1 + 1).toBe(3) // Esto va a fallar
  })
})
