"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sun, Moon, Github, Menu, X } from "lucide-react";

export function LandingPageComponent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div
      className={`min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}
    >
      <header
        className={`sticky top-0 z-50 w-full ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
            : "bg-white dark:bg-gray-900"
        } transition-all duration-200  border-b transition-colors border-foreground/10`}
      >
        <nav className="container mx-auto flex h-16 items-center gap-4 px-4">
          <Link href="/" className="inline-flex items-center font-medium">
            <Image
              src="https://png.pngtree.com/png-vector/20240730/ourlarge/pngtree-red-funnel-icon-for-kitchen-and-garage-use-png-image_13300463.png"
              alt="Qif logo"
              width={32}
              height={32}
              className="h-8 w-auto mr-2"
            />
            <span className="text-xl font-bold text-red-600 dark:text-red-500">
              Qif
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-4 ml-auto">
            <Link
              href="/installation"
              className="text-sm text-gray-600 dark:text-gray-300 transition-colors hover:text-red-600 dark:hover:text-red-500"
            >
              Documentation
            </Link>
            <Link
              href="/playground"
              className="text-sm text-gray-600 dark:text-gray-300 transition-colors hover:text-red-600 dark:hover:text-red-500"
            >
              Playground
            </Link>
            <a
              href="https://github.com/yourusername/qif"
              rel="noreferrer noopener"
              target="_blank"
              aria-label="GitHub"
              className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500"
            >
              <Github className="h-5 w-5" />
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>
          <button
            type="button"
            className="md:hidden ml-auto"
            onClick={toggleDrawer}
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={toggleDrawer}
        >
          <div
            className="absolute right-0 top-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4">
              <button onClick={toggleDrawer} className="mb-4">
                <X className="h-6 w-6" />
              </button>
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/docs"
                  className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500"
                >
                  Documentation
                </Link>
                <Link
                  href="/playground"
                  className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500"
                >
                  Playground
                </Link>
                <a
                  href="https://github.com/yourusername/qif"
                  className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500"
                >
                  GitHub
                </a>
                <button
                  onClick={toggleTheme}
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500"
                >
                  {isDarkMode ? (
                    <Sun className="h-5 w-5 mr-2" />
                  ) : (
                    <Moon className="h-5 w-5 mr-2" />
                  )}
                  {isDarkMode ? "Light Mode" : "Dark Mode"}
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}

      <main className="flex-grow">
        <section className="bg-white dark:bg-gray-900 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h1 className="text-6xl md:text-8xl font-bold text-red-600 dark:text-red-500">
                  Qif
                </h1>
                <p className="text-2xl md:text-4xl text-gray-700 dark:text-gray-300">
                  Powerful filtering system for React.js applications
                </p>
                <div className="flex space-x-4">
                  <Link
                    href="/installation"
                    className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
                  >
                    Documentation
                  </Link>
                  <Link
                    href="https://github.com/yourusername/qif"
                    className="bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white px-6 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
              <div className="overflow-x-auto rounded-lg border dark:bg-gray-800 p-3 text-xs shadow-inner sm:text-sm">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `<pre class="shiki github-light vp-code" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">export</span><span style="color:#D73A49"> const</span><span style="color:#6F42C1"> DataFilter</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> () </span><span style="color:#D73A49">=&gt;</span><span style="color:#24292E"> {</span></span>
