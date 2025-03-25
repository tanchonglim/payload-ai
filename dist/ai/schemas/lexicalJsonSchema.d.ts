export declare const documentSchema: {
    type: string;
    $schema: string;
    additionalProperties: boolean;
    definitions: {
        TextNode: {
            type: string;
            additionalProperties: boolean;
            properties: {
                type: {
                    type: string;
                    enum: string[];
                };
                detail: {
                    type: string;
                    description: string;
                    enum: number[];
                    examples: {
                        description: string;
                        value: number;
                    }[];
                };
                direction: {
                    type: string[];
                    enum: string[];
                };
                format: {
                    type: string;
                    description: string;
                };
                indent: {
                    type: string;
                };
                mode: {
                    type: string;
                    description: string;
                    enum: number[];
                    examples: {
                        description: string;
                        value: number;
                    }[];
                };
                style: {
                    type: string;
                    description: string;
                };
                text: {
                    type: string;
                };
                version: {
                    type: string;
                };
            };
            required: string[];
        };
        TableCellNode: {
            type: string;
            additionalProperties: boolean;
            properties: {
                type: {
                    type: string;
                    enum: string[];
                };
                children: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                };
                colSpan: {
                    type: string;
                };
                direction: {
                    type: string[];
                    enum: string[];
                };
                headerState: {
                    type: string;
                };
                indent: {
                    type: string;
                };
                version: {
                    type: string;
                };
                width: {
                    type: string[];
                    enum: any[];
                };
            };
            required: string[];
        };
        TableRowNode: {
            type: string;
            additionalProperties: boolean;
            properties: {
                type: {
                    type: string;
                    enum: string[];
                };
                children: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                };
                height: {
                    type: string;
                };
            };
            required: string[];
        };
        TableNode: {
            type: string;
            additionalProperties: boolean;
            properties: {
                type: {
                    type: string;
                    enum: string[];
                };
                children: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                };
            };
            required: string[];
        };
        HeadingNode: {
            type: string;
            additionalProperties: boolean;
            properties: {
                type: {
                    type: string;
                    enum: string[];
                };
                children: {
                    type: string;
                    items: {
                        anyOf: {
                            $ref: string;
                        }[];
                    };
                };
                direction: {
                    type: string[];
                    enum: string[];
                };
                indent: {
                    type: string;
                };
                tag: {
                    type: string;
                    enum: string[];
                };
                version: {
                    type: string;
                };
            };
            required: string[];
        };
        ParagraphNode: {
            type: string;
            additionalProperties: boolean;
            properties: {
                type: {
                    type: string;
                    enum: string[];
                };
                children: {
                    type: string;
                    items: {
                        anyOf: {
                            $ref: string;
                        }[];
                    };
                };
                direction: {
                    type: string[];
                    enum: string[];
                };
                format: {
                    type: string;
                    enum: string[];
                };
                indent: {
                    type: string;
                };
                textFormat: {
                    type: string;
                };
                textStyle: {
                    type: string;
                    description: string;
                };
                version: {
                    type: string;
                };
            };
            required: string[];
        };
        LinkNode: {
            type: string;
            additionalProperties: boolean;
            properties: {
                type: {
                    type: string;
                    enum: string[];
                };
                children: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                };
                url: {
                    type: string;
                };
            };
            required: string[];
        };
        ListItemNode: {
            type: string;
            additionalProperties: boolean;
            properties: {
                type: {
                    type: string;
                    enum: string[];
                };
                children: {
                    type: string;
                    items: {
                        anyOf: {
                            $ref: string;
                        }[];
                    };
                };
            };
            required: string[];
        };
        ListNode: {
            type: string;
            additionalProperties: boolean;
            properties: {
                type: {
                    type: string;
                    enum: string[];
                };
                children: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                };
                listType: {
                    type: string;
                    enum: string[];
                };
            };
            required: string[];
        };
        QuoteNode: {
            type: string;
            additionalProperties: boolean;
            properties: {
                type: {
                    type: string;
                    enum: string[];
                };
                children: {
                    type: string;
                    items: {
                        anyOf: {
                            $ref: string;
                        }[];
                    };
                };
            };
            required: string[];
        };
        CodeNode: {
            type: string;
            additionalProperties: boolean;
            properties: {
                type: {
                    type: string;
                    enum: string[];
                };
                code: {
                    type: string;
                };
                language: {
                    type: string;
                };
            };
            required: string[];
        };
        HorizontalRuleNode: {
            type: string;
            additionalProperties: boolean;
            properties: {
                type: {
                    type: string;
                    enum: string[];
                };
            };
            required: string[];
        };
        ImageNode: {
            type: string;
            additionalProperties: boolean;
            properties: {
                type: {
                    type: string;
                    enum: string[];
                };
                alt: {
                    type: string;
                };
                caption: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                };
                src: {
                    type: string;
                };
            };
            required: string[];
        };
        RootNode: {
            type: string;
            additionalProperties: boolean;
            properties: {
                type: {
                    type: string;
                    enum: string[];
                };
                children: {
                    type: string;
                    items: {
                        anyOf: {
                            $ref: string;
                        }[];
                    };
                };
                direction: {
                    type: string[];
                    enum: string[];
                };
                indent: {
                    type: string;
                };
                version: {
                    type: string;
                };
            };
            required: string[];
        };
    };
    properties: {
        root: {
            $ref: string;
        };
    };
    required: string[];
};
export declare const lexicalJsonSchema: (customNodes?: any[]) => any;
//# sourceMappingURL=lexicalJsonSchema.d.ts.map