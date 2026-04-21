export interface Certificate {
  id: string
  title: string
  institution: string
  date: string
  filePath: string
  technologies?: string[]
  description?: string
}

export const certificates: Certificate[] = [
  {
    id: "cert1",
    title: "React + TypeScript",
    institution: "Origamid",
    date: "2024",
    filePath: "/certificates/certificado react origamid.pdf",
    technologies: ["React", "TypeScript"],
    description: "Curso completo de React com TypeScript",
  },
  {
    id: "cert2",
    title: "React + TypeScript",
    institution: "Origamid",
    date: "2024",
    filePath: "/certificates/ReactTypescriptOrigamid.pdf",
    technologies: ["React", "TypeScript"],
    description: "Curso de React com TypeScript",
  },
  {
    id: "cert3",
    title: "Fundamentos do Node.js",
    institution: "Origamid",
    date: "2024",
    filePath: "/certificates/Certificado_Fundamentos do Node.js.pdf",
    technologies: ["Node.js", "JavaScript"],
    description: "Fundamentos do Node.js",
  },
  {
    id: "cert4",
    title: "Certificado",
    institution: "Origamid",
    date: "2024",
    filePath: "/certificates/Certificado - Isaque.pdf",
    technologies: [],
    description: "Certificado de conclusão",
  },
]