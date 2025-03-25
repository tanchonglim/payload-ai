import React from 'react';
export declare const FieldContext: React.Context<{
    path?: string;
    schemaPath?: string;
    type?: string;
}>;
export declare const FieldProvider: ({ children, context, }: {
    children: React.ReactNode;
    context: {
        path: string;
        schemaPath: unknown;
        type: unknown;
    };
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=FieldProvider.d.ts.map