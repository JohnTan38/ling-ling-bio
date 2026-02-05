'use client';

import React, { useState } from 'react';
import { User, Briefcase, GraduationCap, Award, Mail, Linkedin, ChevronRight, Menu, X, BrainCircuit, Mic2 } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'Journey', id: 'journey' },
    { name: 'Expertise', id: 'expertise' },
    { name: 'Advocacy', id: 'advocacy' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNav = (id: string) => {
    setActiveTab(id);
    setIsMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      organization: formData.get('organization') as string,
      message: formData.get('message') as string,
    };
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email)) {
      setFormStatus('error');
      setFormMessage('Please enter a valid email address (e.g., name@example.com).');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus('success');
        setFormMessage('Thank you for reaching out! Your message has been sent successfully.');
        (e.target as HTMLFormElement).reset();
        
        // Reset form status after 5 seconds
        setTimeout(() => {
          setFormStatus('idle');
          setFormMessage('');
        }, 5000);
      } else {
        setFormStatus('error');
        setFormMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setFormStatus('error');
      setFormMessage('Failed to send message. Please try again later.');
    }
  };

  // Shared Components
  const SectionHeading = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl font-bold text-slate-800 mb-8 border-b-2 border-indigo-100 pb-2 inline-block">
      {children}
    </h2>
  );

  const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`bg-white/80 backdrop-blur-sm border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Background Gradients */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/40 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-100/40 blur-[100px]" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => handleNav('home')}>
              <div className="w-8 h-8 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">K</div>
              <span className="font-bold text-xl tracking-tight text-slate-800">Khor Ling Ling</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNav(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeTab === item.id ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-500'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-500 hover:text-indigo-600 p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-2 animate-in slide-in-from-top duration-200">
            {navigation.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.id)}
                className="block w-full text-left px-4 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600 rounded-lg"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        
        {/* Home Section */}
        <section id="home" className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row items-center gap-12 pt-8">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl rotate-3 bg-indigo-200 relative">
                 <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 z-10" />
                 {/* Profile photo - Update this when actual photo is uploaded */}
                 <Image 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                    alt="Ms Khor Ling Ling" 
                    width={800}
                    height={800}
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                    priority
                 />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-indigo-50 text-indigo-700 font-semibold text-sm tracking-wide uppercase">
                   HR Leader • Mentor • Educator
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                  Empowering the Next Generation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Global Leaders.</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
                  Ms Khor Ling Ling is a passionate people leader with a distinguished career in Human Resources across public healthcare and multinational organizations. She bridges the gap between today&apos;s professional landscape and tomorrow&apos;s talent.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <button 
                    type="button"
                    onClick={() => handleNav('journey')}
                    className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all transform hover:-translate-y-1 flex items-center gap-2"
                  >
                    View Professional Profile <ChevronRight size={18} />
                  </button>
                  <button 
                    type="button"
                    onClick={() => handleNav('contact')}
                    className="px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all"
                  >
                    Connect
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mx-auto mb-4">
                  <Briefcase size={24} />
                </div>
                <h3 className="font-bold text-xl mb-2">HR Strategy</h3>
                <p className="text-slate-600 text-sm">Expertise in Performance, Rewards, and Strategic HR leadership in complex healthcare systems.</p>
              </Card>
              <Card className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mx-auto mb-4">
                  <Mic2 size={24} />
                </div>
                <h3 className="font-bold text-xl mb-2">Public Speaking</h3>
                <p className="text-slate-600 text-sm">Regular speaker at university career talks, sharing practical insights and real-world perspectives.</p>
              </Card>
              <Card className="text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mx-auto mb-4">
                  <GraduationCap size={24} />
                </div>
                <h3 className="font-bold text-xl mb-2">Education & Training</h3>
                <p className="text-slate-600 text-sm">Certified Mentor and Adjunct Lecturer bridging academia with industry best practices.</p>
              </Card>
            </div>
          </section>

        {/* Journey Section */}
        <section id="journey" className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-12">
            <SectionHeading>Professional Journey</SectionHeading>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                    <Briefcase size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2">Deputy Director, Performance & Rewards</h3>
                    <p className="text-indigo-600 font-semibold text-sm mb-3">Changi General Hospital</p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Leading strategic performance management and total rewards initiatives across the Ministry of Health Holdings (MOHH) healthcare ecosystem, driving talent excellence and organizational effectiveness.
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-50 rounded-xl text-purple-600">
                    <GraduationCap size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2">Adjunct Lecturer</h3>
                    <p className="text-indigo-600 font-semibold text-sm mb-3">Republic Polytechnic</p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Sharing industry insights and practical HR knowledge with future professionals, bringing real-world case studies into the classroom to prepare students for the evolving workplace.
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                    <Briefcase size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2">Head of Human Resources, Regional Health System Office</h3>
                    <p className="text-indigo-600 font-semibold text-sm mb-3">NUHS</p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Oversees regional HR strategy and workforce initiatives, aligning talent priorities across clinical and corporate functions to strengthen system-wide capability.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-slate-50 to-indigo-50/30 rounded-2xl p-8 border border-indigo-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Career Highlights</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-indigo-600" />
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Strategic HR Leadership</h4>
                    <p className="text-slate-600 text-sm">15+ years driving talent strategies across public healthcare and multinational corporations, specializing in performance management, compensation frameworks, and organizational development.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-indigo-600" />
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Healthcare HR Excellence</h4>
                    <p className="text-slate-600 text-sm">Deep expertise in navigating complex healthcare HR challenges, from clinical workforce planning to regulatory compliance and union engagement.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-indigo-600" />
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Mentorship & Development</h4>
                    <p className="text-slate-600 text-sm">Passionate about nurturing the next generation through formal mentorship programs, university engagements, and scholarship panel participation.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        {/* Expertise Section */}
        <section id="expertise" className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-12">
            <SectionHeading>Core Expertise</SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Performance Management",
                  items: ["Goal Setting & OKRs", "Performance Reviews & Calibration", "360-Degree Feedback Systems", "Succession Planning"]
                },
                {
                  title: "Rewards & Compensation",
                  items: ["Total Rewards Strategy", "Job Evaluation & Grading", "Incentive Program Design", "Market Benchmarking"]
                },
                {
                  title: "Talent Development",
                  items: ["Leadership Development Programs", "Career Pathing Frameworks", "High-Potential Identification", "Competency Mapping"]
                },
                {
                  title: "Strategic HR",
                  items: ["HR Analytics & Metrics", "Organizational Design", "Change Management", "HR Policy Development"]
                }
              ].map((expertise, index) => (
                <Card key={index}>
                  <h3 className="font-bold text-xl mb-4 text-indigo-900">{expertise.title}</h3>
                  <ul className="space-y-2">
                    {expertise.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                        <ChevronRight size={16} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>

            <Card className="!bg-gradient-to-r !from-indigo-500/90 !via-blue-500/85 !to-purple-500/90 !border-none text-white py-12 px-8 shadow-lg shadow-indigo-200/40">
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-6 italic">&quot;Empowering the next generation is not just about sharing knowledge; it&apos;s about building the confidence to navigate ambiguity.&quot;</h3>
                <div className="w-12 h-1 bg-indigo-500 mx-auto rounded-full" />
              </div>
            </Card>
          </section>

        {/* Advocacy Section */}
        <section id="advocacy" className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-12">
            <SectionHeading>Advocacy & Mentorship</SectionHeading>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-xl text-slate-600 leading-relaxed mb-12">
                Ms Khor believes deeply in the power of education and mentorship. Her commitment to students extends beyond the classroom and into the boardrooms where future talent is selected.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <div className="text-indigo-600 font-bold mb-2">Panelist</div>
                <h4 className="font-bold text-lg mb-2">MOHH Scholarship Panels</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Contributes to shaping the next generation of healthcare leaders as an interviewer and selection panel member for MOHH Scholarships.
                </p>
              </Card>
              <Card>
                <div className="text-indigo-600 font-bold mb-2">Mentor</div>
                <h4 className="font-bold text-lg mb-2">Mentor@Work</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Certified Mentor at Republic Polytechnic, dedicated to providing one-on-one guidance for students entering the workforce.
                </p>
              </Card>
              <Card>
                <div className="text-indigo-600 font-bold mb-2">Speaker</div>
                <h4 className="font-bold text-lg mb-2">University Engagement</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Regular contributor at university career talks, delivering practical career guidance and motivational sessions for fresh graduates.
                </p>
              </Card>
            </div>

            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-12 text-center shadow-2xl">
                <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-4">Shaping Tomorrow&apos;s Talents</h3>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
                        Whether through formal training or informal mentorship, the goal is always clarity: helping students build a purposeful career path.
                    </p>
                </div>
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -translate-x-1/2 translate-y-1/2" />
            </div>
          </section>

        {/* Contact Section */}
        <section id="contact" className="animate-in fade-in slide-in-from-right-4 duration-500 max-w-4xl mx-auto">
            <SectionHeading>Connect with Ms Khor</SectionHeading>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Interested in collaborating for workshops, speaker engagements, or career mentorship? Feel free to reach out via professional channels.
                </p>
                
                <div className="space-y-4">
                  <a href="#" className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100 hover:border-indigo-300 hover:shadow-md transition-all group">
                    <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Linkedin size={20} />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-800">LinkedIn</h5>
                      <p className="text-slate-500 text-sm">Professional Profile</p>
                    </div>
                  </a>
                  <a href="mailto:lingkhor@solutioning.sg" className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100 hover:border-blue-300 hover:shadow-md transition-all group">
                    <div className="p-3 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-800">Email</h5>
                      <p className="text-slate-500 text-sm">Inquiries & Bookings</p>
                    </div>
                  </a>
                </div>
              </div>

              <Card className="p-8">
                <form className="space-y-4" onSubmit={handleFormSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" 
                      placeholder="Your name" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                      placeholder="you@example.com"
                      pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-semibold text-slate-700 mb-1">Organization / School</label>
                    <input 
                      type="text" 
                      id="organization"
                      name="organization"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" 
                      placeholder="e.g. NUS, Debate Club" 
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1">Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" 
                      placeholder="How can Ms Khor help you today?"
                    />
                  </div>
                  
                  {formMessage && (
                    <div className={`p-3 rounded-lg text-sm ${
                      formStatus === 'success' 
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                      {formMessage}
                    </div>
                  )}
                  
                  <button 
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="w-full py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'loading' ? 'Sending...' : 'Send Inquiry'}
                  </button>
                </form>
              </Card>
            </div>
          </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg text-slate-800">Khor Ling Ling</h3>
            <p className="text-slate-500 text-sm">HR Senior Professional • Trainer • Adjunct</p>
          </div>
          <div className="flex gap-8">
             {navigation.map(item => (
               <button 
                 key={item.id} 
                 type="button"
                 onClick={() => handleNav(item.id)}
                 className="text-slate-400 hover:text-indigo-600 text-sm font-medium transition-colors"
               >
                 {item.name}
               </button>
             ))}
          </div>
          <div className="text-slate-400 text-xs">
            © 2024 Khor Ling Ling. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
