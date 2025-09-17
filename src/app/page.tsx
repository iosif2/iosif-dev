import { Hero, About, Projects, Footer } from "@/widgets"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Hero />
        {/* <About /> */}
        {/* <Projects /> */}
      </main>
      <Footer />
    </div>
  )
}
