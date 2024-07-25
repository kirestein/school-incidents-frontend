import { IconButton, IconButtonProps } from "@mui/material";
import styled from "styled-components";

interface ITitleContainerProps {
  $lineColor: string;
}

export const Container = styled.div`
  grid-area: CT;
  width: 100wh;
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  background-color: ${(props) => props.theme.colors.primary};
  padding-left: 1rem;
  height: 2.5rem;
  /* border-bottom: 1px solid #fff; */
`;
export const LeftContainer = styled.div`
  display: flex;
`;

export const TitleContainer = styled.div<ITitleContainerProps>`
  > h1 {
    color: ${(props) => props.theme.colors.white};
    &::after {
      content: "";
      display: block;
      width: 100wh;
      border-bottom: 10px solid ${(props) => props.$lineColor};
    }
  }
`;

export const Controllers = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ColorIconButton = styled(IconButton)<IconButtonProps>(
  ({ theme }) => ({
    color: theme.colors.white,
    "&:hover": {
      color: theme.colors.secondary,
    },
  })
);

export const DrawerContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  backgroundColor: theme.colors.secondary,
}));

export const TempoContainer = styled.div`
  display: flex;
  align-items: center;
`;
