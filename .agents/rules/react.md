## Componentes

- Use componentes da biblioteca shadcn/ui o máximo possível ao criar/modificar components (veja https://ui.shadcn.com/ para a lista de componentes disponíveis).
- Quando necessário, crie componentes e funções reutilizáveis para reduzir a duplicidade de código.
- **NUNCA** crie mais de um componente no mesmo arquivo. Cada componente deve ter seu próprio arquivo.
- Antes de criar um novo componente, **SEMPRE** use Context7 para verificar se já existe um componente do shadcn/ui que possa ser utilizado. Caso exista, instale-o.
- **SEMPRE** use o componente `Button` do shadcn/ui (`@/components/ui/button`) para botões. **NUNCA** use `<button>` nativo diretamente.


## Estilização

- **NUNCA** use cores hard-coded do Tailwind (como `text-white`, `text-white/70`, `bg-black`, `bg-white`, `text-black`, `border-[#f1f1f1]`, `bg-[#2b54ff]`, `bg-[oklch(...)]` etc.). **SEMPRE** use as cores do tema definidas em @app/globals.css (ex: `text-background`, `text-background/70`, `bg-foreground`, `text-foreground`, `bg-primary`, `text-primary-foreground`, `border-border` etc.). Caso a cor necessária não exista no tema, crie uma nova variável CSS em @app/globals.css seguindo o padrão existente.
- Antes de criar uma nova variável de cor, **SEMPRE** busque na documentação do shadcn/ui sobre theming e veja se realmente é necessário.
- **SEMPRE** veja os componentes que podem ser reutilizados para construção de uma página em @components/ui/page.tsx.

## Imagens

- **SEMPRE** use o componente `Image` do Next para renderizar imagens.
