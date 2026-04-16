'use client'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Reviews.module.css'

export default function Reviews() {
  const insights = [
    {
      title: 'Humanocentric™ AI: The Next Evolution of Work',
      description: 'A Human-First Perspective on Artificial Intelligence',
      image: '/assets/testimonial/1.png',
      link: '/insights/humanocentric-ai'
    },
    {
      title: 'Prisma™: A New Framework for Strategic Clarity',
      description: 'The Challenge of Complexity in Modern Business',
      image: '/assets/testimonial/2.png',
      link: '/insights/prisma-framework'
    },
    {
      title: 'The Post-COVID AI Economy™',
      description: 'A Structural Shift, Not a Temporary Disruption',
      image: '/assets/testimonial/3.png',
      link: '/insights/post-covid-ai-economy'
    },
    {
      title: 'The Post-COVID, Strategic AI™ Business Plan',
      description: 'Why Traditional Business Plans No Longer Hold',
      image: '/assets/testimonial/4.png',
      link: '/insights/ai-driven-business-plan'
    },
    {
      title: 'The Hidden Cost of AI Adoption: Human Enablement',
      description: 'Why AI Initiatives Underperform',
      image: '/assets/testimonial/5.png',
      link: '/insights/human-enablement'
    },
    {
      title: 'Humanocentric™ AI: Hybrid Intelligence™ Within the Metaratus® Framework',
      description: 'Humanocentric™ AI as the Metaratus® Governing Framework',
      image: '/assets/testimonial/6.png',
      link: '/insights/hybrid-intelligence'
    }
  ]

  return (
    <section className={styles.reviews} id="reviews">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Insights from the Post-COVID AI Era™
          </h2>
          <h3 className={styles.subheading}>
            Strategic perspectives, frameworks, and forward-looking intelligence from the forefront of Humanocentric AI™
          </h3>
        </div>
        
        <div className={styles.insightsGrid}>
          {insights.map((insight, index) => (
            <Link href={insight.link} key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={insight.image} 
                  alt={insight.title}
                  width={400}
                  height={250}
                  className={insight.imageClass || styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h4 className={styles.cardTitle}>{insight.title}</h4>
                <p className={styles.text}>{insight.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
