import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function HumanocentricAICoaching() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Humanocentric™ AI Coaching
          </h1>
          
          <p className="text-xl text-gray-300 text-center mb-12">
            One-on-one AI coaching for professionals and organizations designed to strengthen AI fluency through prompt structuring, scenario analysis, tool selection, analytical reasoning, and responsible AI use.
          </p>

          {/* Pricing Card */}
          <div className="bg-gray-900 rounded-2xl p-8 text-center mb-16 border border-gray-800">
            <div className="text-5xl font-bold mb-2">$350 <span className="text-xl text-gray-400">per month</span></div>
            <p className="text-gray-400 mb-6">Includes one structured coaching session per month</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/book-coaching" className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                Book AI Coaching Session →
              </a>
              <a href="/contact" className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
                Schedule Strategy Call
              </a>
            </div>
          </div>

          {/* What This Service Includes */}
          <h2 className="text-3xl font-bold mb-8">What this service includes</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              { title: "Prompt Structuring", desc: "Refined guidance on prompt structuring and underlying AI logic." },
              { title: "Scenario Analysis", desc: "Structured analysis of scenarios, variables, and possible response pathways." },
              { title: "Tool Selection", desc: "Practical guidance on selecting appropriate AI tools for specific professional and operational needs." },
              { title: "Analytical Boundaries", desc: "Greater clarity regarding the strengths, limitations, and proper interpretive boundaries of AI-generated output." },
              { title: "Responsible AI Use", desc: "Coaching on responsible, disciplined, and professionally appropriate use of artificial intelligence." },
              { title: "Structured Session Format", desc: "One structured coaching session per month under the Humanocentric™ coaching program." }
            ].map((item, i) => (
              <div key={i} className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Why This Matters */}
          <h2 className="text-3xl font-bold mb-8">Why this matters</h2>
          <div className="space-y-4 text-gray-300 mb-16">
            <p>Artificial intelligence is rapidly emerging to the forefront of workplace adoption and should, therefore, be understood as a practical instrument for enhancing productivity, not as a novelty. Experience teaches us that in economic reality, stronger business performance arises from the dynamic interplay of human effort combined with the intelligent deployment of capital, technology, and operational systems.</p>
            <p>Hence, the Humanocentric™ AI Coaching program, powered by Metaratus®, is designed to enable professionals to enhance their human capital by gaining clearer insights into how AI tools can be used to augment their professional strengths while simultaneously reducing the deleterious impact of their weak points, in applied terms.</p>
            <p>Our objective is to refine, support, and extend human judgment and decision-making velocity in corporate environments through the disciplined use of artificial intelligence in workflow processes and daily operations.</p>
          </div>

          {/* Who This Service Is For */}
          <h2 className="text-3xl font-bold mb-8">Who this service is for</h2>
          <div className="bg-blue-950/30 border-l-4 border-blue-500 p-6 rounded-r-xl mb-16">
            <p className="text-gray-300">Professionals, founders, executives, and organizations seeking disciplined, method-driven AI coaching.</p>
          </div>

          {/* How to Begin */}
          <h2 className="text-3xl font-bold mb-8">How to begin</h2>
          <div className="text-center bg-gray-900/50 p-12 rounded-2xl">
            <p className="text-gray-300 mb-6">Book an AI coaching session to engage the Humanocentric™ coaching service.</p>
            <a href="/book-coaching" className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition inline-block">
              Book AI Coaching Session →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}