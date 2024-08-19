[![Build](https://github.com/The-INCLUSIVE-Group-Inc/fullstack/actions/workflows/build.yml/badge.svg)](https://github.com/The-INCLUSIVE-Group-Inc/fullstack/actions/workflows/build.yml)
[![Tests with Vitest plus React-Testing-Library](https://github.com/The-INCLUSIVE-Group-Inc/fullstack/actions/workflows/tests_unit-int.yml/badge.svg)](https://github.com/The-INCLUSIVE-Group-Inc/fullstack/actions/workflows/tests_unit-int.yml)

Here the code for INCLUSIVE project


- Nextjs 14 (using page folder). By force this means also we use React 18 with a functional approach with hooks.

- A CSS in JS approach to style: styled-component v5

- TypeScript 4 to write functions and components (it work like a soft documentation for the code)

- Git and github to keep track of the code
  
- For documentation: right now we have some test and typescript files. Please, prefer to use TypeScrip instead JavaScript


> [!IMPORTANT]
>
>## Formating
 
 - Prettier to format the code
 - We use 2 spaces to indent the code
 - We don't use the final semi colon on javascript or typescript files
 - We remove the unused imports on save
 - And we format the code on save


> [!IMPORTANT]
>
>## Git commits

 - In the commit use a prefix to other developer understand what is about the commit, with `Added`, `Changed`, `Removed` and `Fixed`. Examples:
   1.  `Added` - On `<some_place|some_component>`: `<detail>` → Example: Added - On Dialog Component: animation to open and cclose
   2.  `Changed` - On `<some_place|some_component>`: `<detail>` → Example: Changed - On Dashboard: home active link is now working  
   3.  `Removed` - On `<some_place|some_component>`: `<detail>` → Example: Removed - On Home page: list items 
   4.  `Fixed` - On `<some_place|some_component>`: `<detail>` → Example: Fixed - On Editor: now can be add links
