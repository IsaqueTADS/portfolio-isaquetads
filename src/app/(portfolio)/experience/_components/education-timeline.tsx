import { education, type Education } from "@/data/education"

export function EducationTimeline() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="font-heading text-2xl font-bold text-foreground">
        Formação Acadêmica
      </h2>

      <div className="flex flex-col gap-8 pl-4">
        {education.map((item, index) => (
          <div key={item.id} className="flex gap-6">
            <div className="flex flex-col items-center">
              <span className="h-3 w-3 rounded-full bg-foreground" />
              {index < education.length - 1 && (
                <div className="h-24 w-px bg-border" />
              )}
            </div>
            <div className="flex flex-col gap-1 pb-8">
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-primary">
                {item.institution} · {item.startDate} - {item.endDate}
              </p>
              {item.status === "em_andamento" && (
                <span className="mt-1 inline-flex w-fit rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  Em andamento
                </span>
              )}
              {item.description && (
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}