import React from "react";

const LandingPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold text-gray-900">ByteSpace</div>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Contact
            </a>
          </div>

          <button className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gray-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <span className="mb-4 inline-block rounded-full bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700">
              Welcome to ByteSpace
            </span>

            <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
              Build something
              <span className="block text-gray-500">amazing today.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              A modern platform designed to help you build, manage, and grow
              your digital products faster and more efficiently.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800">
                Get Started
              </button>

              <button className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-100">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex h-80 w-full max-w-lg items-center justify-center rounded-3xl bg-gray-200">
              <div className="text-center">
                <div className="text-6xl">🚀</div>
                <p className="mt-4 text-lg font-medium text-gray-700">
                  Your Product Here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Everything you need
            </h2>

            <p className="mt-4 text-gray-600">
              Simple, powerful, and built for modern businesses.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-8">
              <div className="mb-5 text-3xl">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900">
                Fast & Powerful
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Built with modern technologies to provide a fast and smooth
                experience.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8">
              <div className="mb-5 text-3xl">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900">Secure</h3>
              <p className="mt-3 leading-7 text-gray-600">
                Your data and information are protected with reliable security
                practices.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8">
              <div className="mb-5 text-3xl">📈</div>
              <h3 className="text-xl font-semibold text-gray-900">Scalable</h3>
              <p className="mt-3 leading-7 text-gray-600">
                Designed to grow with your business and your customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="about" className="bg-gray-900 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to get started?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Start building your next great project today.
          </p>

          <button className="mt-8 rounded-lg bg-white px-7 py-3 font-medium text-gray-900 hover:bg-gray-200">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <p className="text-sm text-gray-500">
            © 2026 ByteSpace. All rights reserved.
          </p>

          <div className="flex justify-center gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default LandingPage;
