import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useHistory } from './hooks/useHistory.js';
import React, { useCallback, useEffect, useState } from 'react';
export const UndoRedoActions = ({ onChange })=>{
    const { canRedo, canUndo, redo, undo } = useHistory();
    const redoHistoryValue = useCallback((event)=>{
        event.stopPropagation();
        const value = redo();
        if (value) {
            onChange(value);
        }
    }, [
        redo
    ]);
    const undoHistoryValue = useCallback((event)=>{
        event.stopPropagation();
        const value = undo();
        if (value) {
            onChange(value);
        }
    }, [
        undo
    ]);
    // Delay rendering until the client-side hydration is complete
    const [isMounted, setIsMounted] = useState(false);
    useEffect(()=>{
        setIsMounted(true);
    }, []);
    if (!isMounted || !canUndo && !canRedo) return null;
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx("button", {
                onClick: undoHistoryValue,
                type: "button",
                disabled: !canUndo,
                className: `btn btn--size-small btn--style-secondary ${!canUndo && 'btn--disabled'}`,
                style: {
                    marginBlock: 0
                },
                children: "Undo"
            }),
            /*#__PURE__*/ _jsx("button", {
                onClick: redoHistoryValue,
                type: "button",
                disabled: !canRedo,
                className: `btn btn--size-small btn--style-secondary ${!canRedo && 'btn--disabled'}`,
                style: {
                    marginBlock: 0
                },
                children: "Redo"
            })
        ]
    });
};

//# sourceMappingURL=UndoRedoActions.js.map