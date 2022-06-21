import { ListOfExtensions } from "./ListOfExtensions"
import { render, screen } from '@testing-library/react'

describe("ListOfExtensions", () => {
  const errorText = 'An error has ocurred. Maybe the repository has not been found.'

  test('should render with the 3 card by the extensions past', async () => {
    const extensions = { md: 1, js: 2, ts: 3 }

    render(<ListOfExtensions extensions={extensions} error={false} />)

    const items = await screen.findAllByRole('card')
    expect(items).toHaveLength(3)
  })

  test('should show the toast component error', async () => {
    const extensions = null

    render(<ListOfExtensions extensions={extensions} error={true} />)

    const error = await screen.getByText(errorText)
    expect(error).toBeDefined()
  })
})