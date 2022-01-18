export declare const schema: {
    additionalProperties: boolean;
    definitions: {
        action: {
            additionalProperties: boolean;
            properties: {
                file: {
                    type: string;
                };
                on: {
                    enum: string[];
                    type: string;
                };
            };
            required: string[];
        };
        auth: {
            oneOf: {
                $ref: string;
            }[];
        };
        authOptions: {
            additionalProperties: boolean;
            properties: {
                next: {
                    $ref: string;
                };
                password: {
                    $ref: string;
                };
                submit: {
                    $ref: string;
                };
                user: {
                    $ref: string;
                };
            };
            required: string[];
            type: string;
        };
        fieldInput: {
            properties: {
                selector: {
                    type: string;
                };
                value: {
                    type: string;
                };
            };
            required: string[];
            type: string;
        };
        httpAuthOptions: {
            additionalProperties: boolean;
            properties: {
                password: {
                    type: string;
                };
                user: {
                    type: string;
                };
            };
            required: string[];
            type: string;
        };
        submitInput: {
            properties: {
                selector: {
                    type: string;
                };
            };
            required: string[];
            type: string;
        };
    };
    properties: {
        actions: {
            items: {
                $ref: string;
            };
            type: string;
        };
        actionsConfig: {
            type: string;
        };
        auth: {
            $ref: string;
        };
        browser: {
            regexp: string;
            type: string;
        };
        detached: {
            type: string;
        };
        headless: {
            type: string;
        };
        ignoreHTTPSErrors: {
            type: string;
        };
        puppeteerOptions: {
            type: string;
        };
        waitUntil: {
            enum: string[];
            type: string;
        };
    };
};
//# sourceMappingURL=schema.d.ts.map