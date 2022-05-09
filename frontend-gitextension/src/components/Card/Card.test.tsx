import { Card } from "./Card"
import {render, screen} from '@testing-library/react'

describe("Card", () => { 
  test('should render the component with props', () => {
    const props = {name: 'test', quantity: 1}
   
    render(<Card {...props}/>)
    
    expect(screen.getByText('test')).toBeTruthy()
    expect(screen.getByText(1)).toBeTruthy()
  })
})