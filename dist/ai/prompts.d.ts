import type { ActionMenuItems } from '../types.js';
type ActionPromptOptions = {
    layout?: string;
    locale?: string;
    prompt?: string;
    systemPrompt?: string;
};
type ActionPrompt = {
    layout?: (options?: ActionPromptOptions) => string;
    name: ActionMenuItems;
    system: (options: ActionPromptOptions) => string;
};
export declare const defaultSystemPrompt = "IMPORTANT INSTRUCTION:\nProduce only the requested output text.\nDo not add any explanations, comments, or engagement.\nDo not use quotation marks in the response.\nBEGIN OUTPUT:";
export declare const defaultPrompts: ActionPrompt[];
export declare const seedPrompts: ({ fieldLabel, fieldSchemaPaths, fieldType, path }: {
    fieldLabel: any;
    fieldSchemaPaths: any;
    fieldType: any;
    path: any;
}) => {
    prompt: string;
    system: string;
};
export {};
//# sourceMappingURL=prompts.d.ts.map