import { createElement, memo } from "react";
import * as svgs from "public/svgs";

export type IconNames = keyof typeof svgs;

type Props = {
  iconName: IconNames;
  color?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
};

const Icon = (props: Props) => {
  return createElement(svgs[props.iconName], {
    width: props.width ?? null,
    height: props.height ?? null,
    color: props.color ?? null,
    onClick: props.onClick ?? null,
    style: props.style ?? null,
    className: props.className ?? null,
  });
};

export const SVGAtom = memo(Icon);
