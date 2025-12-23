import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import tailwind from 'eslint-plugin-tailwindcss';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const eslintConfig = [...nextCoreWebVitals, ...nextTypescript, {
  ignores: [
    '**/.next/',
  ],
}, {
  name: 'tailwindcss/recommended',
  files: ['**/*.{js,jsx,ts,tsx}'],
  plugins: {
    tailwindcss: tailwind
  },
  rules: {
    ...tailwind.configs["recommended"].rules,
    'tailwindcss/classnames-order': [
      'warn',
      {
        callees: ['clsx', 'cn', 'twMerge']
      }
    ]
  }
}, eslintPluginPrettierRecommended];

export default eslintConfig;
