import { anthropic } from '@ai-sdk/anthropic';
import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';
import { PLUGIN_DEFAULT_ANTHROPIC_MODEL, PLUGIN_DEFAULT_OPENAI_MODEL } from '../../defaults.js';
export const systemGenerate = async (data)=>{
    const { prompt, system } = data;
    let model = null;
    if (process.env.OPENAI_API_KEY) {
        model = openai(PLUGIN_DEFAULT_OPENAI_MODEL);
    } else if (process.env.ANTHROPIC_API_KEY) {
        model = anthropic(PLUGIN_DEFAULT_ANTHROPIC_MODEL);
    } else {
        throw new Error('- AI Plugin: Please check your environment variables!');
    }
    const { text } = await generateText({
        model,
        prompt,
        system
    });
    return text;
};

//# sourceMappingURL=systemGenerate.js.map