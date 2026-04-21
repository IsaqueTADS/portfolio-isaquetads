# AGENTS.md

## Comandos

```bash
pnpm dev        # Dev server (Turbopack)
pnpm build      # Production build
pnpm start      # Production server
pnpm lint       # ESLint
pnpm format    # Prettier (escreve nos arquivos!)
pnpm typecheck # TypeScript
```

## Toolbox

- **Context7 MCP**: sempre para consultas de documentação
- **shadcn/ui**: `npx shadcn@latest add <componente>`

## Regras importantes

- **Tailwind v4**: sem `tailwind.config.js` - configuração via CSS (`src/app/globals.css`)
- **Cores**: usar tokens do tema (`text-background`, `bg-foreground`, etc.) - nunca hard-coded
- **Button**: sempre usar shadcn `@/components/ui/button`, nunca `<button>` nativo
- **Imagens**: sempre usar `<Image>` do Next.js
- **Componentes**: um por arquivo, separar em `_components` para páginas
- **Comentários**: nunca escrever
- **Verificação**: use lint + typecheck, não `pnpm dev`

## Estrutura

```
src/app/               # Rotas Next.js (App Router)
├── (portfolio)/       # Route group
│   ├── _components/   # Componentes locais
│   ├── about/
│   ├── projects/
│   └── ...
src/components/ui/    # shadcn/ui
src/lib/utils.ts      # cn(), utilitários
src/components/       # Componentes globais
```

## Info adicional

- **Idioma**: pt-BR (definido em `src/app/layout.tsx`)
- **Fontes**: Inter, Geist, Manrope (via `next/font/google`)
- **Stack**: Next.js 16, React 19, TypeScript
- **Testes**: não configurado

## Commits

- Faça commits pequenos e atômicos (uma ação por commit)
- Sempre peça aprovação do usuário antes de commitar
- **Nunca** faça push para o repositório remoto sem autorização explícita