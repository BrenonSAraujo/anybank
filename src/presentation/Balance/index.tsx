import styled from "styled-components";
import { IconEye } from "../../components/Icons";

const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  });

const StyledBalance = styled.div`
    h3 {
        font-size: 20px;
        line-height: 24px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        border-bottom: 2px solid #000;
        padding: 16px 0;
        margin: 0;
        margin-bottom: 16px;
    }
    p {
        font-size: 16px;
        margin : 0;
        margin-bottom: 16px;
    }
    strong {
        font-size: 31px;
        font-weight: 600;
    }
`

interface BalanceProps {
    value: number
}

export const Balance = ({ value } : BalanceProps) => {
    return <StyledBalance>
        <h3>
            Saldo
            <IconEye />
        </h3>
        <p>Conta Corrente</p>
        <strong>
            {formatter.format(value)}
        </strong>
    </StyledBalance>
}
