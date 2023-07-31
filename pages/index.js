import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Portfolio - John Doe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="John Doe's Portfolio" />
        <p className="description">
          Welcome to my portfolio website. I'm passionate about coding and design!
        </p>
        
        {/* Add your portfolio content here */}
        <section className="project">
          <h2>Project 1</h2>
          <p>Description of Project 1...</p>
        </section>
        
        <section className="project">
          <h2>Project 2</h2>
          <p>Description of Project 2...</p>
        </section>

        {/* Add more portfolio content as needed */}
      </main>

      <Footer />

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #fff;
        }

        .description {
          font-size: 1.2rem;
          margin-top: 1rem;
        }

        .project {
          margin-top: 2rem;
          text-align: center;
        }

        h2 {
          font-size: 1.5rem;
        }

        p {
          font-size: 1.2rem;
        }
        
        /* Black and white theme */
        body {
          background-color: #000;
        }

        main {
          background-color: #000;
        }

        h2,
        p {
          color: #fff;
        }

        /* Add more custom styling here as needed */
      `}</style>
    </div>
  )
}
