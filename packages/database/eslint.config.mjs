import { config as baseConfig } from '@repo/eslint-config/base'

/** @type {import("eslint").Linter.Config} */
export default [
  ...baseConfig,
  {    
    rules: {
      "turbo/no-undeclared-env-vars": [
        "error",
        {
          allowList: ["NODE_ENV"],
        },
      ],
    },}

];

