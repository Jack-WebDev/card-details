
import styled, { css } from "styled-components"

const FormContainer = styled.form`
    display: grid;
    gap: 1rem;
    padding-inline: 2rem;
    width: min(90%, 500px);
    margin: auto;

`

const Date = styled.div`
    display: flex;
    align-items: center;

`
const Input = styled.input`
    width: 25%;
    padding: 10px 15px;
    border: 1px solid var(--Lightgrayishviolet);
    border-radius: 5px;
    margin-inline: auto;
    
    &:focus-within {
        outline: 1px solid var(--Verydarkviolet);
    }


    ${(props) =>
        props.inlineStyles &&
        css`
          width: min(100%, 600px);
        `}

    ${(props) =>
        props.CVC &&
        css`
            width: 40%;
        `}
`


const Button = styled.button`
    width: 100%;
    border: none;
    border-radius: 5px;
    background-color: var(--Verydarkviolet);
    color: var(--Lightgrayishviolet);
    padding: 1rem 2rem;
    margin-inline: auto;
`

const Label = styled.label`
    color: var(--Verydarkviolet);
`



function Form() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div>
        <FormContainer>
            <Label htmlFor="cardHolder">CARDHOLDER NAME</Label>
            <Input inlineStyles type="text" id="cardHolder" placeholder="e.g Jack Bro" />

            <Label htmlFor="cardNumber">CARD NUMBER</Label>
            <Input inlineStyles type="text" id="cardNumber" placeholder="e.g 1235 2342 23455" />

            <>
                <Label htmlFor="date">EXP. DATE (MM/YY) CVC</Label>
                <Date>
                    <Input type="text" id="date" placeholder="MM" className="monthInput"  />
                    <Input type="text" id="date" placeholder="YY" className="yearInput" />
                    <Input CVC type="text" id="date" placeholder="e.g 865" className="CVC" />
                </Date>
            </>

            <Button onSubmit={handleSubmit} type="submit">Confirm</Button>
        </FormContainer>
    </div>
  )
}

export default Form