import type { CollectionConfig } from 'payload';
interface UpdateFieldsConfig {
    schemaPathMap: Record<string, string>;
    updatedCollectionConfig: CollectionConfig;
}
export declare const updateFieldsConfig: (collectionConfig: CollectionConfig, fields: string[]) => UpdateFieldsConfig;
export {};
//# sourceMappingURL=updateFieldsConfig.d.ts.map