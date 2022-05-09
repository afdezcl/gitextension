import { ListOfExtensions } from "./ListOfExtensions"
import {render, screen} from '@testing-library/react'

describe("ListOfExtensions", () => { 
  test('should render with the 3 card by the extensions past', async () => {
    const extensions = {md: 1, js: 2, ts: 3}
    
    render(<ListOfExtensions extensions={extensions}/>)
    
    const items = await screen.findAllByRole('card')
    expect(items).toHaveLength(3)
  })
})