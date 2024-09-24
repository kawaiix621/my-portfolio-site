import React from 'react';
import './Resume.css'; // Optional: You can add styles for your Resume here

const Resume = () => {
  return (
    <div className="resume">
      <h1>TOBILOBA AWOLAJU TEMILOLUWA</h1>
      <div className="contact">
        <p>Email: <a href="mailto:tobiawolaju21@gmail.com">tobiawolaju21@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/awolaju/" target="_blank" rel="noopener noreferrer">linkedin.com/in/awolaju</a></p>
        <p>GitHub: <a href="https://github.com/kawaiix621" target="_blank" rel="noopener noreferrer">github.com/kawaiix621</a></p>
      </div>
      
      <section className="education">
        <h2>Education</h2>
        <p>B.Sc. in Electrical and Electronics Engineering</p>
        <p>Federal University of Technology Akure | 2021 - 2024 (GPA: 8.06)</p>
        <p>Electrical and Electronics Engineering</p>
        <p>Adeleke University | 2024 - Present</p>
      </section>

      <section className="skills">
        <h2>Skills Summary</h2>
        <p><strong>Languages:</strong> Proficient in Rust, Solidity, Java, and JavaScript</p>
        <p><strong>Frameworks | Tools:</strong> Hardhat, Truffle, OpenZeppelin, Anchor, Ink!, Ethers.js, Web3.js, React.js, Flutter, Node.js</p>
        <p><strong>Platforms:</strong> Ethereum, Solana, Polkadot, Substrate, VSCode</p>
        <p><strong>Cryptography:</strong> Zero-Knowledge Proofs (ZK), Cryptographic Protocols</p>
        <p><strong>Blockchain Security:</strong> Smart Contract Auditing, Vulnerability Assessment, Blockchain Security Best Practices</p>
        <p><strong>Soft Skills:</strong> Rapport Building, People Management, Excellent Communication</p>
      </section>

      <section className="work-experience">
        <h2>Work Experience</h2>
        <p><strong>Smart Contract Developer<strong> <a style={{textDecoration:'none'}} href="https://github.com/kawaiix621" target="_blank" rel="noopener noreferrer" > | LINK </a></strong></strong></p>
        <p>Implemented automated security auditing tools using Echidna and Slither for Solidity contracts.</p>
        <p>Contributed to the framework's cryptography module, focusing on secure hardware-level encryption using Rust.</p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <p><strong>Full-Stack Blockchain Banking App <strong> <a style={{textDecoration:'none'}} href="https://github.com/kawaiix621" target="_blank" rel="noopener noreferrer" > | LINK </a></strong></strong></p>
        <p>Built a banking app that integrates with multiple Web3 wallets (Metamask, Coinbase, Phantom) using Rust and Solidity. Designed and implemented smart contracts on Solana to support asset transfers between wallets.</p>

        <p><strong>Quantum Cryptography Assistant <strong> <a style={{textDecoration:'none'}} href="https://github.com/kawaiix621" target="_blank" rel="noopener noreferrer" > | LINK </a></strong></strong></p>
        <p>Worked on a quantum cryptography AI assistant project, integrating blockchain-based encryption solutions. Developed Rust modules for implementing quantum-resistant cryptographic algorithms.</p>

        <p><strong>Blockchain Auditing and Security Framework <strong> <a style={{textDecoration:'none'}} href="https://github.com/kawaiix621" target="_blank" rel="noopener noreferrer" > | LINK </a></strong></strong></p>
        <p>Built a framework for auditing smart contracts and decentralized applications, using Solidity for Ethereum contracts and Rust for Solana. Integrated with WebAssembly for cross-platform support and to optimize smart contract performance.</p>
      </section>

      <section className="certifications">
        <h2>Certifications</h2>
        <p>Ethereum Developer Bootcamp | Certificate</p>
        <p>ConsenSys Academy</p>
        <p>ZK Hack</p>
      </section>
    </div>
  );
};

export default Resume;
