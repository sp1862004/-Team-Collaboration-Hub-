
import React from 'react';

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About Us</h1>
            <p className="about-description">
                Welcome to our Team Collaboration Hub! We are dedicated to providing a platform that enhances teamwork, improves productivity, and fosters communication among team members.
            </p>

            <section className="about-section">
                <h2 className="about-subtitle">Our Mission</h2>
                <p>
                    Our mission is to empower teams to achieve their goals through effective collaboration and communication. We strive to create a seamless experience for teams to connect, share ideas, and work together efficiently.
                </p>
            </section>

            <section className="about-section">
                <h2 className="about-subtitle">Our Vision</h2>
                <p>
                    We envision a world where teams can collaborate effortlessly, breaking down barriers and fostering innovation. Our platform aims to bring people together, regardless of their location, to create a unified work environment.
                </p>
            </section>

            <section className="about-section">
                <h2 className="about-subtitle">Our Values</h2>
                <ul className="values-list">
                    <li>💡 **Innovation**: We embrace change and constantly strive to improve our platform.</li>
                    <li>🤝 **Collaboration**: We believe in the power of teamwork and the strength of diverse perspectives.</li>
                    <li>🌍 **Inclusivity**: We are committed to creating an inclusive environment where everyone feels valued.</li>
                    <li>🔒 **Security**: We prioritize the privacy and security of our users' data.</li>
                </ul>
            </section>

            <div className="about-team">
                <h2 className="about-subtitle">Our Team</h2>
                <div className="team-members">
                    <div className="team-member animate">
                        <h3>John Doe</h3>
                        <p>Project Manager</p>
                        <p>With over 10 years of experience in project management, John ensures that our projects run smoothly and meet deadlines.</p>
                    </div>
                    <div className="team-member animate">
                        <h3>Jane Smith</h3>
                        <p>Lead Developer</p>
                        <p>Jane is a passionate developer who leads our development team in building innovative solutions.</p>
                    </div>
                    <div className="team-member animate">
                        <h3>Emily Johnson</h3>
                        <p>UI/UX Designer</p>
                        <p>Emily focuses on creating user-friendly interfaces that enhance user experiences.</p>
                    </div>
                </div>
            </div>

           
        </div>
    );
};

export default About;
