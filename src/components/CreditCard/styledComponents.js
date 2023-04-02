// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const ShowContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');

  background-size: cover;
  height: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ShowNumber = styled.p`
  font-size: 20px;
  color: red;
`
export const ShowName = styled.p`
  font-size: 20px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 50%;
`

export const Container = styled.div`
  background-color: #3b4b69;
  size: cover;
  height: 100vh;
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
`

export const ContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
`

export const Heading = styled.h1`
  font-size: 20px;
`
export const HeadingOne = styled.p``

export const InputNumber = styled.input`
  margin: 5px;
`

export const InputName = styled.input`
  margin: 5px;
`
