import React from "react";
import styled from "styled-components";
import Flex from "../../components/Box/Flex";
import { MotionBox } from "../../components/Box";
import { ArrowBackIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { ModalProps } from "./types";
import { mountAnimation } from "../../components/BottomDrawer/styles";

export const ModalHeader = styled.div<{ background?: string }>`
  align-items: center;
  background: ${({ background }) => background || "transparent"};
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  display: flex;
  padding: 12px 24px;
`;

export const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`;

export const ModalBody = styled(Flex)`
  flex-direction: column;
  max-height: 90vh;
  max-height: calc(var(--vh, 1vh) * 90);
  overflow-y: auto;
`;

export const ModalCloseButton: React.FC<{ onDismiss: ModalProps["onDismiss"] }> = ({ onDismiss }) => {
  return (
    <IconButton variant="text" onClick={onDismiss} aria-label="Close the dialog">
      <CloseIcon color="primary" />
    </IconButton>
  );
};

export const ModalBackButton: React.FC<{ onBack: ModalProps["onBack"] }> = ({ onBack }) => {
  return (
    <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
      <ArrowBackIcon color="primary" />
    </IconButton>
  );
};

export const ModalContainer = styled(MotionBox)<{ minWidth: string }>`
  overflow: hidden;
  background: ${({ theme }) => theme.modal.background};
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 32px;
  width: 100%;
  max-height: 100vh;
  max-height: calc(var(--vh, 1vh) * 100);
  z-index: ${({ theme }) => theme.zIndices.modal};

  ${({ theme }) => theme.mediaQueries.xs} {
    width: 100%;
    position: absolute;
    min-width: ${({ minWidth }) => minWidth};
    bottom: 0;
    border-radius: 32px 32px 0px 0px;
    max-width: none !important;
    max-height: 90vh;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: auto;
    position: auto;
    bottom: auto;
    border-radius: 32px;
    max-width: 100%;
    max-height: 100vh;
  }
`;
