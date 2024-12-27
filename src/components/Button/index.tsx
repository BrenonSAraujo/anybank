import styled, { css } from "styled-components";
import React from "react";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom"; // Importando o Link do React Router

interface ButtonBaseProps {
  outline?: boolean;
}

interface CustomLinkProps extends ButtonBaseProps, RouterLinkProps {
  link: true;
}

interface ButtonProps extends ButtonBaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  link?: false;
}

type Props = CustomLinkProps | ButtonProps;

const sharedStyles = css<{ $outline?: boolean }>`
  cursor: pointer;
  background-color: ${({ $outline }) => ($outline ? 'transparent' : '#90DDFF')};
  border: 2px solid #90DDFF;
  border-radius: 16px;
  color: ${({ $outline }) => ($outline ? '#90DDFF' : '#000')};
  font-size: 16px;
  font-weight: 600;
  padding: 8px 16px;
  white-space: nowrap;

  &:hover {
    opacity: 0.8;
  }
`;

const ButtonElement = styled.button<{ $outline?: boolean }>`
  ${sharedStyles}
`;

const LinkElement = styled(RouterLink)<{ $outline?: boolean }>`
  ${sharedStyles}
  text-decoration: none;
`;

export const Button: React.FC<Props> = ({ outline, link, ...props }) => {
  if (link) {
    return <LinkElement $outline={outline} {...(props as RouterLinkProps)} />;
  }
  return <ButtonElement $outline={outline} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)} />;
};