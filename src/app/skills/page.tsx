"use client"

import React from "react";
import { motion } from "framer-motion";
import { SiTensorflow, SiPytorch, SiScikitlearn, SiNextdotjs, SiReact, 
  SiTypescript, SiNodedotjs, SiPython, SiTailwindcss, SiMongodb, 
  SiPostgresql, SiDocker, SiGit, SiAmazon, SiFirebase, SiKeras, 
  SiPandas, SiNumpy, SiJavascript, SiExpress, SiFastapi, SiDjango, 
  SiMysql, SiRedis, SiKubernetes } from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";

export default function Skills() {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-500" />,
          description: "Typed superset of JavaScript for large-scale applications",
          proficiency: "Advanced",
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-500" />,
          description: "Dynamic programming language for web development",
          proficiency: "Advanced",
        },
        {
          name: "C++",
          icon: <div className="text-blue-600">C++</div>,
          description: "High-performance programming language for system programming",
          proficiency: "Intermediate",
        },
        {
          name: "C",
          icon: <div className="text-gray-600">C</div>,
          description: "Low-level programming language for system programming",
          proficiency: "Intermediate",
        },
        {
          name: "Golang",
          icon: <div className="text-blue-400">Go</div>,
          description: "Efficient language for concurrent programming and networking",
          proficiency: "Intermediate",
        },
        {
          name: "SQL",
          icon: <div className="text-orange-500">SQL</div>,
          description: "Database query language for data management",
          proficiency: "Intermediate",
        },
      ]
    },
    {
      name: "Frontend Technologies",
      skills: [
        {
          name: "React",
          icon: <SiReact className="text-blue-500" />,
          description: "Popular JavaScript library for building user interfaces",
          proficiency: "Advanced",
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-black" />,
          description: "React framework for production-ready web applications",
          proficiency: "Advanced",
        },
        {
          name: "Redux",
          icon: <div className="text-purple-500">Redux</div>,
          description: "Predictable state container for JavaScript applications",
          proficiency: "Intermediate",
        },
        {
          name: "TailwindCSS",
          icon: <SiTailwindcss className="text-teal-500" />,
          description: "Utility-first CSS framework for rapid UI development",
          proficiency: "Advanced",
        },
        {
          name: "CSS3",
          icon: <div className="text-blue-500">CSS3</div>,
          description: "Modern styling language for web applications",
          proficiency: "Intermediate",
        },
        {
          name: "HTML5",
          icon: <div className="text-orange-500">HTML5</div>,
          description: "Latest version of markup language for web content",
          proficiency: "Intermediate",
        },
      ]
    },
    {
      name: "Backend Technologies",
      skills: [
        {
          name: "Node.js",
          icon: <SiNodedotjs className="text-green-500" />,
          description: "JavaScript runtime for building scalable server-side applications",
          proficiency: "Advanced",
        },
        {
          name: "Express.js",
          icon: <SiExpress className="text-gray-600" />,
          description: "Minimal and flexible Node.js web application framework",
          proficiency: "Advanced",
        },
        {
          name: "REST API",
          icon: <div className="text-green-600">API</div>,
          description: "RESTful web services for client-server communication",
          proficiency: "Advanced",
        },
        {
          name: "Microservices",
          icon: <div className="text-blue-600">μS</div>,
          description: "Architectural pattern for building distributed systems",
          proficiency: "Intermediate",
        },
        {
          name: "Apache Kafka",
          icon: <div className="text-black">Kafka</div>,
          description: "Distributed streaming platform for real-time data processing",
          proficiency: "Intermediate",
        },
        {
          name: "WebSockets",
          icon: <div className="text-purple-500">WS</div>,
          description: "Real-time bidirectional communication protocol",
          proficiency: "Intermediate",
        },
      ]
    },
    {
      name: "Database Technologies",
      skills: [
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-blue-600" />,
          description: "Advanced open-source relational database",
          proficiency: "Advanced",
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-green-600" />,
          description: "NoSQL database for modern applications",
          proficiency: "Advanced",
        },
        {
          name: "MySQL",
          icon: <SiMysql className="text-blue-500" />,
          description: "Popular open-source relational database management system",
          proficiency: "Intermediate",
        },
        {
          name: "Prisma ORM",
          icon: <div className="text-indigo-500">Prisma</div>,
          description: "Modern database toolkit and ORM for TypeScript and Node.js",
          proficiency: "Intermediate",
        },
        {
          name: "Database Design",
          icon: <div className="text-gray-600">DB</div>,
          description: "Designing efficient and scalable database schemas",
          proficiency: "Intermediate",
        },
        {
          name: "Query Optimization",
          icon: <div className="text-green-600">⚡</div>,
          description: "Optimizing database queries for better performance",
          proficiency: "Intermediate",
        },
      ]
    },
    {
      name: "Development Tools",
      skills: [
        {
          name: "Docker",
          icon: <SiDocker className="text-blue-500" />,
          description: "Platform for developing, shipping, and running applications in containers",
          proficiency: "Advanced",
        },
        {
          name: "Git",
          icon: <SiGit className="text-red-500" />,
          description: "Distributed version control system for tracking changes",
          proficiency: "Advanced",
        },
        {
          name: "AWS",
          icon: <SiAmazon className="text-yellow-500" />,
          description: "Comprehensive cloud computing platform",
          proficiency: "Advanced",
        },
        {
          name: "Vercel",
          icon: <div className="text-black">▲</div>,
          description: "Platform for frontend frameworks and static sites",
          proficiency: "Intermediate",
        },
        {
          name: "Postman",
          icon: <div className="text-orange-500">📮</div>,
          description: "API development and testing platform",
          proficiency: "Intermediate",
        },
        {
          name: "Linux",
          icon: <div className="text-black">🐧</div>,
          description: "Open-source operating system for development and deployment",
          proficiency: "Intermediate",
        },
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
      transition: { duration: 0.2 },
    },
  };

  return (
    <main className="container mx-auto px-4 py-16 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">My Technical Skills</h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
          As a full stack developer passionate about web technologies and backend solutions, I continuously expand my
          expertise across these key technology areas.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-16"
      >
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            variants={categoryVariants}
            className="mb-12"
          >
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="text-2xl font-bold mb-8 pb-2 border-b-2 border-gray-200 dark:border-gray-700"
            >
              {category.name}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skillIdx}
                  variants={skillVariants}
                  whileHover="hover"
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{skill.icon}</div>
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{skill.description}</p>
                  <div className="flex items-center">
                    <div
                      className={`text-sm px-3 py-1 rounded-full ${
                        skill.proficiency === "Advanced"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      }`}
                    >
                      {skill.proficiency}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
} 