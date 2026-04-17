export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex sm:w-[40%] items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm">
      <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
      <span className="text-xs font-medium text-foreground">{children}</span>
    </div>
  )
}
