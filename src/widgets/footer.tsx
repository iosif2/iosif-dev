import { Container, Link } from "@/shared/ui"
import { SITE } from "@/shared/lib"

export function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <Container>
        <div className="py-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8">
          <p className="text-sm text-foreground/60">
            © 2025 {SITE.name}
          </p>
          <div className="flex space-x-6">
            <Link
              href={SITE.github}
              external
              className="text-sm text-foreground/60 hover:text-foreground"
            >
              GitHub
            </Link>
            <Link
              href="mailto:iosif2@iosif.dev"
              className="text-sm text-foreground/60 hover:text-foreground"
            >
              Email
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}