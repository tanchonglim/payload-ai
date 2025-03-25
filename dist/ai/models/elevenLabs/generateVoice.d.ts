import { type ElevenLabs } from 'elevenlabs';
type ElevenLabsTextToSpeechOptions = {
    voice_id: string;
} & Pick<ElevenLabs.TextToSpeechWithTimstampsRequest, 'model_id' | 'next_text' | 'previous_text' | 'seed' | 'voice_settings'>;
export declare const generateVoice: (text: string, options: ElevenLabsTextToSpeechOptions) => Promise<{
    alignment: string[];
    buffer: Buffer<ArrayBuffer>;
}>;
export {};
//# sourceMappingURL=generateVoice.d.ts.map