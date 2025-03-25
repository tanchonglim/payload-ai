'use client'

import type { FieldDescriptionServerProps } from 'payload'

import React from 'react'

import { FieldProvider } from '../../providers/FieldProvider/FieldProvider.js'
import { useInstructions } from '../../providers/InstructionsProvider/useInstructions.js'
import { Compose } from '../../ui/Compose/Compose.js'

export const ComposeField = (props: FieldDescriptionServerProps) => {
  const { id: instructionId } = useInstructions({
    schemaPath: (props as any)?.schemaPath,
  })

  return (
    <FieldProvider
      context={{
        type: props?.field.type,
        path: props?.path,
        schemaPath: (props as any)?.schemaPath,
      }}
    >
      <Compose descriptionProps={props as any} instructionId={instructionId} />
    </FieldProvider>
  )
}
