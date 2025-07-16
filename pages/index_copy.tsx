import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-slate-800">Your Name</div>
            <div className="flex space-x-6">
              <Link href="/" className="text-slate-600 hover:text-slate-900 font-medium">
                Home
              </Link>
              <Link href="/cv" className="text-slate-600 hover:text-slate-900 font-medium">
                CV
              </Link>
              <Link href="/projects" className="text-slate-600 hover:text-slate-900 font-medium">
                Projects
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Data Scientist
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                  Transforming Data into
                  <span className="text-blue-600"> Actionable Insights</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Passionate data scientist with expertise in machine learning, statistical analysis, and data
                  visualization. I specialize in extracting meaningful patterns from complex datasets to drive business
                  decisions and innovation.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">R</Badge>
                <Badge variant="outline">SQL</Badge>
                <Badge variant="outline">Machine Learning</Badge>
                <Badge variant="outline">Deep Learning</Badge>
                <Badge variant="outline">Data Visualization</Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/cv">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/projects">View Projects</Link>
                </Button>
              </div>
            </div>

            {/* Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=320&width=320"
                    alt="Professional headshot"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">DS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">About Me</h2>
          <div className="prose prose-lg mx-auto text-slate-600">
            <p>
              With over [X] years of experience in data science, I have developed a comprehensive skill set that spans
              the entire data pipeline—from data collection and preprocessing to advanced modeling and deployment. My
              expertise lies in translating complex business problems into data-driven solutions.
            </p>
            <p>
              I hold a [Your Degree] in [Your Field] and have worked across various industries including [Industry 1],
              [Industry 2], and [Industry 3]. My approach combines rigorous statistical methodology with practical
              business acumen to deliver impactful results.
            </p>
            <p>
              When I'm not analyzing data, you can find me contributing to open-source projects, writing technical
              articles, or exploring the latest developments in AI and machine learning.
            </p>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Machine Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Supervised & unsupervised learning, ensemble methods, neural networks, and model optimization.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Data Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Statistical analysis, hypothesis testing, A/B testing, and exploratory data analysis.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Data Visualization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Creating compelling visualizations using Matplotlib, Seaborn, Plotly, and Tableau.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Social Media */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-slate-300 mb-12">
            I'm always interested in discussing new opportunities and collaborations.
          </p>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center space-y-2">
              <Mail className="h-8 w-8 text-blue-400" />
              <span className="font-medium">Email</span>
              <a href="mailto:your.email@example.com" className="text-slate-300 hover:text-white">
                your.email@example.com
              </a>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <Phone className="h-8 w-8 text-blue-400" />
              <span className="font-medium">Phone</span>
              <a href="tel:+1234567890" className="text-slate-300 hover:text-white">
                +1 (234) 567-8900
              </a>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <MapPin className="h-8 w-8 text-blue-400" />
              <span className="font-medium">Location</span>
              <span className="text-slate-300">Your City, Country</span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6">
            <a href="https://linkedin.com/in/yourprofile" className="text-slate-300 hover:text-white transition-colors">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="https://github.com/yourusername" className="text-slate-300 hover:text-white transition-colors">
              <Github className="h-8 w-8" />
            </a>
            <a href="https://twitter.com/yourusername" className="text-slate-300 hover:text-white transition-colors">
              <Twitter className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
