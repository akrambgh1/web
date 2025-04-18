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
                  I'm a first-year Bachelor's in Computer Science student (L1
                  Informatique) at the University of Science and Technology
                  Houari Boumediene (USTHB). I specialize in end-to-end web
                  development using modern JavaScript technologies.
                </p>
                <p>
                  I started coding at{" "}
                  <span className="font-medium text-blue-600">15</span> years old,
                  initially building simple static sites with HTML and CSS. My
                  curiosity quickly led me to JavaScript and full-stack
                  development, fueled by self-learning and hands-on
                  experimentation.
                </p>
                <p>
                  With <span className="font-medium text-blue-600">React</span>,
                  I build component-driven frontends, leveraging hooks for state
                  and effect management, React Router for client-side
                  navigation, and Context API for global state handling. My UIs
                  are responsive, accessible, and optimized for performance.
                </p>
                <p>
                  On the server side, I use{" "}
                  <span className="font-medium text-blue-600">Node.js</span>{" "}
                  paired with{" "}
                  <span className="font-medium text-blue-600">ExpressJS</span>
                  to create RESTful APIs and middleware-driven architectures. I
                  implement routing, authentication, and error handling,
                  ensuring scalable and maintainable backend services.
                </p>
                <p>
                  For data storage, I work with{" "}
                  <span className="font-medium text-blue-600">MongoDB</span>,
                  designing flexible, schema-less collections. I optimize
                  queries through indexing, implement aggregation pipelines, and
                  ensure data consistency and integrity across distributed
                  applications.
                </p>
                <p>
                  I’m also adept at integrating{" "}
                  <span className="font-medium text-blue-600">Firebase</span>{" "}
                  for real-time databases, authentication, and hosting to
                  accelerate development cycles. Currently, I'm diving into
                  Next.js to enhance SEO and performance with server-side
                  rendering and static site generation.
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
                <li>Phone: +213 798 73 22 82</li>
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
