import styled from 'styled-components'

import { Cores } from '../../styleGlobal'

export const FormularioStyle = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${Cores.corPrincipal};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`
export const Campo = styled.input`
  padding: 0 16px;
  outline-color: ${Cores.corPrincipal};
`

export const BtnPesquisar = styled.button`
  background-color: ${Cores.corPrincipal};
  border: 1px solid ${Cores.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${Cores.corSecundaria};
  margin-left: 8px;
  cursor: pointer;
`
