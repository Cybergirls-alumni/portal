import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Nav */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/90 backdrop-blur-sm z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-sm">CG</span>
            </div>
            <div>
              <span className="font-semibold text-gray-900 text-sm">CyberGirls Alumni</span>
            </div>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#about" className="text-sm text-gray-500 hover:text-gray-900 transition-colors hidden sm:block">
              About
            </a>
            <a href="#alumni" className="text-sm text-gray-500 hover:text-gray-900 transition-colors hidden sm:block">
              Alumni
            </a>
            <Link
              href="/letters"
              className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
            >
              Alumni Portal
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wide">
            CyberSafe Foundation
          </div>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            The CyberGirls<br />Alumni Network
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed mb-10">
            A growing community of young women trained in cybersecurity through the CyberSafe Foundation CyberGirls programme.
            We stay connected, support one another, and carry the mission forward.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#alumni"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Alumni Services
              <span aria-hidden>↓</span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-white text-gray-700 font-semibold px-6 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              About CyberGirls
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-gray-50 border-y border-gray-100 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">About the CyberGirls Programme</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                CyberGirls is an initiative of the <a href="https://cybersafefoundation.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CyberSafe Foundation</a> aimed
                at bridging the gender gap in cybersecurity by equipping young women across Nigeria
                with practical digital safety and security skills.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Participants go through a structured training programme covering
                cybersecurity fundamentals, digital forensics, ethical hacking, and more —
                graduating as CyberGirls alumni with skills ready for careers in the field.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Graduates of the programme form this alumni network — a community that continues
                to learn, collaborate, and champion digital security across Africa.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-blue-600 text-lg">🎓</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Training & Skills</h3>
                <p className="text-sm text-gray-500">Hands-on cybersecurity education covering defensive and offensive security, digital forensics, and more.</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-blue-600 text-lg">🤝</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Community</h3>
                <p className="text-sm text-gray-500">A network of women who share knowledge, opportunities, and support one another&apos;s growth in the industry.</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-blue-600 text-lg">🌍</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Impact</h3>
                <p className="text-sm text-gray-500">Contributing to closing the gender gap in cybersecurity across Nigeria and the broader African continent.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme status */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-amber-600 text-lg">⏸</span>
            </div>
            <div>
              <h3 className="font-semibold text-amber-900 text-lg mb-2">Programme Currently Paused</h3>
              <p className="text-amber-800 leading-relaxed mb-4">
                The CyberGirls programme is temporarily paused as CyberSafe Foundation works to
                secure renewed funding. The alumni community remains active and connected,
                and we look forward to welcoming new cohorts when the programme resumes.
              </p>
              <p className="text-amber-800 leading-relaxed">
                If you&apos;d like to support the programme and help bring CyberGirls back,
                visit the{" "}
                <a
                  href="https://cybersafefoundation.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline hover:text-amber-900"
                >
                  CyberSafe Foundation website
                </a>{" "}
                to learn how you can contribute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni services */}
      <section id="alumni" className="bg-gray-50 border-y border-gray-100 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Alumni Services</h2>
            <p className="text-gray-500 text-lg">
              Resources and tools available to CyberGirls alumni.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Letters tracker */}
            <Link
              href="/letters"
              className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <span className="text-blue-600 group-hover:text-white text-lg transition-colors">✉️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Recommendation Letters</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Request a recommendation letter from CyberSafe Foundation for school
                applications, job opportunities, or other purposes.
              </p>
              <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700">
                Submit a request →
              </span>
            </Link>

            {/* Placeholder: Events */}
            <div className="bg-white rounded-xl border border-dashed border-gray-200 p-6 opacity-60">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-400 text-lg">📅</span>
              </div>
              <h3 className="font-semibold text-gray-400 mb-2">Events</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Alumni events, workshops, and community gatherings. Coming soon.
              </p>
            </div>

            {/* Placeholder: Research */}
            <div className="bg-white rounded-xl border border-dashed border-gray-200 p-6 opacity-60">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-400 text-lg">🔬</span>
              </div>
              <h3 className="font-semibold text-gray-400 mb-2">Research Highlights</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Work and research from alumni in the field. Coming soon.
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-400 mt-6">
            Are you a CyberGirls alumna? Reach out to us at{" "}
            <a href="mailto:alumni@cybersafefoundation.org" className="text-blue-500 hover:underline">
              alumni@cybersafefoundation.org
            </a>{" "}
            if you need access or have questions.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">CG</span>
            </div>
            <span className="text-sm text-gray-500">
              CyberGirls Alumni · A{" "}
              <a href="https://cybersafefoundation.org" target="_blank" rel="noopener noreferrer" className="hover:underline">
                CyberSafe Foundation
              </a>{" "}
              initiative
            </span>
          </div>
          <a
            href="mailto:alumni@cybersafefoundation.org"
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            alumni@cybersafefoundation.org
          </a>
        </div>
      </footer>

    </div>
  );
}
