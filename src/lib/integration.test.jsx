import * as React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import { describe, expect, test, afterEach } from 'vitest'
import DialogModal from './index'

describe('Integration test', () => {
  afterEach(cleanup)

  test('Minimal render display expected text', () => {
    render(<DialogModal openModal={true} message={'It work !'}/>)
    expect(screen.getByText('It work !'))
  })

  test('Expected message is displayed as prop change', () => {
    const message = 'Test message'
    render(<DialogModal openModal={true} message={message} />)
    expect(screen.getByText(`${message}`))
  })
})
