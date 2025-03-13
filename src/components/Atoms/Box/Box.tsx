import styled, { css } from "styled-components";
import { mediaSize } from "../../../Utils/breakpoints";

// Helpers de media queries
const media = {
  lg: (...args: Parameters<typeof css>) => css`
    @media (min-width: ${mediaSize.lg}px) {
      ${css(...args)}
    }
  `,
  md: (...args: Parameters<typeof css>) => css`
    @media (min-width: ${mediaSize.md}px) {
      ${css(...args)}
    }
  `,
  sm: (...args: Parameters<typeof css>) => css`
    @media (max-width: ${mediaSize.xs}px) {
      ${css(...args)}
    }
  `,
  xs: (...args: Parameters<typeof css>) => css`
    @media (max-width: ${mediaSize.xs}px) {
      ${css(...args)}
    }
  `,
};

export const Box = styled.div<{
  $position?: string;
  $flex?: boolean;
  $flexDirection?: string;
  $justifycenter?: boolean;
  $aligncenter?: boolean;
  $justifystart?: boolean;
  $justifyevenly?: boolean;
  $justifyend?: boolean;
  $alignstart?: boolean;
  $alignend?: boolean;
  $justifybetween?: boolean;
  $justifyaround?: boolean;
  $alignbetween?: boolean;
  $alignaround?: boolean;
  $backgroundcolor?: string;
  $width?: string;
  $height?: string;
  $padding?: string;
  $margin?: string;
  $radius?: string;
  $lgBackgroundColor?: string;
  $mdBackgroundColor?: string;
  $smBackgroundColor?: string;
  $xsBackgroundColor?: string;
  $lgWidth?: string;
  $mdWidth?: string;
  $smWidth?: string;
  $xsWidth?: string;
  $lgDisplay?: string;
  $mdDisplay?: string;
  $smDisplay?: string;
  $xsDisplay?: string;
}>`
  position: ${({ $position }) => $position || "static"};
  display: ${({ $flex }) => ($flex ? "flex" : "block")};
  justify-content: ${({ $justifycenter, $justifystart, $justifyevenly, $justifyend, $justifybetween, $justifyaround }) =>
    $justifycenter ? "center" :
    $justifystart ? "flex-start" :
    $justifyevenly ? "space-evenly" :
    $justifyend ? "flex-end" :
    $justifybetween ? "space-between" :
    $justifyaround ? "space-around" : "flex-start"};
  align-items: ${({ $aligncenter, $alignstart, $alignend, $alignbetween, $alignaround }) =>
    $aligncenter ? "center" :
    $alignstart ? "flex-start" :
    $alignend ? "flex-end" :
    $alignbetween ? "space-between" :
    $alignaround ? "space-around" : "stretch"};
  background: ${({ $backgroundcolor }) => $backgroundcolor || "transparent"};
  width: ${({ $width }) => $width || "auto"};
  height: ${({ $height }) => $height || "auto"};
  padding: ${({ $padding }) => $padding || "0"};
  margin: ${({ $margin }) => $margin || "0"};
  border-radius: ${({ $radius }) => $radius || "0"};
  flex-direction: ${({ $flexDirection }) => $flexDirection || "row"};;

  ${({ $lgBackgroundColor }) => $lgBackgroundColor && media.lg`background-color: ${$lgBackgroundColor};`}
  ${({ $mdBackgroundColor }) => $mdBackgroundColor && media.lg`background-color: ${$mdBackgroundColor};`}
  ${({ $smBackgroundColor }) => $smBackgroundColor && media.sm`background-color: ${$smBackgroundColor};`}
  ${({ $xsBackgroundColor }) => $xsBackgroundColor && media.xs`background-color: ${$xsBackgroundColor};`}

  ${({ $lgWidth }) => $lgWidth && media.lg`width: ${$lgWidth};`}
  ${({ $mdWidth }) => $mdWidth && media.md`width: ${$mdWidth};`}
  ${({ $smWidth }) => $smWidth && media.sm`width: ${$smWidth};`}
  ${({ $xsWidth }) => $xsWidth && media.xs`width: ${$xsWidth};`}

  ${({ $lgDisplay }) => $lgDisplay && media.lg`display: ${$lgDisplay};`}
  ${({ $mdDisplay }) => $mdDisplay && media.md`display: ${$mdDisplay};`}
  ${({ $smDisplay }) => $smDisplay && media.sm`display: ${$smDisplay};`}
  ${({ $xsDisplay }) => $xsDisplay && media.xs`display: ${$xsDisplay};`}
`;

