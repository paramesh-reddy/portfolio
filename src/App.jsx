import { BrowserRouter } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home | Full-Stack & Mobile App Developer Portfolio - Sainath Reddy Guraka</title>
        <meta 
          name="description" 
          content="Portfolio of Sainath Reddy Guraka, Full-Stack Developer with expertise in web and mobile application development. Showcasing projects, skills, and experience in React.js, React Native, Node.js, and more." 
        />
        <meta 
          name="keywords" 
          content="Full-Stack Developer, React.js Developer, React Native Developer, Mobile App Developer, Web Development, Node.js, JavaScript, Python, AWS, Docker, Nginx, Portfolio, Java, Redux, Expo, Next.js, TypeScript, Django, Spring Boot, MongoDB, PostgreSQL, DevOps, Material UI, Tailwind CSS, CI/CD, Firebase, Sainath Reddy Guraka" 
        />
        <link rel="canonical" href="https://sainathreddyguraka.netlify.app" />
        <meta property="og:title" content="Full-Stack & Mobile App Developer Portfolio | Sainath Reddy Guraka" />
        <meta 
          property="og:description" 
          content="Explore the portfolio of Sainath Reddy Guraka, a Full-Stack Developer with 2+ years of hands-on experience in web and mobile application development using React.js, React Native, Node.js, and more." 
        />
        <meta property="og:url" content="https://sainathreddyguraka.netlify.app" />
        <meta property="og:type" content="website" />
        
        {/* Adding JSON-LD Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://sainathreddyguraka.netlify.app",
            "name": "Sainath Reddy Guraka Portfolio",
            "description": "Portfolio of Sainath Reddy Guraka, Full-Stack and Mobile App Developer specializing in modern web and mobile development technologies.",
            "author": {
              "@type": "Person",
              "name": "Sainath Reddy Guraka"
            }
          })}
        </script>
      </Helmet>
      
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
