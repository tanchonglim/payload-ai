'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FieldLabel, useField } from '@payloadcms/ui';
import React from 'react';
import { AutocompleteTextField } from '../../libraries/autocomplete/AutocompleteTextArea.js';
import { useInstructions } from '../../providers/InstructionsProvider/useInstructions.js';
//NOTE: HMR does not work for plugin components anymore, I think it has to do with importMap/ string path
export const PromptEditorField = (props)=>{
    const { field, path: pathFromContext } = props;
    const { setValue, value } = useField({
        path: pathFromContext
    });
    const { promptEditorSuggestions } = useInstructions();
    return /*#__PURE__*/ _jsxs("div", {
        className: "field-type textarea",
        children: [
            /*#__PURE__*/ _jsx(FieldLabel, {
                label: field.label
            }),
            /*#__PURE__*/ _jsx(AutocompleteTextField, {
                changeOnSelect: (trigger, selected)=>{
                    return trigger + selected + ' }}';
                },
                onChange: (val)=>{
                    setValue(val);
                },
                options: promptEditorSuggestions,
                trigger: [
                    '{{ '
                ],
                value: value
            })
        ]
    });
};

//# sourceMappingURL=PromptEditorField.js.map