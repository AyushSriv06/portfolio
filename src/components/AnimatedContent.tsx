"use client"

import { motion } from "framer-motion"
import { FaGraduationCap, FaBriefcase, FaTrophy, FaCode, FaUsers, FaAward, FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { SiTypescript, SiReact, SiNodedotjs, SiMongodb, SiDocker } from "react-icons/si"
import { SectionContainer, SectionTitle } from "@/components/Layout"
import Image from "next/image"
import Link from "next/link"

const PROJECTS = [
  {
    title: "Zipped - Workflow Automation Platform",
    description: "A scalable platform automating multi-step workflows with user-defined triggers and actions, achieving 95% execution success rate with event-driven microservices architecture.",
    image: "/projects/zipped.png",
    tags: ["Next.js", "Tailwind CSS", "Kafka", "Docker", "PostgreSQL", "Prisma"],
    codeLink: "https://github.com/ayush-srivastava/zipped",
    type: "Web Development"
  },
  {
    title: "ITshare - P2P File Sharing Application",
    description: "Peer-to-peer CLI application with UDP broadcast peer discovery and room-based transfers, enabling seamless file sharing across 100+ devices with 75% improved efficiency.",
    image: "/projects/itshare.png",
    tags: ["Go", "TCP", "UDP", "Networking", "CLI"],
    codeLink: "https://github.com/ayush-srivastava/itshare",
    type: "Networking"
  },
  {
    title: "Itexectes - Remote Code Executer",
    description: "A remote code execution platform built using Kubernetes and Docker for secure and scalable code execution in isolated environments.",
    image: "/projects/itexectes.png",
    tags: ["Kubernetes", "Docker", "DevOps", "Microservices"],
    codeLink: "https://github.com/ayush-srivastava/itexectes",
    type: "DevOps"
  },
  {
    title: "Len-Den - Digital Wallet Application",
    description: "Full-stack wallet application enabling secure P2P transactions for 200+ users with simulated bank webhook integration processing 1000+ monthly transactions.",
    image: "/projects/len-den.png",
    tags: ["Next.js", "Tailwind CSS", "Prisma", "Node.js", "NextAuth", "PostgreSQL"],
    codeLink: "https://github.com/ayush-srivastava/len-den",
    type: "Web Development"
  }
]

export default function AnimatedContent() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <SectionContainer className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container px-4 mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.h1 
              className="text-4xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-600 to-primary"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Ayush Srivastava
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full Stack Developer & Software Engineer
            </motion.p>
            
            <motion.p 
              className="text-lg text-muted-foreground/80 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Passionate about building scalable web applications, workflow automation platforms, 
              and innovative software solutions. Currently pursuing B.Tech in Electrical and Electronics Engineering 
              at IIIT Gwalior with expertise in modern web technologies and backend systems.
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { icon: SiTypescript, label: "TypeScript" },
                { icon: SiReact, label: "React/Next.js" },
                { icon: SiNodedotjs, label: "Node.js" },
                { icon: SiMongodb, label: "MongoDB" },
                { icon: SiDocker, label: "Docker" },
                { icon: FaCode, label: "Full Stack" }
              ].map((tech, index) => (
                <div 
                  key={tech.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent-foreground"
                >
                  <tech.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{tech.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Projects Section */}
      <SectionContainer id="projects" className="bg-accent/5">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="Showcase of my recent work and technical expertise"
          centered
        />
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-accent/10 hover:border-primary/20"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                    {project.type}
                  </span>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-accent/20 text-accent-foreground text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex items-center gap-3">
                  <Link
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                    View Code
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            View All Projects
            <FaExternalLinkAlt className="w-4 h-4" />
          </Link>
        </motion.div>
      </SectionContainer>

      {/* Experience Section */}
      <SectionContainer id="experience" className="bg-accent/5">
        <SectionTitle 
          title="Experience" 
          subtitle="Professional journey and key contributions"
          centered
        />
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Zoss Water Products */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background rounded-xl p-6 shadow-sm border"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <FaBriefcase className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground">Software Development Engineer Intern</h3>
                <p className="text-primary font-medium">Zoss Water Products</p>
                <p className="text-sm text-muted-foreground mb-4">June 2025 – Present • Remote</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Architected comprehensive business management platform serving 500+ customers using Node.js, Express.js, and MongoDB, maintained on AWS infrastructure</li>
                  <li>• Engineered automated service request processing system handling 200+ daily requests through REST APIs, reducing manual processing time by 80% while improving customer response efficiency</li>
                  <li>• Constructed feature-rich admin CRM dashboard managing 1000+ service records with real-time analytics capabilities, boosting operational efficiency by 60%</li>
                  <li>• Integrated secure payment gateway with Razorpay processing ₹50,000+ monthly transactions and configured SMTP email service delivering automated notifications weekly</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* AMR-Group Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-background rounded-xl p-6 shadow-sm border opacity-60"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-secondary/10 text-secondary-foreground">
                <FaBriefcase className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground">Full Stack Developer</h3>
                <p className="text-primary font-medium">AMR-Group</p>
                <p className="text-sm text-muted-foreground mb-4">Details to be added</p>
                <p className="text-muted-foreground italic">Experience details will be updated soon...</p>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Education Section */}
      <SectionContainer id="education">
        <SectionTitle 
          title="Education" 
          subtitle="Academic background and achievements"
          centered
        />
        
        <div className="max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background rounded-xl p-6 shadow-sm border"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <FaGraduationCap className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground">Bachelor of Technology in Electrical and Electronics Engineering</h3>
                <p className="text-primary font-medium">Indian Institute of Information Technology, Gwalior</p>
                <p className="text-sm text-muted-foreground">Aug 2023 – May 2027 • Madhya Pradesh, India</p>
                <p className="text-lg font-semibold text-green-600 mt-2">CGPA: 8.23/10</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-background rounded-xl p-6 shadow-sm border"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-secondary/10 text-secondary-foreground">
                <FaGraduationCap className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground">Class 12th (CBSE)</h3>
                <p className="text-primary font-medium">Anil Saraswati Vidya Mandir</p>
                <p className="text-sm text-muted-foreground">2023 • Ayodhya, India</p>
                <p className="text-lg font-semibold text-green-600 mt-2">Percentage: 92.8%</p>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Achievements & Leadership Section */}
      <SectionContainer id="achievements" className="bg-accent/5">
        <SectionTitle 
          title="Achievements & Leadership" 
          subtitle="Recognition and community involvement"
          centered
        />
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background rounded-xl p-6 shadow-sm border"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-green-100 text-green-600">
                <FaCode className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground mb-2">Coding Excellence</h3>
                <p className="text-muted-foreground text-sm">
                  Solved 400+ Data Structures and Algorithms problems across multiple coding platforms including LeetCode, CodeChef, and GeeksforGeeks maintaining a 2-star rating on CodeChef
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-background rounded-xl p-6 shadow-sm border"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                <FaUsers className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground mb-2">Batch Representative</h3>
                <p className="text-muted-foreground text-sm">
                  Currently serving as Batch Representative at Abhigyan Abhikaushalam Students' Forum Technical Forum, representing 300+ students and facilitating technical coordination
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background rounded-xl p-6 shadow-sm border"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-purple-100 text-purple-600">
                <FaTrophy className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground mb-2">Community Leadership</h3>
                <p className="text-muted-foreground text-sm">
                  Executive member at Student Gyan Movement managing 50+ volunteers for educational initiatives and community outreach programs
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-background rounded-xl p-6 shadow-sm border"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-orange-100 text-orange-600">
                <FaAward className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground mb-2">Event Organization</h3>
                <p className="text-muted-foreground text-sm">
                  Core Team Member at Infotsav technical fest organizing events for 1000+ participants and coordinating technical competitions
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionContainer>
    </div>
  )
} 