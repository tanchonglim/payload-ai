export const setSafeLexicalState = (state, editorInstance, action = 'replace')=>{
    try {
        const editorState = editorInstance.parseEditorState(state);
        if (editorState.isEmpty()) {
            return;
        }
        editorInstance.setEditorState(editorState);
    } catch (e) {
    // console.error('Shh....:', e)
    }
};

//# sourceMappingURL=setSafeLexicalState.js.map