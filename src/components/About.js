'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  SiPytorch, 
  SiJupyter, 
  SiPostgresql, 
  SiHtml5, 
  SiOpencv, 
  SiGooglecolab, 
  SiRoboflow, 
  SiKaggle, 
  SiPython, 
  SiLaravel, 
  SiReact
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

import { DiPhotoshop } from 'react-icons/di';
import { Palette, FileText, Camera, Mic } from 'lucide-react';

import AnimateOnScroll from './AnimateOnScroll';
import styles from './About.module.css';

const skills = [
  {
    name: 'Machine Learning',
    icon: SiPytorch,
    color: '#EE4C2C', // PyTorch Orange
  },
  {
    name: 'Data Science',
    icon: SiJupyter,
    color: '#F37626', // Jupyter Orange
  },
  {
    name: 'Data Mining',
    icon: SiPostgresql,
    color: '#336791', // PostgreSQL Blue
  },
  {
    name: 'Front End',
    icon: SiHtml5,
    color: '#E34F26', // HTML5 Orange
  },
  {
    name: 'Computer Vision',
    icon: SiOpencv,
    color: '#00E676', // OpenCV Green
  },
  {
    name: 'Graphic Design',
    icon: Palette,
    color: '#EC4899', // Design Pink
  },
  {
    name: 'Scientific Writing',
    icon: FileText,
    color: '#4F46E5', // Sci Indigo
  },
  {
    name: 'Photography',
    icon: Camera,
    color: '#00D2FF', // Lense Blue
  },
  {
    name: 'Public Speaking',
    icon: Mic,
    color: '#EF4444', // Podcast Red
  },
];

const tools = [
  {
    name: 'VS Code',
    icon: VscVscode,
    color: '#007ACC', // VS Code Blue
  },
  {
    name: 'Google Colab',
    icon: SiGooglecolab,
    color: '#F9AB00', // Colab Orange
  },
  {
    name: 'Roboflow',
    icon: SiRoboflow,
    color: '#8552FF', // Roboflow Purple
  },
  {
    name: 'Kaggle',
    icon: SiKaggle,
    color: '#20BEFF', // Kaggle Light Blue
  },
  {
    name: 'Python',
    icon: SiPython,
    color: '#3776AB', // Python Blue
  },
  {
    name: 'Adobe Photoshop',
    icon: DiPhotoshop,
    color: '#31A8FF', // Photoshop Cyan
  },
  {
    name: 'Laravel',
    icon: SiLaravel,
    color: '#FF2D20', // Laravel Red
  },
  {
    name: 'React.js',
    icon: SiReact,
    color: '#61DAFB', // React Cyan
  },
];

export default function About() {
  const [activePhoto, setActivePhoto] = useState(1);

  return (
    <section className={styles.about} id="about">
      <div className="section">
        <AnimateOnScroll>
          <span className="section-label">About Me</span>
          <h2 className="section-title">Passionate about data.</h2>
          <p className="section-subtitle">
            A data-focused professional with a strong foundation in analysis,
            machine learning, and data mining. I thrive on uncovering patterns
            and turning complex datasets into clear, impactful solutions.
          </p>
        </AnimateOnScroll>

        {/* Track Record Section */}
        <div className={styles.trackRecord}>
          <AnimateOnScroll animation="fade-left" delay={150} className={styles.imageWrapper}>
            <div className={styles.photoStack}>
              {/* Photo 1: porto.jpeg */}
              <div 
                className={`${styles.photoContainer} ${activePhoto === 1 ? styles.activeCard : styles.inactiveCard}`}
                onClick={() => setActivePhoto(1)}
              >
                <div className={styles.photoGlow} />
                <Image
                  src="/porto.jpeg"
                  alt="Ganendra Pradipa - Portrait 1"
                  width={380}
                  height={480}
                  className={styles.photo}
                  priority
                />
              </div>

              {/* Photo 2: porto2.jpg */}
              <div 
                className={`${styles.photoContainer} ${activePhoto === 2 ? styles.activeCard : styles.inactiveCard} ${styles.secondPhoto}`}
                onClick={() => setActivePhoto(2)}
              >
                <div className={styles.photoGlow} />
                <Image
                  src="/porto2.jpg"
                  alt="Ganendra Pradipa - Portrait 2"
                  width={380}
                  height={480}
                  className={styles.photo}
                  priority
                />
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-right" delay={200} className={styles.recordContent}>
            <h3 className={styles.recordTitle}>Professional Track Record</h3>
            <p className={styles.recordIntro}>
              My experience spans multiple domains in tech, combining data intelligence 
              with practical development to build impact-driven solutions.
            </p>
            
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <span className={styles.timelineYear}>2022 - Present</span>
                <h4 className={styles.timelineRole}>Information System Student @Universitas Musamus</h4>
                <p className={styles.timelineDesc}>
                  Studying Information Systems, where I hone my analytical and technical skills,
                  especially in data science, web development and machine learning.
                </p>
              </div>

              <div className={styles.timelineItem}>
                <span className={styles.timelineYear}>Jun 2025 - Present</span>
                <h4 className={styles.timelineRole}>Research & Development @SMART CENTER UNIVERSITAS MUSAMUS</h4>
                <p className={styles.timelineDesc}>
                  Working on developing AI applications to solve problems in the Marind sub-district,
                  to help local communities in various fields.
                </p>
              </div>

              <div className={styles.timelineItem}>
                <span className={styles.timelineYear}>Jun 2025 - Dec 2025</span>
                <h4 className={styles.timelineRole}>Research Assistant - Computer Vision and Artificial Intelligence @Information System Department of Universitas Musamus</h4>
                <p className={styles.timelineDesc}>
                  Successfully contributed to the development and evaluation of AI-based object detection models for aquatic weed detection using drone imagery, achieving mAP@50 scores of up to 44.7% on primary drone datasets and above 95% on secondary datasets during model experimentation and validation.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        <div className={styles.grid}>
          {/* Left Column: Skills */}
          <div className={styles.skillsSection}>
            <AnimateOnScroll animation="fade-left" delay={100}>
              <h3 className={styles.subheading}>Skills & Expertises</h3>
            </AnimateOnScroll>
            <div className={styles.skillsGrid}>
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <AnimateOnScroll
                    key={skill.name}
                    animation="zoom-in"
                    delay={150 + index * 40}
                  >
                    <div className={`${styles.skillCard} card`}>
                      <div 
                        className={styles.skillIcon}
                        style={{
                          color: skill.color,
                          backgroundColor: `${skill.color}18` // ~9% opacity brand background color
                        }}
                      >
                        <IconComponent size={18} />
                      </div>
                      <span className={styles.skillName}>{skill.name}</span>
                    </div>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>

          {/* Right Column: Tools */}
          <div className={styles.toolsSection}>
            <AnimateOnScroll animation="fade-right" delay={150}>
              <h3 className={styles.subheading}>Tools & Frameworks</h3>
            </AnimateOnScroll>
            <div className={styles.toolsGrid}>
              {tools.map((tool, index) => {
                const IconComponent = tool.icon;
                return (
                  <AnimateOnScroll
                    key={tool.name}
                    animation="zoom-in"
                    delay={200 + index * 40}
                  >
                    <div className={`${styles.toolCard} card`}>
                      <div 
                        className={styles.toolIcon}
                        style={{
                          color: tool.color,
                          backgroundColor: `${tool.color}18` // ~9% opacity brand background color
                        }}
                      >
                        <IconComponent size={18} />
                      </div>
                      <span className={styles.toolName}>{tool.name}</span>
                    </div>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
