import { cn } from "@/shared/lib"

interface LinkProps {
  href: string
  children: React.ReactNode
  className?: string
  external?: boolean
}

export function Link({ href, children, className, external = false }: LinkProps) {
  const baseStyles = "text-foreground hover:opacity-70 transition-opacity duration-200"
  const props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {}

  return (
    <a
      href={href}
      className={cn(baseStyles, className)}
      {...props}
    >
      {children}
    </a>
  )
}