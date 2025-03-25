'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEditorConfigContext } from '@payloadcms/richtext-lexical/client';
import { FieldDescription, Popup, useDocumentDrawer, useField } from '@payloadcms/ui';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { PLUGIN_INSTRUCTIONS_TABLE } from '../../defaults.js';
import { setSafeLexicalState } from '../../utilities/setSafeLexicalState.js';
import { PluginIcon } from '../Icons/Icons.js';
import { UndoRedoActions } from './UndoRedoActions.js';
import styles from './compose.module.css';
import { useMenu } from './hooks/menu/useMenu.js';
import { useGenerate } from './hooks/useGenerate.js';
function findParentWithClass(element, className) {
    // Base case: if the element is null or we've reached the top of the DOM
    if (!element || element === document.body) {
        return null;
    }
    // Check if the current element has the class we're looking for
    if (element.classList.contains(className)) {
        return element;
    }
    // Recursively call the function on the parent element
    return findParentWithClass(element.parentElement, className);
}
export const Compose = ({ descriptionProps, instructionId })=>{
    const [DocumentDrawer, _, { closeDrawer, openDrawer }] = useDocumentDrawer({
        id: instructionId,
        collectionSlug: PLUGIN_INSTRUCTIONS_TABLE
    });
    const { field: { type: fieldType }, path: pathFromContext } = descriptionProps || {};
    const { editor: lexicalEditor, editorContainerRef } = useEditorConfigContext();
    // Below snippet is used to show/hide the actions menu on AI enabled fields
    const [input, setInput] = useState(null);
    const actionsRef = useRef(null);
    // Set input element for current field
    useEffect(()=>{
        if (!actionsRef.current) return;
        const fieldId = `field-${pathFromContext.replace(/\./g, '__')}`;
        const inputElement = document.getElementById(fieldId);
        if (!inputElement && fieldType === 'richText') {
            setInput(editorContainerRef.current);
        } else {
            actionsRef.current.setAttribute('for', fieldId);
            setInput(inputElement);
        }
    }, [
        pathFromContext,
        actionsRef,
        editorContainerRef
    ]);
    // Show or hide actions menu on field
    useEffect(()=>{
        if (!input || !actionsRef.current) return;
        actionsRef.current.classList.add(styles.actions_hidden);
        input.addEventListener('click', (event)=>{
            document.querySelectorAll('.ai-plugin-active')?.forEach((element)=>{
                const actionElement = element.querySelector(`.${styles.actions}`);
                if (actionElement) {
                    actionElement.classList.add(styles.actions_hidden);
                    element.classList.remove('ai-plugin-active');
                }
            });
            actionsRef.current.classList.remove(styles.actions_hidden);
            const parentWithClass = findParentWithClass(event.target, 'field-type');
            parentWithClass.classList.add('ai-plugin-active');
        });
    }, [
        input,
        actionsRef
    ]);
    const [isProcessing, setIsProcessing] = useState(false);
    const { generate, isLoading, stop } = useGenerate({
        instructionId
    });
    const { ActiveComponent, Menu } = useMenu({
        onCompose: async ()=>{
            console.log('Composing...');
            setIsProcessing(true);
            await generate({
                action: 'Compose'
            }).finally(()=>{
                setIsProcessing(false);
            });
        },
        onExpand: async ()=>{
            console.log('Expanding...');
            await generate({
                action: 'Expand'
            });
        },
        onProofread: async ()=>{
            console.log('Proofreading...');
            await generate({
                action: 'Proofread'
            });
        },
        onRephrase: async ()=>{
            console.log('Rephrasing...');
            await generate({
                action: 'Rephrase'
            });
        },
        onSettings: openDrawer,
        onSimplify: async ()=>{
            console.log('Simplifying...');
            await generate({
                action: 'Simplify'
            });
        },
        onSummarize: async ()=>{
            console.log('Summarizing...');
            await generate({
                action: 'Summarize'
            });
        },
        onTranslate: async (data)=>{
            console.log('Translating...');
            await generate({
                action: 'Translate',
                params: data
            });
        }
    });
    const { setValue } = useField({
        path: pathFromContext
    });
    const setIfValueIsLexicalState = useCallback((val)=>{
        if (val.root && lexicalEditor) {
            setSafeLexicalState(JSON.stringify(val), lexicalEditor);
        }
    // DO NOT PROVIDE lexicalEditor as a dependency, it freaks out and does not update the editor after first undo/redo
    }, []);
    return /*#__PURE__*/ _jsxs(React.Fragment, {
        children: [
            /*#__PURE__*/ _jsxs("label", {
                className: `${styles.actions}`,
                onClick: (e)=>e.preventDefault(),
                ref: actionsRef,
                role: "presentation",
                children: [
                    /*#__PURE__*/ _jsx(DocumentDrawer, {
                        onSave: ()=>{
                            closeDrawer();
                        }
                    }),
                    /*#__PURE__*/ _jsx(Popup, {
                        button: /*#__PURE__*/ _jsx(PluginIcon, {
                            isLoading: isProcessing || isLoading
                        }),
                        render: ({ close })=>{
                            return /*#__PURE__*/ _jsx(Menu, {
                                isLoading: isProcessing || isLoading,
                                onClose: close
                            });
                        },
                        verticalAlign: "bottom"
                    }),
                    /*#__PURE__*/ _jsx(ActiveComponent, {
                        isLoading: isProcessing || isLoading,
                        stop: stop
                    }),
                    /*#__PURE__*/ _jsx(UndoRedoActions, {
                        onChange: (val)=>{
                            setValue(val);
                            setIfValueIsLexicalState(val);
                        }
                    })
                ]
            }),
            descriptionProps ? /*#__PURE__*/ _jsx("div", {
                children: /*#__PURE__*/ _jsx(FieldDescription, {
                    ...descriptionProps
                })
            }) : null
        ]
    });
};

//# sourceMappingURL=Compose.js.map