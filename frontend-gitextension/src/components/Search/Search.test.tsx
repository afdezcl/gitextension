import { Search } from "./Search"
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe("Search", () => {
  test('should keep in the same route. Repo field is neccessary', async () => {    
    render(<Search/>)
    const user = userEvent.setup()

    await user.type(screen.getByPlaceholderText(/Username/i), 'afdezcl')

    await user.click(screen.getByRole('button', { name: /Search/i }))

    await waitFor(() =>
      expect(window.location.pathname).not.toEqual('/afdezcl/afdezcl')
    )
  })

  test('should keep in the same route. User field is neccessary', async () => {    
    render(<Search/>)
    const user = userEvent.setup()

    await user.type(screen.getByPlaceholderText(/Repository/i), 'afdezcl')

    await user.click(screen.getByRole('button', { name: /Search/i }))

    await waitFor(() =>
      expect(window.location.pathname).not.toEqual('/afdezcl/afdezcl')
    )
  })
  test('should redirect to the correct url', async () => {    
    render(<Search/>)
    const user = userEvent.setup()

    await user.type(screen.getByPlaceholderText(/Username/i), 'afdezcl')
    await user.type(screen.getByPlaceholderText(/Repository/i), 'afdezcl')

    await user.click(screen.getByRole('button', { name: /Search/i }))

    await waitFor(() =>
      expect(window.location.pathname).toEqual('/afdezcl/afdezcl')
    )
  })

})