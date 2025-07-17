/**
 * A generic placeholder component for icons, using Image.
 * @param props - The properties for the icon, including src, alt, width, and height.
 */
function IconPlaceholder(props: { src: string; alt: string; width: number; height: number; className?: string }) {
  return <img {...props} />
}

/**
 * Landing-page main component
 */
export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* ───────────────────────── HEADER ───────────────────────── */}
      <header className="fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-between bg-white px-4 shadow-sm md:px-6">
        <a href="/" className="flex items-center gap-2">
          <img src="/placeholder.svg?height=32&width=150" alt="Optimum Techniques logo" width={150} height={32} />
        </a>

        <nav className="hidden space-x-6 md:flex">
          {["About us", "Services", "Technical Capabilities", "Safety & Compliance"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-[#67748e] transition-colors hover:text-[#0132d5]"
            >
              {item}
            </a>
          ))}
        </nav>

        <button className="hidden rounded-md bg-[#ff9700] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#e68a00] md:inline-flex">
          CONTACT&nbsp;US
        </button>

        {/* Simple mobile hamburger; no menu logic yet */}
        <button className="md:hidden" aria-label="Open navigation">
          <IconPlaceholder
            src="/placeholder.svg?height=24&width=24"
            alt="Menu icon"
            width={24}
            height={24}
            className="h-6 w-6"
          />
        </button>
      </header>

      <main className="flex-1">
        {/* ───────────────────────── HERO ───────────────────────── */}
        <section
          className="relative flex h-[600px] items-center justify-center bg-cover bg-center pt-20 text-white"
          style={{
            backgroundImage: "url('/placeholder.svg?height=800&width=1920')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 max-w-4xl px-4 md:px-6">
            <p className="mb-2 text-lg font-semibold text-[#ff9700]">Experts in HDPE Installation</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              A Specialized Saudi&nbsp;arabian
              <br />
              engineering contracting firm
            </h1>
            <button className="rounded-md bg-[#ff9700] px-8 py-3 text-lg font-medium text-white shadow transition-colors hover:bg-[#e68a00]">
              CONTACT&nbsp;US
            </button>
          </div>
        </section>

        {/* ───────────────────────── ABOUT ───────────────────────── */}
        <section className="bg-[#f8f9fa] py-16 md:py-24">
          <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2 md:px-6 lg:gap-12">
            <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">About us</h2>
            <div className="space-y-4 text-lg text-[#535a73]">
              <p>
                Optimum Techniques is a specialized engineering contracting firm delivering high-quality HDPE
                geomembrane lining solutions for environmental and industrial applications across Saudi Arabia.
              </p>
              <p>
                We combine engineering precision, safety compliance, and sustainable practices to meet international
                standards with local expertise.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────── KEY STRENGTH ───────────────────────── */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2 md:px-6 lg:gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">Key Strength</h2>
              <ul className="space-y-3 text-lg text-[#535a73]">
                {[
                  "Technically skilled workforce",
                  "Advanced equipment & certified methodologies",
                  "Commitment to safety & environmental protection",
                  "Client-focused project execution",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <IconPlaceholder
                      src="/placeholder.svg?height=24&width=24"
                      alt="Checkmark icon"
                      width={24}
                      height={24}
                      className="h-6 w-6 text-[#0132d5]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="rounded-md border border-[#d5d7da] bg-white px-8 py-3 text-lg font-medium text-[#0132d5] shadow transition-colors hover:bg-[#f0f2f5]">
                CONTACT&nbsp;US
              </button>
            </div>

            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Workers installing geomembrane"
              width={600}
              height={400}
              className="h-auto w-full rounded-lg object-cover shadow-lg"
            />
          </div>
        </section>

        {/* ───────────────────────── VISION / MISSION / VALUES ───────────────────────── */}
        <section className="bg-[#edf4ff] py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-[#535a73]">
              Optimum Techniques is the trusted partner for safe, sustainable, and high-quality geomembrane
              installations in the environmental and industrial sectors—driven by integrity, innovation, and a
              commitment to lasting partnerships.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Vision",
                  iconSrc: "/placeholder.svg?height=40&width=40", // Placeholder for SquareUser
                  alt: "Vision icon",
                  text: "To be the preferred partner for vv by delivering safe, sustainable, and technically superior installations.",
                },
                {
                  title: "Mission",
                  iconSrc: "/placeholder.svg?height=40&width=40", // Placeholder for Globe
                  alt: "Mission icon",
                  text: "We deliver precise geomembrane installations with unmatched safety, quality, and reliability—protecting the environment and building long-term partnerships.",
                },
                {
                  title: "Values",
                  iconSrc: "/placeholder.svg?height=40&width=40", // Placeholder for Sparkles
                  alt: "Values icon",
                  text: "We operate with integrity, pursue excellence through continuous improvement, prioritize safety without compromise, embrace innovation, and build trust-based client partnerships.",
                },
              ].map(({ title, iconSrc, alt, text }) => (
                <div key={title} className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm">
                  <div className="mb-4 rounded-full bg-[#e0e7ff] p-4">
                    <IconPlaceholder
                      src={iconSrc}
                      alt={alt}
                      width={40}
                      height={40}
                      className="h-10 w-10 text-[#0132d5]"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[#344767]">{title}</h3>
                  <p className="text-[#747c9b]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────────────── SERVICES ───────────────────────── */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl lg:text-6xl">Services & Applications</h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Supply",
                  subtitle: "HDPE Geomembrane Supply & Installation",
                  iconSrc: "/placeholder.svg?height=40&width=40", // Placeholder for Package
                  alt: "Supply icon",
                },
                {
                  title: "Installation",
                  subtitle: "Geotextile Installation",
                  iconSrc: "/placeholder.svg?height=40&width=40", // Placeholder for Wrench
                  alt: "Installation icon",
                },
                {
                  title: "Quality Assurance",
                  subtitle: "Leak Detection & Quality Assurance",
                  iconSrc: "/placeholder.svg?height=40&width=40", // Placeholder for Sparkles
                  alt: "Quality Assurance icon",
                  overlayIconSrc: "/placeholder.svg?height=24&width=24", // Placeholder for Check overlay
                  overlayAlt: "Checkmark overlay",
                },
                {
                  title: "Fusion & Extrusion",
                  subtitle: "Seam Welding (Fusion & Extrusion)",
                  iconSrc: "/placeholder.svg?height=40&width=40", // Placeholder for SquareStack
                  alt: "Fusion & Extrusion icon",
                },
                {
                  title: "Repair",
                  subtitle: "Liner Repair & Maintenance",
                  iconSrc: "/placeholder.svg?height=40&width=40", // Placeholder for Hammer
                  alt: "Repair icon",
                },
                {
                  title: "Site preparation",
                  subtitle: "Site Preparation & Consultancy",
                  iconSrc: "/placeholder.svg?height=40&width=40", // Placeholder for MapPin
                  alt: "Site preparation icon",
                },
              ].map(({ title, subtitle, iconSrc, alt, overlayIconSrc, overlayAlt }) => (
                <div
                  key={title}
                  className="flex flex-col items-center rounded-lg border border-[#d5d7da] bg-white p-6 text-center shadow-sm"
                >
                  <div className="relative mb-4 rounded-full bg-[#e0e7ff] p-4">
                    <IconPlaceholder
                      src={iconSrc}
                      alt={alt}
                      width={40}
                      height={40}
                      className="h-10 w-10 text-[#0132d5]"
                    />
                    {overlayIconSrc && (
                      <IconPlaceholder
                        src={overlayIconSrc}
                        alt={overlayAlt}
                        width={24}
                        height={24}
                        className="absolute -bottom-1 -right-1 h-6 w-6 text-[#0132d5]"
                      />
                    )}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[#344767]">{title}</h3>
                  <p className="text-[#747c9b]">{subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
