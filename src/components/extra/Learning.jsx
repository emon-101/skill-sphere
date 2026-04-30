import React from "react";

const Learning = () => {
  return (
    <section className="py-12 bg-linear-to-r from-indigo-50 via-white to-purple-50 mb-20">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-[#161439]">
            📘 Learning Tips
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Boost your productivity and learn smarter with proven study techniques
            and effective time management strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="p-6 rounded-2xl shadow-md border bg-white">
            <h3 className="text-xl font-semibold mb-4">📚 Study Techniques</h3>
            <ul className="space-y-3 text-gray-600">
              <li>✔ Break topics into smaller chunks</li>
              <li>✔ Use active recall</li>
              <li>✔ Practice real-world projects</li>
              <li>✔ Take notes & revise</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl shadow-md border bg-white">
            <h3 className="text-xl font-semibold mb-4">⏰ Time Management Tips</h3>
            <ul className="space-y-3 text-gray-600">
              <li>✔ Use Pomodoro technique</li>
              <li>✔ Set daily goals</li>
              <li>✔ Avoid multitasking</li>
              <li>✔ Track progress</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Learning;
