import React from "react";

const AkramCV = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800 py-16 px-6 md:px-20 flex items-center">
      <div className="max-w-7xl w-full mx-auto space-y-12">
        {/* Header */}
        <header className="text-start">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700">
            Benghezal Akram Hani
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Web Developer • CS Student •{" "}
            <span className="font-semibold text-blue-600">
              CEO &amp; Founder of WebLocators
            </span>
          </p>
        </header>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* About + Education */}
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                🧠 About Me
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
  <p>
    I'm a first-year Bachelor's in Computer Science student (L1 Informatique) at the University of Science and Technology
    Houari Boumediene (USTHB). I specialize in full-stack web development using modern JavaScript technologies.
  </p>
  <p>
    I started coding at <span className="font-medium text-blue-600">15</span> years old , creating static websites with HTML and CSS. 
    My curiosity soon led me to JavaScript and full-stack development, where I honed my skills through personal projects and self-learning.
  </p>
  <p>
    With <span className="font-medium text-blue-600">React</span>, I build interactive frontends using hooks for state and effects, 
    React Router for navigation, and Context API for managing global state. My UIs are responsive, accessible, and fast.
  </p>
  <p>
    On the backend, I use <span className="font-medium text-blue-600">Node.js</span> and <span className="font-medium text-blue-600">ExpressJS</span> to develop RESTful APIs with structured routing, secure authentication, and robust error handling.
  </p>
  <p>
    For databases, I rely on <span className="font-medium text-blue-600">MongoDB</span>, designing flexible schemas and optimizing performance 
    with indexing and aggregation pipelines.
  </p>
  <p>
    I also use <span className="font-medium text-blue-600">Firebase</span> for real-time features, user authentication, and fast deployment. 
    Currently, I'm exploring <span className="font-medium text-blue-600">Next.js</span> to take advantage of server-side rendering and improved SEO.
  </p>
</div>


            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                🎓 Education
              </h2>
              <p className="text-gray-600">
                1st-year Bachelor's in Computer Science (L1 Informatique) at
                University of Science and Technology Houari Boumediene (USTHB)
              </p>
            </section>
          </div>

          {/* Skills + Contact + Agency */}
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                🛠️ Skills
              </h2>
              <ul className="flex flex-wrap gap-3">
                {[
                  "React",
                  "Next.js (learning)",
                  "Node.js",
                  "ExpressJS",
                  "MongoDB",
                  "Firebase",
                  "Git",
                  "API Integration",
                  "Responsive Design",
                ].map((skill) => (
                  <li
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                📫 Contact
              </h2>
              <ul className="text-blue-600 space-y-1">
                <li>Email: akram@weblocators.com</li>
               a <li>Phone: <a href="tel:+213 798 73 22 82">+213 798 73 22 82</a></li>
                <li>
                  Github:{" "}
                  <a href="https://github.com/akrambgh1">
                    {" "}
                    github.com/akrambgh1
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                WebLocators
              </h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  As CEO &amp; Founder of{" "}
                  <span className="font-semibold text-blue-600">
                    WebLocators
                  </span>
                  , I lead a full-service web development agency delivering
                  end-to-end digital solutions.
                </p>
                <ul className="list-disc list-inside">
                  <li>
                    <span className="font-medium text-blue-600">React</span>:
                    Crafting dynamic, component-driven user interfaces with
                    hooks and context for state management.
                  </li>
                  <li>
                    <span className="font-medium text-blue-600">
                      Node.js & ExpressJS
                    </span>
                    : Building scalable RESTful APIs, server-side rendering, and
                    middleware-driven architectures.
                  </li>
                  <li>
                    <span className="font-medium text-blue-600">MongoDB</span>:
                    Designing flexible, schema-less databases, optimizing
                    queries with indexing, and ensuring data integrity.
                  </li>
                  <li>
                    <span className="font-medium text-blue-600">Firebase</span>:
                    Integrating authentication, real-time databases, and hosting
                    to accelerate development cycles.
                  </li>
                </ul>
                <p>
                  Our mission is to empower businesses with high-performance,
                  secure, and SEO-friendly web applications that drive growth
                  and deliver exceptional user experiences.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AkramCV;
