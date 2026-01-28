import { BrowserRouter } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home | Full-Stack & Mobile App Developer Portfolio - ParameshWar Reddy Guraka</title>
        <meta 
          name="description" 
          content="Portfolio of ParameshWar Reddy Guraka, Full-Stack Developer with expertise in web application development. Showcasing projects, skills, and experience in React.js,Next.js, Node.js,python,Fast Api,MongoDB, and more." 
        />
        <meta 
          name="keywords" 
          content="Full-Stack Developer, React.js Developer, Python App Developer, Web Development, Node.js, JavaScript, Python, Portfolio, Redux, Next.js, TypeScript, MongoDB, PostgreSQL, Material UI, Tailwind CSS, ParameshWar Reddy Guraka" 
        />
        <link rel="canonical" href="https://github.com/paramesh-reddy" />
        <meta property="og:title" content="Full-Stack & Mobile App Developer Portfolio | ParameshWar Reddy Guraka" />
        <meta 
          property="og:description" 
          content="Explore the portfolio of Parameshwar Reddy Guraka, a Full-Stack Developer with 1+ years of hands-on experience in web and mobile application development using React.js, React Native, Node.js,Python,Fast Api,Bootstrap, and more." 
        />
        <meta property="og:url" content="https://github.com/paramesh-reddy" />
        <meta property="og:type" content="website" />
        
        {/* Adding JSON-LD Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://github.com/paramesh-reddy",
            "name": "ParameshWar Reddy Guraka Portfolio",
            "description": "Portfolio of Parameshwar Reddy Guraka, Full-Stack and Mobile App Developer specializing in modern web and mobile development technologies.",
            "author": {
              "@type": "Person",
              "name": "ParameshWar Reddy Guraka"
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
