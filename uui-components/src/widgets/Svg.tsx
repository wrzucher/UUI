import * as React from 'react';
import { Icon, IHasCX, IHasForwardedRef, IHasRawProps } from '@epam/uui-core';

interface ISvgProps {
    className: string;
    fill: string;
    height?: number;
    width?: number;
}

interface SvgProps extends IHasCX, IHasRawProps<SVGSVGElement>, IHasForwardedRef<SVGSVGElement> {
    svg?: Icon;
    fillColor?: string;
    width?: number;
    height?: number;
}

export const Svg = React.forwardRef<SVGSVGElement, SvgProps>((props, ref) => {
    if (!props.svg) return null;

    const { svg, cx, fillColor, height, width } = props;

    const svgProps: ISvgProps = {
        className: cx,
        fill: fillColor,
        ...props.rawProps,
    };

    if (height !== undefined) svgProps.height = height;
    if (width !== undefined) svgProps.width = width;

    return React.createElement(svg, { ...svgProps, ref });
});