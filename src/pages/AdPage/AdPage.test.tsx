import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import AdPage from "./AdPage"

describe('AdPage components', ()=> {
    it('should have a title component', ()=> {
        render(<MemoryRouter>
            <AdPage />
        </MemoryRouter>)
        
        const title = screen.getByTestId('h1')
        expect(title).toBeInTheDocument()
    })
    it ('should have a image', async()=> {
        render(<MemoryRouter>
            <AdPage />
        </MemoryRouter>)

        const image = await screen.findByTestId('bigPic')
        expect(image).toBeInTheDocument()
    })
})