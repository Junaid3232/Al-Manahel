import { SpacingProps } from 'global-styles';
import React from 'react';
import { Image, ImageProps } from 'react-native';
import { _View } from 'components'


interface OwnProps extends ImageProps {
    radius?: number;
    height?: any;
    width?: any
}

type Props = OwnProps & SpacingProps;

export const _Image: React.FC<Props> = ({
    height,
    width,
    radius,
    style,
    paddings,
    margins,
    ...rest
}) => {
    return (
        <_View
            align="center"
            justify="center"
            paddings={paddings}
            margins={margins}
            height={height}
            width={width}
            style={[{ borderRadius: radius || 0 }, style]}
        >

            <Image
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                {...(rest as any)}
                style={[
                    { borderRadius: radius || 0 },
                    height ? { height } : undefined,
                    width ? { width } : undefined,
                ]}
            />

        </_View>
    );
};
