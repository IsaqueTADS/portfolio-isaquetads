export interface Education {
  id: string
  title: string
  institution: string
  startDate: string
  endDate: string
  status: "em_andamento" | "concluido"
  description?: string
}

export const education: Education[] = [
  {
    id: "ifnmg-ads",
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "IFNMG",
    startDate: "2024",
    endDate: "2026",
    status: "em_andamento",
    description: "Curso superior de tecnologia em Análise e Desenvolvimento de Sistemas",
  },
]