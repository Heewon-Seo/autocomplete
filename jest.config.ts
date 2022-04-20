import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
        "^.+\\.(js|jsx)$": "babel-jest",
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    verbose: true,
    setupFiles: ['./jest.setup.ts'],
};
export default config;