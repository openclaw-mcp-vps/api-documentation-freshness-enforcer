export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Monitoring
        </span>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Ensures API Docs Stay Updated<br />with Code Changes
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Connect your GitHub repo. Every API change triggers an automatic diff against your docs — outdated sections get flagged and tasks are created instantly.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started — $13/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">No credit card required to connect. Cancel anytime.</p>
      </section>

      {/* How it works */}
      <section className="mb-20 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { step: '01', title: 'Connect Repo', desc: 'Install the GitHub webhook in one click. No CI changes needed.' },
          { step: '02', title: 'AI Diff Analysis', desc: 'Every push is scanned. AI compares code changes to your doc files.' },
          { step: '03', title: 'Auto Tasks', desc: 'Outdated sections are flagged and update tasks are created for your team.' }
        ].map(({ step, title, desc }) => (
          <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] font-mono text-xs mb-2">{step}</div>
            <div className="text-white font-semibold mb-1">{title}</div>
            <div className="text-[#8b949e] text-sm">{desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$13</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited GitHub repos',
              'AI-powered doc diff analysis',
              'Automatic task creation',
              'Slack & email notifications',
              'Dashboard for API product managers'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start for $13/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does it detect API changes?',
              a: 'We install a GitHub webhook on your repo. On every push, we parse the diff for route definitions, schema changes, and endpoint signatures using static analysis and AI.'
            },
            {
              q: 'What doc formats are supported?',
              a: 'Markdown, MDX, OpenAPI/Swagger YAML and JSON, and plain text files. We detect your doc structure automatically.'
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes. Cancel from your billing portal at any time. Your access continues until the end of the billing period.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-white font-semibold mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} API Docs Freshness Enforcer. All rights reserved.
      </footer>
    </main>
  )
}
