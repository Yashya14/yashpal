import Head from 'next/head'
import Main from '../components/Main'
import Projects from './projects'
import Skills from './skills'
import About from './about'
import Contact from './contact'


export default function Home() {
  return (
    <div>
      <Head>
      <title>Yash Pal | Full Stack Developer</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/public/yashnav.png"/>
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
   <Contact />
    </div>
  )
}
