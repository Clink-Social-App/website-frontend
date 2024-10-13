import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="container my-5 text-center about-us-container">
      <h1>Meet The Team</h1>
      <p className="lead">Clink is a platform created to help you discover the best nightlife options around you, tailored to your preferences.</p>

      <h2 className="mt-5">Co-Founders</h2>
      <div className="row justify-content-center my-5">
        {/* Alexander Cole */}
        <div className="col-lg-5 col-md-6 mb-4">
          <img 
            src="./Images/alex.jpg" 
            alt="Alexander Cole" 
            className="img-fluid rounded-circle mb-3" 
            style={{ width: '200px', height: '200px' }}
          />
          <h4>Alexander Cole, BSE</h4>
          <h5>Lead Software Engineer at Clink LLC</h5>
          <p>Current Software Engineer at JPMorganChase.</p>
          <p>Graduated from The University of Michigan College of Engineering, Class of 2024</p>
          <ul className="list-unstyled">
            <li>- Major: Computer Science</li>
            <li>- Minor: Mathematics</li>
          </ul>
        </div>

        {/* Sahil Dayal */}
        <div className="col-lg-5 col-md-6 mb-4">
          <img 
            src="/Images/sahil.jpg" 
            alt="Sahil Dayal" 
            className="img-fluid rounded-circle mb-3" 
            style={{ width: '200px', height: '200px' }}
          />
          
          <h4>Sahil Dayal, BA</h4>
          <h5>Head of Operations, Marketing, and Business Execution at Clink LLC</h5>
          <p>MPhil Candidate in Stem Cell Biology at The University of Cambridge.</p>
          <p>Graduated from Case Western Reserve University, Class of 2024</p>
          <ul className="list-unstyled">
            <li>- Majors: Economics and Biology</li>
            <li>- Minor: Chemistry</li>
          </ul>
        </div>
      </div>

      <h2 className="mt-5">Team Members</h2>
      <div className="row justify-content-center my-5">
        {/* Dummy Team Member 1 */}
        <div className="col-lg-5 col-md-6 mb-4">
          <img 
            src="./Images/sahil.jpg" 
            alt="Dummy Team Member 1" 
            className="img-fluid rounded-circle mb-3" 
            style={{ width: '200px', height: '200px' }}
          />
          <h4>Jane Doe, BS</h4>
          <h5>Marketing Specialist at Clink LLC</h5>
          <p>Graduated from Harvard University, Class of 2023</p>
          <ul className="list-unstyled">
            <li>- Major: Marketing</li>
            <li>- Minor: Psychology</li>
          </ul>
        </div>

        {/* Dummy Team Member 2 */}
        <div className="col-lg-5 col-md-6 mb-4">
          <img 
            src="./Images/alex.jpg" 
            alt="Dummy Team Member 2" 
            className="img-fluid rounded-circle mb-3" 
            style={{ width: '200px', height: '200px' }}
          />
          <h4>John Smith, MS</h4>
          <h5>Data Analyst at Clink LLC</h5>
          <p>Graduated from Stanford University, Class of 2022</p>
          <ul className="list-unstyled">
            <li>- Major: Data Science</li>
            <li>- Minor: Statistics</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;