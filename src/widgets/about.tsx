import { Container, Section } from "@/shared/ui"

export function About() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">About</h2>
          <div className="prose prose-lg mx-auto text-center">
            <p className="text-foreground/80 leading-relaxed">
              I&apos;m passionate about creating digital experiences that matter.
              My focus lies in building clean, efficient solutions while constantly
              learning and exploring new technologies.
            </p>
            <p className="mt-6 text-foreground/80 leading-relaxed">
              This space will evolve to showcase projects, thoughts, and experiments
              as I continue my journey in development.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}