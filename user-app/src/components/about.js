import React from 'react';
import '../styles/about.css'; // Import CSS file for styles



const About = () => {

  
 
  return (
    <>
      <header className='hd'>
        <h1>Our Team</h1>
        
      </header>

      <div className="container">
        <section className="team-section">
          {/* Team Member 1 */}
          <div className="team-member">
            <img src="https://via.placeholder.com/120" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p className="role">CEO & Founder</p>
            <p>John is the visionary behind our company. With over 15 years of experience in leadership, he drives the company forward.</p>
            <div className="skills">
              <h4>Skills:</h4>
              <span>Leadership</span>
              <span>Strategic Planning</span>
              <span>Business Development</span>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="team-member">
            <img src="https://via.placeholder.com/120" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p className="role">Chief Technology Officer (CTO)</p>
            <p>Jane leads the technical team and ensures our technology infrastructure is innovative and scalable.</p>
            <div className="skills">
              <h4>Skills:</h4>
              <span>Cloud Computing</span>
              <span>Cybersecurity</span>
              <span>DevOps</span>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="team-member">
            <img src="https://via.placeholder.com/120" alt="Team Member 3" />
            <h3>Michael Lee</h3>
            <p className="role">Lead Software Engineer</p>
            <p>Michael heads the software development team, working on cutting-edge solutions for our clients.</p>
            <div className="skills">
              <h4>Skills:</h4>
              <span>JavaScript</span>
              <span>Python</span>
              <span>Agile Development</span>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="team-member">
            <img src="https://via.placeholder.com/120" alt="Team Member 4" />
            <h3>Sophia Brown</h3>
            <p className="role">Marketing Director</p>
            <p>Sophia crafts our marketing strategies, helping the company reach new audiences and expand its presence.</p>
            <div className="skills">
              <h4>Skills:</h4>
              <span>Digital Marketing</span>
              <span>SEO</span>
              <span>Content Strategy</span>
            </div>
          </div>

          {/* Team Member 5 */}
          <div className="team-member">
            <img src="https://via.placeholder.com/120" alt="Team Member 5" />
            <h3>Emily Davis</h3>
            <p className="role">HR Manager</p>
            <p>Emily manages talent acquisition and employee well-being, ensuring we attract and retain the best talent.</p>
            <div className="skills">
              <h4>Skills:</h4>
              <span>Recruitment</span>
              <span>Employee Relations</span>
              <span>Team Building</span>
            </div>
          </div>
        </section>
      </div>

      <footer className='ft'>
        <p>&copy; 2024 Our Company. All Rights Reserved.</p>
      </footer>

    
    </>
  );
};

export default About;
