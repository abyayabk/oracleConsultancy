import React from 'react';
import { styled, KeyframeEffect } from '@material-ui/core';

export default function Animation() {
    return <Wrapper>words</Wrapper>
}

const animate = KeyframeEffect`
0% { opacity: 0; }
100% {opacity: 1}
`


const Wrapper = styled.span`
    animate-name: ${animate};
    animation-duration: 6s;
`
