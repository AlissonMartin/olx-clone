import { screen, waitFor } from "@testing-library/dom";
import { act, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, useNavigate } from "react-router-dom";
import NewAd from "./NewAd";

const mockedUseNavigate = jest.fn(()=> '')

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: ()=> mockedUseNavigate
}))

describe('should add a new Ad', ()=> {

    it('should write in the titleInput', ()=> {
        render(
        <MemoryRouter>
            <NewAd/>
        </MemoryRouter>
        )

        let inputTitle = screen.getByLabelText('Título')
        let testValue = 'test'
        userEvent.type(inputTitle, testValue)
        expect(inputTitle).toHaveValue(testValue)
    })

    it('should not be able add a new ad with empty inputs', () => {
        render(
            <MemoryRouter>
                <NewAd />
            </MemoryRouter>
        )

        let emptyInput = " "
        userEvent.type(screen.getByLabelText('Título'), emptyInput)
        userEvent.type(screen.getByLabelText('Descrição'), emptyInput)
        userEvent.type(screen.getByLabelText('Preço'), emptyInput)
        userEvent.click(screen.getByText('Adicionar anúncio'))
        expect(mockedUseNavigate).not.toHaveBeenCalled()
    })



})