
import { motion } from "framer-motion";
import { WorkspaceLayout } from "@/components/layouts/workspace-layout";
import { Card } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Former data scientist at Goldman Sachs with 15 years of experience in financial analysis."
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "AI researcher with a PhD in Computer Science from Stanford University."
  },
  {
    name: "Alex Rodriguez",
    role: "Head of Product",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    bio: "Previously led product teams at Stripe and Square focusing on financial tools."
  },
  {
    name: "Priya Sharma",
    role: "Lead Data Scientist",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Specializes in machine learning models for predictive financial analytics."
  }
];

const timelineEvents = [
  {
    year: "2022",
    title: "Company Founded",
    description: "Fenty was founded with the mission to democratize financial analysis for businesses of all sizes."
  },
  {
    year: "2023",
    title: "Seed Funding",
    description: "Secured $5 million in seed funding to build the core platform and expand the team."
  },
  {
    year: "2024 Q1",
    title: "Beta Launch",
    description: "Released our beta platform to select enterprise customers in the finance sector."
  },
  {
    year: "2024 Q3",
    title: "Echo AI Integration",
    description: "Launched our AI assistant powered by the latest RAG system technology."
  },
  {
    year: "2025",
    title: "Global Expansion",
    description: "Expanded to 20 countries with support for multiple languages and regional regulatory frameworks."
  }
];

const About = () => {
  return (
    <WorkspaceLayout>
      <div className="p-6">
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-3xl font-bold mb-4">About Fenty</h1>
          <p className="text-xl text-muted-foreground">
            We're building the next generation of financial analysis tools, powered by AI 
            to make complex financial data accessible and actionable.
          </p>
        </motion.header>

        <section className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-bold mb-6 text-center"
          >
            Our Story
          </motion.h2>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-muted"></div>
            
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } relative mb-10`}
              >
                <div className={`w-5 h-5 bg-primary rounded-full absolute top-6 left-1/2 transform -translate-x-1/2 z-10`}></div>
                
                <Card className={`glass-card w-5/12 p-6 ${
                  index % 2 === 0 ? "mr-auto" : "ml-auto"
                }`}>
                  <div className="text-primary font-bold text-xl mb-2">{event.year}</div>
                  <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-bold mb-8 text-center"
          >
            Meet Our Team
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="glass-card overflow-hidden">
                  <div className="aspect-square w-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-primary text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </WorkspaceLayout>
  );
};

export default About;
