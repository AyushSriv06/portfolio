import { motion } from "framer-motion"
import { FaGraduationCap, FaBriefcase, FaTrophy, FaCode, FaUsers, FaAward } from "react-icons/fa"
import { SiTypescript, SiReact, SiNodedotjs, SiMongodb, SiDocker, SiKubernetes } from "react-icons/si"
import Scene3D from "@/components/Scene3D"
import { SectionContainer, SectionTitle } from "@/components/Layout"

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <SectionContainer className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <Scene3D />
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