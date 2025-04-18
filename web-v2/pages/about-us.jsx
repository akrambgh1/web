import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, ShieldCheck, Activity, GitBranch, Users, FileText, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const sections = [
  {
    id: 'who-we-are',
    title: 'Who We Are',
    icon: Users,
    content: [
      "We’re a technically-driven web development agency focused on delivering scalable, secure, and performance-optimized digital solutions.",
      "Our team is composed of full-stack developers, UI/UX designers, and systems architects with a shared commitment to clean architecture, maintainable code, and long-term product value.",
      "We don’t just “build websites” — we engineer systems that are meant to grow with your business."
    ]
  },
  {
    id: 'philosophy',
    title: 'Our Philosophy',
    icon: Activity,
    content: [
      { label: 'Engineering First', text: 'Every project is structured around best practices in modern software engineering, not quick fixes.' },
      { label: 'Simplicity Wins', text: 'We prioritize clarity in both code and design. No unnecessary complexity, no bloat.' },
      { label: 'Built for Scale', text: "Whether you're a startup or an enterprise, we write code that’s ready to evolve." }
    ],
    isList: true
  },
  {
    id: 'tech-stack',
    title: 'Our Technology Stack',
    icon: Code,
    content: [
      "We work with modern, battle-tested technologies that ensure stability, performance, and ease of maintenance.",
      "Frontend: React / Next.js, Tailwind CSS / SCSS, TypeScript, Storybook, Framer Motion, GSAP",
      "Backend: Node.js / Express / Fastify, RESTful & GraphQL APIs, PostgreSQL / MongoDB / MySQL, Redis, RabbitMQ",
      "DevOps: GitHub Actions, Docker, NGINX, PM2, Vercel, Netlify, AWS EC2",
      "Monitoring: UptimeRobot, Sentry, LogRocket",
      "Others: Stripe, PayPal, Firebase, Supabase, Sanity, Strapi, Figma, Zeplin, Adobe XD"
    ]
  },
  {
    id: 'dev-standards',
    title: 'Development Standards',
    icon: ShieldCheck,
    content: [
      "All code is managed via Git with clean commit histories and branching strategies.",
      "Mandatory pull requests with peer reviews.",
      "Documentation for both developers and end-users.",
      "Security practices aligned with OWASP guidelines.",
      "Performance optimizations to meet core web vitals."
    ]
  },
  {
    id: 'project-lifecycle',
    title: 'Project Lifecycle',
    icon: GitBranch,
    content: [
      "We begin with requirement gathering, followed by technical briefs and stakeholder interviews.",
      "Then we design system architecture including database schemas and scalable infrastructure.",
      "During development we use CI/CD, agile sprints, and end-to-end testing.",
      "Final phases include staging, production deployment, and continuous monitoring."
    ]
  },
  {
    id: 'client-collab',
    title: 'Client Collaboration',
    icon: Layers,
    content: [
      "We use Notion, Jira, or Trello for project tracking.",
      "Weekly reports highlight progress, goals, and blockers.",
      "Real-time communication via Slack or your preferred platform.",
      "You get a dedicated point of contact throughout the project."
    ]
  },
  {
    id: 'ownership-compliance',
    title: 'Code Ownership & Compliance',
    icon: FileText,
    content: [
      "You own 100% of the code and assets once the project is complete.",
      "We follow GDPR, CCPA, and WCAG 2.1 standards.",
      "For custom requirements like HIPAA or PCI DSS, we tailor the architecture accordingly."
    ]
  },
  {
    id: 'summary',
    title: 'In Summary',
    icon: CheckCircle2,
    content: [
      "We’re a backend-strong, detail-obsessed, process-focused development partner.",
      "If you’re looking for a team that values long-term maintainability over shortcuts and collaboration over assumptions — let’s build something solid together."
    ]
  }
];

export default function AboutUs() {
    return (
        <section className="  relative justify-center ">
            
            <div className="w-full bg-gray-50  flex justify-center  text-gray-800 py-16 px-4 md:px-20">
                <Navbar></Navbar>
      <div className="max-w-7xl  mx-auto space-y-12">
        {/* Page Title */}
        <header className="text-center mt-10">
          <h1 className="text-5xl font-extrabold text-blue-700 mb-4 relative inline-block">
            About Us
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-700 rounded-full animate-pulse"></span>
          </h1>
          <p className="text-gray-600">Learn more about our mission and how we operate.</p>
        </header>

        {/* Animated Sections */}
        {sections.map(({ id, title, icon: Icon, content, isList }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow mb-6">
              <div className="flex   items-center mb-4">
                <Icon className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-semibold text-gray-700">{title}</h2>
              </div>
              {isList ? (
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {content.map(({ label, text }) => (
                    <li key={label}>
                      <span className="font-medium text-blue-600">{label}:</span> {text}
                    </li>
                  ))}
                </ul>
              ) : (
                content.map((para, i) => <p className="mb-2 text-gray-600" key={i}>{para}</p>)
              )}
            </Card>
          </motion.div>
        ))}

        {/* Separator */}
        

        {/* Button Section */}
     
        {/* Decorative Wave Separator */}
       
          </div>
          
            </div>
            <section
                      className="relative h-[70dvh] max-md:h-[100vh] "
                      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
                    >
                      <Footer></Footer>
                    </section>
        </section>
        
            
  );
}
