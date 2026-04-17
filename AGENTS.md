# AGENTS.md

## Comandos

```bash
npm run dev      # Servidor de desenvolvimento (Turbopack)
npm run build    # Build de produção
npm run start    # Iniciar servidor de produção
npm run lint     # ESLint
npm run format   # Prettier (escreve nos arquivos!)
npm run typecheck # TypeScript
```

## Toolbox

- **Context7 MCP**: sempre para consultas de documentação
- **shadcn/ui com baseUI**: `npx shadcn@latest add <componente>`
- **pnpm**: package manager

## Regras importantes

- **Tailwind v4**: sem `tailwind.config.js` - configuração via CSS (`src/app/globals.css`)
- **Cores do tema**: usar tokens do tema (`text-background`, `bg-foreground`, etc.) - nunca hard-coded
- **Button**: sempre usar componente shadcn `@/components/ui/button`, nunca `<button>` nativo
- **Imagens**: sempre usar `<Image>` do Next.js
- **Componentes**: nunca mais de um por arquivo
- **Separação**: sempre separar em componentes quando a página tem múltiplas seções lógica (criar pasta `_components` na página)
- **Comentários**: nunca escrever
- **Verificação**: não usar `npm run dev` para testar; use lint + typecheck

## Estrutura

- `src/app/` - rotas do Next.js (App Router)
- `(portfolio)` - route group para organização
- `_components` - componentes locais da página
- `src/components/ui/` - componentes shadcn
- `src/lib/utils.ts` - utilitários (cn, etc)
- `src/components/theme-provider.tsx` - envolve a app
- **Idioma**: pt-BR (definido no root layout)
