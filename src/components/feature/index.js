import React from 'react';
import { Container, Title, SubTitle} from './styles/feature';

export default function Feature({ chidren, ...restProps}) {
    return <Container {...restProps}>{chidren}</Container>
}

Feature.Title = function FeatureTitle({ chidren, ...restProps }) {
    return <Title {...restProps}>{chidren}</Title>
};

Feature.SubTitle = function FeatureSubTitle({ chidren, ...restProps }) {
    return <SubTitle {...restProps}>{chidren}</SubTitle>
};
