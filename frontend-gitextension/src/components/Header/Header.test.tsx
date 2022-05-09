import { Header } from "./Header"
import {render, screen} from '@testing-library/react'

describe("Header", () => { 
  test('should render the component with the correct title', () => {
    render(<Header />)
    
    expect(screen.getByText('GitExtension App')).toBeTruthy()    
  })
})