import styled from 'styled-components'

export const Container = styled.div`
  background-color: #081634;
  height: 100%;
  margin: 0 auto;
  margin-top: 50px;
  max-width: 1200px;
  padding: 20px;
`

export const FormColumn = styled.div`
  display: flex;
  flex-flow: column;
  width: 350px;
  gap: 20px;
  margin: 0 auto;
`

export const Select = styled.select`
  background-color: #060a1d;
  color: white;
  border: none;
  // color: white;
  font-size: 14px;
  height: 30px;
  padding: 5px;
  width: 250px;
  margin: 0 auto;
`

export const Button = styled.button`
  background-color: rgba(21,61,111,0.44);
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;

  :disabled {
    background-color: #08142e;
    color: #6C7284;
    cursor: auto;
    box-shadow: none;
    border: 1px solid transparent;
    outline: none;
    opacity: 1;
  }
`

export const InputText = styled.input`
  background-color: #060a1d;
  color: white;
  width: 100%;
  padding: 12px 5px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid black;
  border-radius: 4px;
  box-sizing: border-box;
`

export const ContainerModal = styled.div`
  color: black;
`