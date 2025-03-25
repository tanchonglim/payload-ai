'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { FieldProvider } from '../../providers/FieldProvider/FieldProvider.js';
import { useInstructions } from '../../providers/InstructionsProvider/useInstructions.js';
import { Compose } from '../../ui/Compose/Compose.js';
export const ComposeField = (props)=>{
    const { id: instructionId } = useInstructions({
        schemaPath: props?.schemaPath
    });
    return /*#__PURE__*/ _jsx(FieldProvider, {
        context: {
            type: props?.field.type,
            path: props?.path,
            schemaPath: props?.schemaPath
        },
        children: /*#__PURE__*/ _jsx(Compose, {
            descriptionProps: props,
            instructionId: instructionId
        })
    });
};

//# sourceMappingURL=ComposeField.js.map