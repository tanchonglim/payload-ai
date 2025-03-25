'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useConfig } from '@payloadcms/ui';
import React, { createContext, useEffect, useState } from 'react';
import { PLUGIN_FETCH_FIELDS_ENDPOINT } from '../../defaults.js';
const initialContext = {
    field: undefined,
    instructions: undefined,
    path: '',
    schemaPath: ''
};
export const InstructionsContext = /*#__PURE__*/ createContext(initialContext);
export const InstructionsProvider = ({ children })=>{
    const [instructions, setInstructionsState] = useState({});
    const config = useConfig();
    if (!config) {
        return null // or a loading indicator
        ;
    }
    const { routes, serverURL } = config.config;
    const { api } = routes;
    // This is here because each field have separate instructions and
    // their ID is needed to edit them for Drawer
    useEffect(()=>{
        fetch(`${serverURL}${api}${PLUGIN_FETCH_FIELDS_ENDPOINT}`).then(async (res)=>{
            await res.json().then((data)=>{
                setInstructionsState(data);
            });
        }).catch((err)=>{
            console.error('InstructionsProvider:', err);
        });
    }, []);
    return /*#__PURE__*/ _jsx(InstructionsContext.Provider, {
        value: {
            instructions
        },
        children: children
    });
};

//# sourceMappingURL=InstructionsProvider.js.map