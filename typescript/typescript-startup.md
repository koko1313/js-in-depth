# TypeScript Startup

### What is TypeScript?
- Developed by Microsoft
- Typed superset of JavaScript
- Compiles down to plain JavaScript
- `.ts` is the extention to TypeScript files

### Enviorment Setup
- Install Node.js
- Run the command `npm install -g typescript` to install TypeScript globally
- To compile TypeScript file to JavaScript run the command `tsc file_name.ts` or just `tsc fine_name`
- `tsc file_name --watch` will automatically recompile the file

### Character traits
The `.ts` files are treated like scripts, rather than modules. Modules has own scope, while the scripts uses the global scope. To get rid or this error add empty export statement at the top of `.ts` file:

```typescript
export {}
```