// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  ShowContainer,
  InputContainer,
  ShowNumber,
  ShowName,
  InputNumber,
  InputName,
  Container,
  Heading,
  HeadingOne,
  ContainerTwo,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')

  const onNumberChange = event => {
    setNumber(event.target.value)
  }

  const [name, setName] = useState('')

  const onNameChange = event => {
    setName(event.target.value)
  }

  return (
    <MainContainer>
      <Container>
        <Heading>Credit Card</Heading>
        <ShowContainer data-testid="creditCard">
          <ShowNumber>{number}</ShowNumber>
          <HeadingOne>CARDHOLDER NAME</HeadingOne>
          <ShowName>{name}</ShowName>
        </ShowContainer>
      </Container>
      <InputContainer>
        <ContainerTwo>
          <Heading>Payment Method</Heading>
          <InputNumber
            placeholder="Card Number"
            value={number}
            onChange={onNumberChange}
          />
          <InputName
            placeholder="Cardholder Name"
            value={name}
            onChange={onNameChange}
          />
        </ContainerTwo>
      </InputContainer>
    </MainContainer>
  )
}
export default CreditCard
