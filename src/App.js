import React from 'react';

export default function ResumeSite() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white px-6 py-10 font-sans">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold">Rioh Marie Capili Ladines</h1>
        <p className="text-lg mt-2 text-gray-400">CS Student | Dev in Progress | Clean Code Advocate</p>
      </section>

      <section className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">About Me</h2>
        <p>
          I’m a Computer Science student passionate about web and mobile development. I’m currently seeking OJT opportunities where I can apply my skills, build real-world projects, and grow as a developer.
        </p>
      </section>

      <section className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">Technical Skills</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Languages: JavaScript, Python, Java, C/C++</li>
          <li>Web Dev: HTML5, CSS3, React.js, PHP</li>
          <li>Mobile: Flutter, Java (Android)</li>
          <li>Database: Firebase, MySQL</li>
          <li>Tools: Git, VS Code, Canva, Figma</li>
          <li>Other: XML, UI/UX Design</li>
        </ul>
      </section>

      <section className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">Projects</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold">ScrollSentry – Doomscroll Prevention App</h3>
            <p className="text-gray-300">Helps users monitor and reduce screen time by tracking usage patterns and sending personalized alerts. Built with Flutter and Firebase.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Knowble – E-learning CMS Website</h3>
            <p className="text-gray-300">A responsive XML-based content platform for educational materials. Developed with HTML, CSS, and JavaScript.</p>
          </div>
        </div>
      </section>

      <section className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">Certifications</h2>
        <ul className="list-disc pl-6">
          <li>Cisco Networking Essentials – Cisco Networking Academy</li>
        </ul>
      </section>

      <section className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">Contact</h2>
        <p>Email: <a href="mailto:rm2kworld@gmail.com" className="text-blue-400">rm2kworld@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/riohladines" className="text-blue-400">github.com/riohladines</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/rioh-ladines-393b462ba" className="text-blue-400">linkedin.com/in/rioh-ladines</a></p>
      </section>

      <footer className="text-center text-sm text-gray-600 mt-12">
        &copy; {new Date().getFullYear()} Rioh Marie Capili Ladines
      </footer>
    </main>
  );
}
