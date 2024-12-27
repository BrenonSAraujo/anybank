import styled from "styled-components";

export const TransactionWrapper = styled.article`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
`;

export const TransactionType = styled.h3`
    margin: 0;
    flex-grow: 1;
    font-size: 16px;
`;

export const TransactionDate = styled.time`
    font-size: 13px;
    color: #8B8B8B;
`;

export const TransactionAmount = styled.p`
    margin: 0;
    font-size: 16px;
    font-weight: 600;
`;

export const TransactionInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 64px;
`;