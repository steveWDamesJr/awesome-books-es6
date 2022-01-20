import { ConnectorConfig, HintsConfigObject, UserConfig } from '@hint/utils';
import { CreateAnalyzerOptions } from './types';
export declare class Configuration {
    readonly browserslist: string[];
    readonly connector: ConnectorConfig | undefined;
    readonly formatters: string[] | undefined;
    readonly ignoredUrls: Map<string, RegExp[]>;
    readonly parsers: string[] | undefined;
    readonly hints: HintsConfigObject;
    readonly hintsTimeout: number;
    readonly extends: string[] | undefined;
    readonly language: string | undefined;
    private constructor();
    private static cleanHints;
    static loadConfigFile(filePath: string): UserConfig | null;
    static toAbsolutePaths(config: UserConfig | null, configRoot: string): UserConfig | null;
    static fromConfig(config: UserConfig | null, options?: CreateAnalyzerOptions): Configuration;
    static validateConnectorConfig(config: Configuration): boolean;
    static validateHintsConfig(config: Configuration): {
        invalid: string[];
        valid: string[];
    };
    static getFilenameForDirectory: (directory: string) => string | null;
}
//# sourceMappingURL=config.d.ts.map