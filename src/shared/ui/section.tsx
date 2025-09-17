import { cn } from "@/shared/lib"

interface SectionProps {
  children: React.ReactNode
  className?: string
}

export function Section({ children, className }: SectionProps) {
  return (
    <section className={cn("py-16 sm:py-24", className)}>
      {children}
    </section>
  )
}