
export default function Footer() {
return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold text-teal-500">
              YourLogo
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Building amazing digital experiences.
            </p>
          </div>

          {/* Links */}
          <ul className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <li>
              <a
                href="/about"
                className="text-gray-300 transition hover:text-white"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="/services"
                className="text-gray-300 transition hover:text-white"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="/projects"
                className="text-gray-300 transition hover:text-white"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="/blog"
                className="text-gray-300 transition hover:text-white"
              >
                Blog
              </a>
            </li>

            <li>
              <a
                href="/contact"
                className="text-gray-300 transition hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