<span class="line"><span style="color:#D73A49">  const</span><span style="color:#24292E"> [</span><span style="color:#005CC5">filters</span><span style="color:#24292E">, </span><span style="color:#005CC5">setFilters</span><span style="color:#24292E">] </span><span style="color:#D73A49">=</span><span style="color:#6F42C1"> useState</span><span style="color:#24292E">&lt;</span><span style="color:#6F42C1">Params</span><span style="color:#24292E">&gt;({});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">  return</span><span style="color:#24292E"> (</span></span>
<span class="line"><span style="color:#24292E">    &lt;</span><span style="color:#005CC5">FiltersProvider</span></span>
<span class="line"><span style="color:#6F42C1">      syncSearchParams</span></span>
<span class="line"><span style="color:#6F42C1">      filters</span><span style="color:#D73A49">=</span><span style="color:#24292E">{filters}</span></span>
<span class="line"><span style="color:#6F42C1">      setFilters</span><span style="color:#D73A49">=</span><span style="color:#24292E">{setFilters}</span></span>
<span class="line"><span style="color:#24292E">    &gt;</span></span>
<span class="line"><span style="color:#24292E">      &lt;</span><span style="color:#22863A">div</span><span style="color:#6F42C1"> className</span><span style="color:#D73A49">=</span><span style="color:#032F62">"flex gap-5 flex-col"</span><span style="color:#24292E">&gt;</span></span>
<span class="line"><span style="color:#24292E">        &lt;</span><span style="color:#005CC5">FilterComponent</span><span style="color:#6F42C1"> name</span><span style="color:#D73A49">=</span><span style="color:#032F62">"test_filter"</span><span style="color:#24292E"> /&gt;</span></span>
<span class="line"><span style="color:#24292E">        &lt;</span><span style="color:#005CC5">FilterComponent</span><span style="color:#6F42C1"> name</span><span style="color:#D73A49">=</span><span style="color:#032F62">"another_filter"</span><span style="color:#24292E"> /&gt;</span></span>
<span class="line"><span style="color:#24292E">        &lt;</span><span style="color:#005CC5">ResetButton</span><span style="color:#24292E"> /&gt;</span></span>
<span class="line"><span style="color:#24292E">      &lt;/</span><span style="color:#22863A">div</span><span style="color:#24292E">&gt;</span></span>
<span class="line"><span style="color:#24292E">    &lt;/</span><span style="color:#005CC5">FiltersProvider</span><span style="color:#24292E">&gt;</span></span>
<span class="line"><span style="color:#24292E">  );</span></span>
<span class="line"><span style="color:#24292E">};</span></span></code></pre>`,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className=" dark:bg-gray-800 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600 dark:text-red-500">
              Why Choose Qif?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Centralized State System",
                  description:
                    "Manage your application state efficiently with our centralized system.",
                  icon: "🔄",
                },
                {
                  title: "Headless UI",
                  description:
                    "Flexible, unstyled components that you can easily customize to your needs.",
                  icon: "🎨",
                },
                {
                  title: "Composable Components",
                  description:
                    "Build complex UIs by combining simple, reusable components.",
                  icon: "🧩",
                },
                {
                  title: "Sync State with Search Parameters",
                  description:
                    "Easily synchronize your app state with URL search parameters.",
                  icon: "🔗",
                },
                {
                  title: "Clean and Developer-friendly API",
                  description:
                    "Intuitive API design that makes development a breeze.",
                  icon: "🛠️",
                },
                {
                  title: "Performance Optimized",
                  description:
                    "Designed for efficiency, ensuring smooth performance even with large datasets.",
                  icon: "⚡",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="dark:bg-gray-700 p-6 rounded-lg text-center"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-red-500">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-600 dark:text-red-500">
                Ready to simplify your filtering?
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                Start using Qif today and experience the difference.
              </p>
              <Link
                href="/docs"
                className="bg-red-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-zinc-50/50 border-t dark:bg-gray-800 py-12">
        <nav className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-6">
              <Image
                src="https://png.pngtree.com/png-vector/20240730/ourlarge/pngtree-red-funnel-icon-for-kitchen-and-garage-use-png-image_13300463.png"
                alt="Qif"
                width={32}
                height={32}
                className="w-auto h-6 text-4xl"
              />
              <span className="sr-only">Qif</span>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Made by{" "}
                <a
                  href="https://yourusername.com"
                  className="font-semibold hover:underline"
                >
                  Your Name
                </a>{" "}
                and{" "}
                <a
                  href="https://github.com/yourusername/qif/graphs/contributors"
                  className="font-semibold hover:underline"
                >
                  contributors
                </a>
                <br />
                <a
                  href="https://github.com/yourusername/qif/blob/main/LICENSE"
                  className="hover:underline"
                >
                  MIT License
                </a>{" "}
                © {new Date().getFullYear()}
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/docs"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/playground"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500"
                  >
                    Playground
                  </Link>
                </li>
                <li>
                  <Link
                    href="/stats"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500"
                  >
                    Project Stats
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Social
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/yourusername/qif"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500"
                  >
                    <Github className="mr-2 inline-block h-5 w-5" /> GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/yourusername"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mr-2 inline-block h-5 w-5"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
}
