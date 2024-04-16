import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Title from '../app/components/Title/Title'

test('title is correct', () => {
    render(<Title />)
    expect(screen.getByRole('heading', { level: 1, name: 'todos' })).toBeDefined()
})