import styles from '@/components/ModernPremium.module.css'

export default function HumanocentricAICoaching() {
  return (
    <main className={styles.mainSection}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.subtitle}>Humanocentric™ AI Coaching</span>
          <h1 className={styles.title}>One-on-One AI Coaching</h1>
          <p className={styles.tagline}>
            Professionals and organizations designed to strengthen AI fluency through prompt structuring, scenario analysis, tool selection, analytical reasoning, and responsible AI use.
          </p>
          
          {/* Pricing Card */}
          <div className="pricing-card" style={{background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '24px', marginTop: '2rem', textAlign: 'center'}}>
            <div style={{fontSize: '3rem', fontWeight: 'bold'}}>$350 <span style={{fontSize: '1rem'}}>per month</span></div>
            <div style={{color: '#00c3ff', margin: '0.5rem 0 1.5rem'}}>Includes one structured coaching session per month</div>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <a href="/book-coaching" className="btn-primary" style={{background: 'white', color: 'black', padding: '0.8rem 2rem', borderRadius: '40px', textDecoration: 'none', fontWeight: 'bold'}}>Book AI Coaching Session →</a>
              <a href="/contact" className="btn-secondary" style={{border: '1px solid white', padding: '0.8rem 2rem', borderRadius: '40px', textDecoration: 'none'}}>Schedule Strategy Call</a>
            </div>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img 
            alt="Humanocentric AI Coaching" 
            decoding="async" 
            data-nimg="fill" 
            className={styles.heroImage} 
            style={{position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, objectFit: 'contain'}} 
            src="/assets/About Us Page Image Black background.png"
          />
        </div>
      </header>

      {/* Content Sections */}
      <div className={styles.contentWrapper}>
        
        {/* What This Service Includes */}
        <div className={styles.section}>
          <h2 className={styles.heading2}>What this service includes</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem'}}>
            {[
              {title: 'Prompt Structuring', desc: 'Refined guidance on prompt structuring and underlying AI logic.'},
              {title: 'Scenario Analysis', desc: 'Structured analysis of scenarios, variables, and possible response pathways.'},
              {title: 'Tool Selection', desc: 'Practical guidance on selecting appropriate AI tools for specific professional and operational needs.'},
              {title: 'Analytical Boundaries', desc: 'Greater clarity regarding the strengths, limitations, and proper interpretive boundaries of AI-generated output.'},
              {title: 'Responsible AI Use', desc: 'Coaching on responsible, disciplined, and professionally appropriate use of artificial intelligence.'},
              {title: 'Structured Session Format', desc: 'One structured coaching session per month under the Humanocentric™ coaching program.'}
            ].map((item, idx) => (
              <div key={idx} style={{background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '16px'}}>
                <h3 style={{color: '#00c3ff', marginBottom: '0.5rem'}}>{item.title}</h3>
                <p className={styles.paragraph}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why This Matters */}
        <div className={styles.section}>
          <h2 className={styles.heading2}>Why this matters</h2>
          <p className={styles.paragraph}>Artificial intelligence is rapidly emerging to the forefront of workplace adoption and should, therefore, be understood as a practical instrument for enhancing productivity, not as a novelty. Experience teaches us that in economic reality, stronger business performance arises from the dynamic interplay of human effort combined with the intelligent deployment of capital, technology, and operational systems.</p>
          <p className={styles.paragraph}>Hence, the Humanocentric™ AI Coaching program, powered by Metaratus®, is designed to enable professionals to enhance their human capital by gaining clearer insights into how AI tools can be used to augment their professional strengths while simultaneously reducing the deleterious impact of their weak points, in applied terms.</p>
          <p className={styles.paragraph}>Our objective is to refine, support, and extend human judgment and decision-making velocity in corporate environments through the disciplined use of artificial intelligence in workflow processes and daily operations.</p>
        </div>

        {/* Who This Service Is For */}
        <div className={styles.section}>
          <h2 className={styles.heading2}>Who this service is for</h2>
          <div style={{background: 'rgba(0, 195, 255, 0.05)', borderLeft: '4px solid #00c3ff', padding: '2rem', borderRadius: '16px'}}>
            <p className={styles.paragraph}>Professionals, founders, executives, and organizations seeking disciplined, method-driven AI coaching.</p>
          </div>
        </div>

        {/* How to Begin */}
        <div className={styles.section} style={{textAlign: 'center', marginTop: '3rem'}}>
          <h2 className={styles.heading2}>How to begin</h2>
          <p className={styles.paragraph}>Book an AI coaching session to engage the Humanocentric™ coaching service.</p>
          <a href="/book-coaching" style={{display: 'inline-block', background: 'white', color: 'black', padding: '0.8rem 2rem', borderRadius: '40px', textDecoration: 'none', fontWeight: 'bold', marginTop: '1rem'}}>Book AI Coaching Session →</a>
        </div>
      </div>
    </main>
  )
}