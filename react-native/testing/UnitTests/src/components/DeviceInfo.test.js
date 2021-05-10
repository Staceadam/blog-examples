import * as React from 'react'
import { render, fireEvent } from '@testing-library/react-native'

import DeviceInfo from './DeviceInfo'

beforeEach(() => {
  jest.clearAllMocks()
})

it('has DeviceId', () => {
  const { getByText } = render(<DeviceInfo />)
})

it('has ApplicationName', () => {
  const { getByText } = render(<DeviceInfo />)
})
