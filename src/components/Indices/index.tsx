import React from 'react';

import {
  Container,
  SaleArea,
  TotalGerado,
  IndicatorsArea,
  Conversao,
  TotalRecebido,
  HistoryArea,
  EyeIcon,
} from './style';

const Indices: React.FC = () => (
  <Container>
    <SaleArea>
      <TotalGerado>
        <div>
          <span> Total gerado </span>
        </div>
        <div id="TotalGeradoBody">
          <p>R$</p>
          <span>- 1,486</span>
          <EyeIcon />
        </div>
      </TotalGerado>
      <Conversao>
        <div>
          <span> Conversão </span>
        </div>
        <div id="ConversaoBody">
          <span />
          <span>
            50
            <p>%</p>
          </span>
          <EyeIcon />
        </div>
      </Conversao>
      <TotalRecebido>
        <div>
          <span> Total recebido </span>
        </div>
        <div id="TotalRecebidoBody">
          <p>R$</p>
          <span>850,00</span>
          <EyeIcon />
        </div>
      </TotalRecebido>
    </SaleArea>

    <IndicatorsArea>
      <div />
    </IndicatorsArea>

    <HistoryArea />
  </Container>
);

export default Indices;
