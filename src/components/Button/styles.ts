import styled, { css } from "styled-components/native";

import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type ButtonProps = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<ButtonProps>`
  flex: 1;

  max-height: 56px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

  border-radius: 6px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;
