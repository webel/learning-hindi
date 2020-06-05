import React from 'react';
import { Card, Text, jsx } from "theme-ui"

export const iastEnglishDetails = ({ english, iast }) => {
    return (
        <>
            {iast && <Text my={20}>{iast}</Text>}
            <Text mb={20} variant="caps">
                {english}
            </Text>
        </>)
}