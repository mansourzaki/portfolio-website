import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail, MapPin, Send, Briefcase, Code2, Palette, Layers, Sparkles, Menu, X, GraduationCap, Heart, GitBranch, Star, GitPullRequest } from "lucide-react";
import { SiGithub, SiLinkedin, SiX, SiDribbble } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import {
  personalInfo,
  socialLinks,
  aboutInfo,
  skills,
  experiences,
  projects,
  projectCategories,
  education,
  volunteering,
} from "@/config/portfolio";

const socialIconMap = {
  github: SiGithub,
  linkedin: SiLinkedin,
  x: SiX,
  dribbble: SiDribbble,
};

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#contributions", label: "Open Source" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href="#home"
            className="font-serif text-2xl font-bold tracking-tight"
            whileHover={{ scale: 1.02 }}
            data-testid="link-logo"
          >
            Portfolio<span className="text-gradient">.</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" data-testid="button-hire-me">
              <Mail className="w-4 h-4 mr-2" />
              Hire Me
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
              <Button className="w-full" data-testid="button-mobile-hire-me">
                <Mail className="w-4 h-4 mr-2" />
                Hire Me
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            {personalInfo.availableForWork && (
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium" data-testid="badge-status">
                <Sparkles className="w-4 h-4 mr-2" />
                Available for new projects
              </Badge>
            )}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
            data-testid="text-hero-title"
          >
            {personalInfo.title}
            <br />
            <span className="text-gradient">{personalInfo.subtitle}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
            data-testid="text-hero-description"
          >
            {personalInfo.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button size="lg" asChild data-testid="button-view-work">
              <a href="#projects">
                View My Work
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild data-testid="button-get-in-touch">
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-6 mt-12"
          >
            {Object.entries(socialLinks).map(([key, href]) => {
              const Icon = socialIconMap[key as keyof typeof socialIconMap];
              return (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors p-2"
                  data-testid={`link-social-${key}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors" data-testid="link-scroll-down">
            <span className="text-sm mb-2">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-card/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" data-testid="text-about-title">
              About <span className="text-gradient">Me</span>
            </h2>
            {aboutInfo.bio.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground text-lg leading-relaxed mb-8" data-testid={index === 0 ? "text-about-description" : undefined}>
                {paragraph}
              </p>
            ))}

            <div className="flex items-center gap-4 mb-12">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Based in {personalInfo.location}</span>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {aboutInfo.stats.map(({ label, value }, index) => {
                const icons = [Code2, Palette, Layers];
                const Icon = icons[index % icons.length];
                return (
                <div key={label} className="text-center p-4 rounded-lg bg-background" data-testid={`stat-${label.toLowerCase()}`}>
                    <Icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="font-bold text-2xl mb-1">{value}</div>
                    <div className="text-muted-foreground text-sm">{label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-6 flex items-center gap-3" data-testid="text-skills-title">
                <Code2 className="w-6 h-6 text-primary" />
                Skills & Expertise
              </h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z]/g, "-")}`}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold mb-6 flex items-center gap-3" data-testid="text-experience-title">
                <Briefcase className="w-6 h-6 text-primary" />
                Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-6 border-l-2 border-primary/30"
                    data-testid={`experience-${index}`}
                  >
                    <div className="absolute left-0 top-0 w-3 h-3 bg-primary rounded-full -translate-x-[7px]" />
                    <div className="font-bold text-lg">{exp.role}</div>
                    <div className="text-primary font-medium">{exp.company}</div>
                    <div className="text-muted-foreground text-sm mb-2">{exp.period}</div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function EducationVolunteeringSection() {
  return (
    <section id="education" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" data-testid="text-education-title">
            Education & <span className="text-gradient">Volunteering</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic background and community involvement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl font-bold mb-6 flex items-center gap-3" data-testid="text-education-heading">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6" data-testid={`education-${index}`}>
                  <div className="font-bold text-lg">{edu.degree}</div>
                  <div className="text-primary font-medium">{edu.institution}</div>
                  <div className="text-muted-foreground text-sm">{edu.period}</div>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl font-bold mb-6 flex items-center gap-3" data-testid="text-volunteering-heading">
              <Heart className="w-6 h-6 text-primary" />
              Volunteering
            </h3>
            <div className="space-y-6">
              {volunteering.map((vol, index) => (
                <Card key={index} className="p-6" data-testid={`volunteering-${index}`}>
                  <div className="font-bold text-lg">{vol.role}</div>
                  <div className="text-primary font-medium">{vol.event}</div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GitHubContributionsSection() {
  const [stats, setStats] = useState<{
    publicRepos: number;
    followers: number;
    contributions: Array<{ repo: string; title: string; url: string; type: string }>;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const username = socialLinks.github.split('/').pop() || 'mansouralhaddad';
        
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userRes.json();
        
        const eventsRes = await fetch(`https://api.github.com/users/${username}/events/public?per_page=10`);
        const eventsData = await eventsRes.json();
        
        const contributions = eventsData
          .filter((e: any) => ['PushEvent', 'PullRequestEvent', 'IssuesEvent'].includes(e.type))
          .slice(0, 5)
          .map((e: any) => ({
            repo: e.repo.name,
            title: e.type === 'PushEvent' 
              ? `${e.payload.commits?.[0]?.message?.slice(0, 50) || 'Code push'}...`
              : e.type === 'PullRequestEvent'
              ? e.payload.pull_request?.title || 'Pull Request'
              : e.payload.issue?.title || 'Issue',
            url: e.type === 'PullRequestEvent' 
              ? e.payload.pull_request?.html_url 
              : e.type === 'IssuesEvent'
              ? e.payload.issue?.html_url
              : `https://github.com/${e.repo.name}`,
            type: e.type.replace('Event', ''),
          }));

        setStats({
          publicRepos: userData.public_repos || 0,
          followers: userData.followers || 0,
          contributions,
        });
      } catch (error) {
        console.error('Failed to fetch GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <section id="contributions" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" data-testid="text-contributions-title">
            Open Source <span className="text-gradient">Contributions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Actively contributing to Flutter, Riverpod, and other open-source projects.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-pulse space-y-4 w-full max-w-2xl">
              <div className="h-20 bg-muted rounded-lg" />
              <div className="h-20 bg-muted rounded-lg" />
              <div className="h-20 bg-muted rounded-lg" />
            </div>
          </div>
        ) : stats ? (
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6 mb-12"
            >
              <Card className="p-6 text-center min-w-[150px]" data-testid="stat-repos">
                <GitBranch className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold">{stats.publicRepos}</div>
                <div className="text-muted-foreground text-sm">Public Repos</div>
              </Card>
              <Card className="p-6 text-center min-w-[150px]" data-testid="stat-followers">
                <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold">{stats.followers}</div>
                <div className="text-muted-foreground text-sm">Followers</div>
              </Card>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <h3 className="font-serif text-xl font-bold mb-6 flex items-center gap-3 justify-center" data-testid="text-recent-activity">
                <GitPullRequest className="w-5 h-5 text-primary" />
                Recent Activity
              </h3>
              <div className="space-y-4">
                {stats.contributions.length > 0 ? (
                  stats.contributions.map((contribution, index) => (
                    <motion.a
                      key={index}
                      href={contribution.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="block"
                      data-testid={`contribution-${index}`}
                    >
                      <Card className="p-4 hover-elevate cursor-pointer">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <SiGithub className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium truncate">{contribution.title}</div>
                            <div className="text-sm text-muted-foreground truncate">{contribution.repo}</div>
                          </div>
                          <Badge variant="secondary">{contribution.type}</Badge>
                        </div>
                      </Card>
                    </motion.a>
                  ))
                ) : (
                  <Card className="p-6 text-center">
                    <p className="text-muted-foreground">Loading recent contributions...</p>
                  </Card>
                )}
              </div>
            </div>

            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" data-testid="link-view-github">
                  <SiGithub className="w-4 h-4 mr-2" />
                  View Full GitHub Profile
                </a>
              </Button>
            </div>
          </div>
        ) : (
          <Card className="p-8 text-center max-w-2xl mx-auto">
            <SiGithub className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Unable to load GitHub data. Please check back later.</p>
            <Button asChild variant="outline" className="mt-4">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                View GitHub Profile
              </a>
            </Button>
          </Card>
        )}
      </div>
    </section>
  );
}

function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const categories = projectCategories;

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" data-testid="text-projects-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-projects-description">
            A selection of my recent work across web development, design, and mobile applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              data-testid={`button-filter-${category.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden hover-elevate cursor-pointer" data-testid={`card-project-${project.id}`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <a
                        href={project.link}
                        className="text-white font-medium flex items-center gap-2"
                        data-testid={`link-project-${project.id}`}
                      >
                        View Project <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-primary text-sm font-medium mb-2">{project.category}</div>
                    <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-card/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16"
        >
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" data-testid="text-contact-title">
              Let's Work <span className="text-gradient">Together</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8" data-testid="text-contact-description">
              Have a project in mind or just want to chat? Feel free to reach out.
              I'm always open to discussing new opportunities and creative ideas.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-muted-foreground text-sm">Email</div>
                  <a href={`mailto:${personalInfo.email}`} className="font-medium hover:text-primary transition-colors" data-testid="link-email">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-muted-foreground text-sm">Location</div>
                  <div className="font-medium" data-testid="text-location">{personalInfo.location}</div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div className="text-muted-foreground mb-4">Connect with me</div>
              <div className="flex gap-4">
                {Object.entries(socialLinks).map(([key, href]) => {
                  const Icon = socialIconMap[key as keyof typeof socialIconMap];
                  return (
                    <a
                      key={key}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-background flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
                      data-testid={`link-contact-social-${key}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <Card className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} data-testid="input-name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" type="email" {...field} data-testid="input-email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your project..."
                          className="min-h-[150px] resize-none"
                          {...field}
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
                  disabled={mutation.isPending}
                  data-testid="button-submit-contact"
                >
                  {mutation.isPending ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-serif text-xl font-bold" data-testid="text-footer-logo">
            {personalInfo.name}<span className="text-gradient">.</span>
          </div>
          <div className="text-muted-foreground text-sm" data-testid="text-copyright">
            © {new Date().getFullYear()} All rights reserved.
          </div>
          <div className="flex gap-6">
            {Object.entries(socialLinks).slice(0, 3).map(([key, href]) => {
              const Icon = socialIconMap[key as keyof typeof socialIconMap];
              return (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid={`link-footer-social-${key}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EducationVolunteeringSection />
      <GitHubContributionsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
