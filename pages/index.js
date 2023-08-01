import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Resume() {
  return (
    <div className="container">
      <Head>
        <title>Sarin P Sudhakaran's Resume</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Sarin P Sudhakaran | Certified Scrum Product Owner (CSPO)" />

        <section className="contact">
          sarinsudha1893@outlook.com | +353 892104255<br />
          <a href="https://www.linkedin.com/in/sarin-sudhakaran">LinkedIn</a> | <a href="https://sarin1893.netlify.app/">Personal Website</a>
        </section>
        <section className="summary">
          <h2>Summary:</h2>
          <p>Certified Scrum Product Owner/Business Analyst/Data Analyst with a focus on achieving business goals, driving change agendas, and delivering value through innovative insurance and banking solutions.</p>
        </section>
        <section className="core-skills">
  <h2>Core Skills:</h2>
  <div className="columns">
    <ul>
      <li>Product Management</li>
      <li>Data Analysis</li>
      <li>Relationship Building</li>
    </ul>
    <ul>
      <li>Agile Methodologies</li>
      <li>Stakeholder Management</li>
      <li>Critical Thinking</li>
    </ul>
    <ul>
      <li>Requirement Gathering</li>
      <li>Problem Solving</li>
      <li>Web Developer</li>
    </ul>
  </div>
</section>
        <section className="experience">
          <h2>Experience:</h2>
          <h3>Presales Consultant, Regnology, Ireland | August 2022 – Till Date</h3>
          <ul>
            <li>Acted as the primary liaison with financial supervisors in the banking and insurance sectors, leading client interactions at Regnology.</li>
            <li>Developed custom data collection using Python, Git, GitLab, and in-house tools, adhering to complex regulatory frameworks such as EBA and EIOPA.</li>
            <li>Employed Apache Superset, Power BI, and AI/ML principles to transform raw data into actionable insights, highlighting a forward-thinking approach to technology utilization.</li>
            <li>Led the creation and presentation of proof-of-concept demos, tailoring each to client needs, and enhancing demo satisfaction.</li>
            <li>Collaborated with the bid management team, R&D developers, and product managers to respond to RFPs, RFIs, and Expressions of Interest with precise answers to functional and non-functional requirements.</li>
            <li>Transformed regulatory needs into practical technology solutions, improving operations and delivering value to clients, working both independently and as part of a cross-functional agile team.</li>
            <li>Managed the complete client engagement cycle, from initial meetings to final presentations, contributing to a 20% increase in company revenue.</li>
            <li>Continuously monitored industry trends, client feedback, and developer insights to enhance client demos and improve overall product quality and client experience.</li>
            <li>Guided and supported new hires through hands-on coaching, ensuring quick integration into the team and accelerating their learning curve in handling the application.</li>
            {/* ... other bullet points */}
          </ul>
          {/* Other positions */}
          <h3>Product Manager – Intern, Blackbox Limerick, Ireland  | May 2022 - August 2022</h3>
          <ul>
            <li>Collaborated with clients to capture requirements for a performance-oriented app, enabling the connection of multiple monitors to one system.</li>
            <li>Created comprehensive requirement documents, liaising with the product team to conceptualize the design of the application.</li>
            <li>Utilized Figma for iterative design processes, incorporating feedback, and delivering the final mockup of the app to meet client specifications.</li>
            <li>Performed in-depth market research and competitive analysis to understand the product landscape and articulate the value proposition.</li>
            <li>Analyzed sales funnel data using Salesforce, offering insights to optimize sales strategies and performance.</li>
            {/* ... other bullet points */}
          </ul>
          {/* Other positions */}
          <h3>Product and Training Manager, Cholamandalam Mitsui Sumitomo Insurance, Chennai, India   | July 2019 - September 2021</h3>
          <ul>
            <li>Managed concept-to-launch of commercial insurance front-end solution enabling real-time buying of online insurance policies, generating 40 million Euros in sales.</li>
            <li>Led the development of a suite of applications to provide clients fast, secure transaction capabilities, exceeding client expectations.</li>
            <li>Established strong connections with internal and external stakeholders, ensuring alignment with business objectives and enabling seamless, high-quality product rollouts.</li>
            <li>Defined 'Acceptance Criteria' and conducted User Acceptance Testing (UAT) to enhance product quality and user adoption.</li>
            <li>Designed and conducted comprehensive training programs for sales staff and insurance agents on life and non-life insurance products, including hands-on guidance on product utilization.</li>
            {/* ... other bullet points */}
          </ul>
          {/* Other positions */}
          <h3>Product and Training Manager, Cholamandalam Mitsui Sumitomo Insurance, Chennai, India   | July 2019 - September 2021</h3>
          <ul>
            <li>Performed critical business development and management functions for the marine insurance sector, establishing new accounts and maintaining existing profitable relationships.</li>
            <li>Compiled monthly risk reports for managers covering retention and loss ratio using MS Excel and Tableau.</li> 
            {/* ... other bullet points */}
          </ul>
          {/* Other positions */}
          <h3>Underwriting Analyst -II, AIG, Bangalore, India| March 2016 - July 2018</h3>
          <ul>
            <li>Received raw location data in Excel, scrubbed and input the data into the modeling system to calculate catastrophic premiums, utilizing historical data for simulations.</li>
            <li>Transformed complex insurance data into meaningful insights by developing and implementing Tableau Dashboards, Scorecards, and KPI Reports tailored to underwriter requests.</li>
            <li>Ran various models and interpreted outputs, providing an extensive analysis of the risks associated with property insurance, specifically focusing on Catastrophe and Fire scenarios.</li>
            <li>Collaborated with developers to create and implement macros that automated processes, resulting in a 30% reduction in turnaround time for the underwriting team.</li>
            <li>Crafted test plans, created test cases, and performed User Acceptance Testing, ensuring the product met the requirements and communicating the results effectively.</li>
            {/* ... other bullet points */}
          </ul>
          {/* Other positions */}
        </section>
        <section className="education">
        <h2>Education:</h2>
          <ul>
            <li>MSc in Business Analytics, National University of Ireland, Galway | August 2021 - June 2022 (H2.1)</li>
            <li>Bachelor’s in Engineering - Mechanical Engineering, GCEM, Bangalore – India | August 2011 - August 2015 (81.32%)</li>
            {/* ... other achievements */}
          </ul>
        </section>
        <section className="achievements">
          <h2>Achievements:</h2>
          <ul>
            <li>Contributed to reducing employee attrition rate through predictive analytics models in an HR analytics project.</li>
            <li>Selected for AIG Insurance Academy for intensive training on life skills, managerial skills, and technical skills in New York City, US.</li>
            {/* ... other achievements */}
          </ul>
        </section>
        <section className="volunteer">
          <h2>Volunteer or Extracurricular Activities:</h2>
          <ul>
            <li>Lead CSR activities at AIG, going to old age homes and schools for CSR activities.</li>
            <li>Led basketball team at college to win inter-college matches.</li>
            <li>Actively pursuing self-directed learning in full-stack development, showcasing a commitment to staying abreast of innovative technologies.</li>
            {/* ... other activities */}
          </ul>
        </section>
        <Footer />
      </main>
      <style jsx>{`
  .container {
    min-height: 100vh;
    padding: 2rem;
    background-color: #fff;
  }

  main {
    max-width: 1000px; /* You can adjust this value as needed */
    margin: auto;
    padding: 2rem;
    background-color: #fff;
    color: #000;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add a shadow to the main content */
  }

  .contact {
    font-size: 1rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  .summary,
  .core-skills,
  .experience,
  .education,
  .achievements,
  .volunteer {
    margin-top: 2rem;
    text-align: left;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.3rem;
  }

  p {
    font-size: 1.2rem;
  }

  ul {
    list-style-type: circle;
    padding-left: 20px;
  }
  
  li {
    color: black; /* This will set the text color to black */
    list-style-type: disc; /* This will make the bullets solid black circles */
  }
  .columns {
    display: flex;
    justify-content: space-between;
  }
  
  .columns ul {
    width: 30%;
    list-style-color: black; /* This will make the bullet point color black */
  }
  
  .columns li {
    color: black; /* This will make the text color black */
  }
  



`}</style>

      
    </div>
  );
}
