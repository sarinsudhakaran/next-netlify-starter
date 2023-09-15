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
          <p>Certified Scrum Product Owner and seasoned Business Analyst with over 6 years of hands-on experience in the finance and SaaS industries. Adept at working closely with development teams to innovate, improve customer experiences, and deliver top-notch software solutions. Known for strong skills in requirement gathering, project management, and data analysis. Excellent at stakeholder communication and relationship building.</p>
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
          <h3>Tech - Presales Consultant, Regnology, Ireland | August 2022 – Till Date</h3>
          <ul>
            <li>
            Boosted the company's customer base by 20% in the first year through strategic engagement with financial supervisors in banking and insurance industry.
            </li>
            {/* ... other bullet points */}
            <li>
            Acted as the Product Owner in a 10+ member agile team, focusing on the development of a new form generator platform.
            </li>
            {/* ... other bullet points */}
            <li>
            Led requirement gathering for the presales team, created user stories, took ownership of the product backlog, and collaborated closely with developers through daily sprints.
            </li>
            {/* ... other bullet points */}
            <li>
            Cut data collection time from 4 days to 1 day by automating processes with Python and GitLab, meeting EBA and EIOPA regulatory standards.
            </li>
            <li>
            Successfully communicated both technical and commercial ideas to customers through compelling storytelling.
            </li>
            {/* ... other bullet points */}
          </ul>
          {/* Other positions */}
          <h3>Product Manager – Intern, Blackbox Limerick, Ireland  | May 2022 - August 2022</h3>
          <ul>
           <li>
           Gathered requirements from over 20 clients (customer Interviews) to enhance the performance of a software application, enabling the connection of multiple monitors to a single system.
           </li>
            {/* ... other bullet points */}
           <li>
           Developed an app mockup in Figma tailored to a client's specifications. Iteratively refined the design based on client feedback, delivering the final mockup within the stipulated timeline and budget.
           </li>
            {/* ... other bullet points */}
           <li>
           Conducted a competitive analysis of top industry rivals, identifying key trends that informed a new value proposition, subsequently increasing market share by 8%.
           </li>
            {/* ... other bullet points */}
          </ul>
          {/* Other positions */}
          <h3>Product and Training Manager, Cholamandalam Mitsui Sumitomo Insurance, Chennai, India   | July 2019 - September 2021</h3>
          <ul>
      <li>
      Managed end-to-end launch of a commercial insurance front-end solution, facilitating real-time online insurance policy purchases and generating €40 million in sales.
      </li>
      <li>
      Spearheaded "as-is" process mapping initiatives in line with the product vision, engaging stakeholders and leveraging both in-person and digital tools for strategy consensus and detailed process map.
      </li>
      <li>
      Crafted Product Requirement Documents (PRD) and Business Requirement Documents (BRD) to align with the product roadmap and vision, articulating features, specifications, and business needs to stakeholders.
      </li>
      <li>
      Led User Acceptance Testing (UAT), incorporating feedback from over 100 customers into actionable user stories.
      </li>
      <li>
      Identified and resolved 50+ bugs, achieving a 90% reduction in customer-reported issues post-launch.
      </li>
      <li>
      Designed and showcased app mockups, achieving strategic alignment between stakeholders and development teams for the successful, on-time launch of products.
      </li>

          </ul>
          {/* Other positions */}
          <h3>Customer Service Manager (Marine Insurance Underwriter), Chennai, India   | July 2019 - September 2021</h3>
          <ul>
            <li>Conducted process mapping initiatives using Visio to identify gaps and inefficiencies in current state business processes and spot opportunities for improvements for the desired future state.</li>
            <li>Worked on process improvements for the marine insurance platform, enhancing efficiency and improving data accuracy and timeliness.</li> 
            <li>Conducted training sessions for system users in marine insurance, upskilling sales staff and business users, contributing to a 25% increase in system adoption rates.</li> 
            {/* ... other bullet points */}
          </ul>
          {/* Other positions */}
          <h3>Senior Business Analyst/ Underwritng Analyst -II, AIG, Bangalore, India| March 2016 - July 2018</h3>
          <ul>
            <li>Analyzed and translated business requirements for multiple pricing and claims management projects into actionable user stories.</li>
            <li>Ensured alignment with business requirements by documenting product designs, features, user stories, and acceptance criteria using INVEST criteria.</li>
            <li>Served as the go-to person for bug resolution and new initiatives, reducing issue resolution time by 30%.</li>
            <li>Worked on projects from initiation through to implementation and support: Streamlining Claims Management system, End to end Property Underwriting Platform.</li>
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
