export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Modern, scalable e-commerce solution with real-time inventory management and advanced analytics.",
      image: "/projects/ecommerce.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      category: "Web Development",
      stats: { users: "50K+", performance: "99.9%", growth: "+150%" }
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transaction processing.",
      image: "/projects/banking.jpg",
      technologies: ["React Native", "Express", "MongoDB", "Stripe"],
      category: "Mobile App",
      stats: { downloads: "100K+", rating: "4.8/5", security: "Bank-grade" }
    },
    {
      title: "Cloud Infrastructure",
      description: "Multi-cloud infrastructure setup with automated scaling, monitoring, and disaster recovery.",
      image: "/projects/cloud.jpg",
      technologies: ["AWS", "Kubernetes", "Docker", "Terraform"],
      category: "Cloud Solutions",
      stats: { uptime: "99.99%", cost: "-40%", scaling: "Auto" }
    },
    {
      title: "Healthcare Platform",
      description: "HIPAA-compliant telemedicine platform with video consultations and patient management.",
      image: "/projects/healthcare.jpg",
      technologies: ["Vue.js", "Django", "PostgreSQL", "WebRTC"],
      category: "Web Development",
      stats: { patients: "25K+", consultations: "100K+", satisfaction: "95%" }
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      content: "Hiperonit transformed our outdated systems into a modern, scalable platform. Their expertise in cloud migration saved us 40% in operational costs while improving performance dramatically.",
      rating: 5,
      avatar: "/testimonials/sarah.jpg"
    },
    {
      name: "Michael Chen",
      role: "CTO, FinanceFlow",
      company: "FinanceFlow",
      content: "The mobile banking app they developed exceeded our expectations. The security implementation is top-notch, and user adoption has been phenomenal. Highly recommended!",
      rating: 5,
      avatar: "/testimonials/michael.jpg"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Medical Director, HealthCare Plus",
      company: "HealthCare Plus",
      content: "Their telemedicine platform has revolutionized how we serve our patients. The HIPAA-compliant solution is intuitive, reliable, and has increased our patient satisfaction scores significantly.",
      rating: 5,
      avatar: "/testimonials/emily.jpg"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-primary-600 dark:bg-primary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Success Stories
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how we&apos;ve helped businesses across various industries achieve their digital transformation goals.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {projects.map((project) => (
            <div key={project.title} className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary-400 to-secondary-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-16 h-16 mx-auto mb-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm opacity-75">{project.category}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-xs rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                        {value}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-12">
            What Our Clients Say
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-sm">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={`star-${testimonial.name}-${i}`} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  &quot;{testimonial.content}&quot;
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-primary-600 dark:text-primary-400">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to Start Your Success Story?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses with our innovative IT solutions.
            </p>
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
