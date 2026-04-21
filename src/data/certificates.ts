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
    title: "React Completo",
    institution: "Origamid",
    date: "2025",
    filePath: "/certificates/certificado react origamid.pdf",
    technologies: ["React", "JavaScript"],
    description: "Curso completo de React",
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
    institution: "Rocketseat",
    date: "2025",
    filePath: "/certificates/Certificado_Fundamentos do Node.js.pdf",
    technologies: ["Node.js", "JavaScript"],
    description: "Fundamentos do Node.js",
  },
  {
    id: "cert4",
    title: "Certificado Monitoria",
    institution:
      "Instituto Federal de Educação, Ciência e Tecnologia do Norte de Minas Gerais - IFNMG Campus Araçuaí",
    date: "2024",
    filePath: "/certificates/Certificado - Isaque.pdf",
    technologies: ["C++", "Logica de Programação"],
    description: "Certificado de conclusão",
  },
]
