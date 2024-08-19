declare module 'openai-token-cost-calculator-updated' {

    interface LanguageModelCostOptions {
        promptTokens?: number;
        completionTokens?: number;
    }

    interface CostResult {
        promptCost?: number;
        completionCost?: number;
        totalCost: number;
        formattedTotalCost: string;
    }

    function calculateLanguageModelCost(modelName: string, options: LanguageModelCostOptions): CostResult;

    function calculateFineTuningModelCost(modelName: string, tokens: number, operation: string): CostResult;

    function calculateEmbeddingModelCost(modelName: string, tokens: number): CostResult;

    function calculateImageModelCost(modelName: string, quality: string, resolution: string, images: number): CostResult;

    function calculateAudioModelCost(modelName: string, minutes: number): CostResult;

    export {
        calculateLanguageModelCost,
        calculateFineTuningModelCost,
        calculateEmbeddingModelCost,
        calculateImageModelCost,
        calculateAudioModelCost
    };
}