# AGENTS.md

## Comandos do desenvolvedor

```bash
npm run dev      # Servidor de desenvolvimento (Turbopack)
npm run build    # Build de produção
npm run start    # Iniciar servidor de produção
npm run lint     # ESLint
npm run format   # Prettier (escreve nos arquivos!)
npm run typecheck # TypeScript
```

## Observações importantes

- **Tailwind v4**: Não usa `tailwind.config.js` - configuração via CSS
- **Adicionar componentes**: `npx shadcn@latest add <componente>`
- **Componentes shadcn**: Localizados em `src/components/ui/`
- **Idioma padrão**: pt-BR (definido no root layout)
- **Provider de tema**: `ThemeProvider` envolve toda a app

## Estrutura

- `src/app/` - rotas do Next.js (App Router)
- `(portfolio)` - route group para organização
- `_components` - componentes locais da página
- `src/components/ui/` - componentes shadcn
- `src/lib/utils.ts` - utilitários (cn, etc)
