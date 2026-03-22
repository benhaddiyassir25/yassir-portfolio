import { motion } from "motion/react";

interface ProjectProps {
  title: string;
  role: string;
  type: 'video' | 'stat' | 'quote';
  content: string;
  description?: string;
}

function ProjectCard({ title, role, type, content, description }: ProjectProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-video bg-gray-900 mb-4 overflow-hidden rounded-sm border border-white/10 group-hover:border-white/30 transition-colors">
        {type === 'video' && (
          <iframe 
            className="w-full h-full" 
            src={`https://www.youtube.com/embed/${content}`} 
            title={title}
            frameBorder="0" 
            allowFullScreen
          />
        )}
        {type === 'stat' && (
          <div className="w-full h-full flex items-center justify-center p-8">
            <div className="text-center">
              <h4 className="text-5xl font-bold mb-2">{content}</h4>
              <p className="text-gray-400 uppercase tracking-tighter text-sm">Followers Growth Strategy</p>
            </div>
          </div>
        )}
        {type === 'quote' && (
          <div className="w-full h-full flex items-center justify-center p-10">
            <p className="text-gray-400 italic text-center text-sm leading-relaxed">
              "{content}"
            </p>
          </div>
        )}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-500 text-sm italic mb-2">{role}</p>
      {description && (
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-16 md:py-24 px-6 md:px-24 bg-[#0f0f0f]">
      <div className="mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">Featured Projects</h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">Commercials, Documentaries, & Social Content</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ProjectCard 
          title="ECHOES (Short Film)" 
          role="Writer, Director & Editor" 
          type="video" 
          content="cL7fyhnQKdM" 
          description="A young man’s lonely walk in the forest becomes a haunting journey through the echoes of his painful past, as rejection, betrayal, and abandonment leave him teetering on the edge of paranoia and despair."
        />
        <ProjectCard 
          title="Money game - Music analysis" 
          role="Director / Editor" 
          type="video" 
          content="85qyEv6EDIs" 
        />
        <ProjectCard 
          title="Software Automation" 
          role="Developer & Strategist" 
          type="quote" 
          content="Developed a custom automation tool for accounting workflows, reducing manual entry time by 70% and improving data accuracy for corporate clients." 
          description="A technical project blending software development with business process optimization."
        />
        <ProjectCard 
          title="Educational Content Growth" 
          role="Strategy & Production" 
          type="stat" 
          content="150K+" 
        />
        <ProjectCard 
          title="High-Level Liaison" 
          role="Institutional Communication" 
          type="quote" 
          content="Liaison Officer for World Bank X IMF Annual Meetings. Assisting the Minister of Finance of Gambia." 
        />
      </div>
    </section>
  );
}
