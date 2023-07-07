import React from 'react';
import { SpanTag } from './Span.style';

function Span({children}) {
    return (
        <SpanTag>
            {children}
        </SpanTag>
    );
}

export default Span;