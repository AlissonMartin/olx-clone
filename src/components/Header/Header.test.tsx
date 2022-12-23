import {render, screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom"
import Header from "./Header"
import Cookies from 'js-cookie';


jest.mock('js-cookie', () => ({ get: () => '$2b$10$.uqCB2xuZJku9wJhZu9ECObMxQWw8/FXFH4yHTzM2ccMKjYO9Pdzu' }))


describe('header menu', ()=> {
    
    it('should render the options when logged in', async ()=> {

        render(<MemoryRouter>
            <Header />
        </MemoryRouter>)


        
        expect(screen.getByText('Minha Conta')).toBeInTheDocument()
    })

    it('should render the options when logged in',  () => {

        render(<MemoryRouter>
            <Header />
        </MemoryRouter>)

        userEvent.click(screen.getByText('Minha Conta'))

        expect(screen.getByText('Meu perfil')).toBeInTheDocument()
    })
})