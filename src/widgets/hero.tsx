import { Container, Section } from "@/shared/ui"

export function Hero() {
  return (
    <Section className="pt-32 pb-16 sm:pt-48 sm:pb-24">
      <Container>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            iosif
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-2xl mx-auto sm:text-xl">
            Engineer
          </p>
          <p className="mt-4 text-sm leading-6 text-foreground/60 max-w-xl mx-auto">
            Welcome to my space.
          </p>
        </div>
      </Container>
    </Section>
  )
}