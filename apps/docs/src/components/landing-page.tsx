"use client";
import Link from "next/link";
import { Header } from "./layout/Header";
import Ripple from "./ui/ripple";
import { NeonGradientCard } from "./ui/neon-gradient-card";
import { Suspense } from "react";

import dynamic from "next/dynamic";
import { Book, Github } from "lucide-react";
import { Footer } from "./layout/Footer";

const CodeBlock = dynamic(
  () => import("./CodeBlock").then((m) => m.CodeBlock),
  { ssr: false }
);

export function LandingPageComponent() {
  return (
    <div
      className={`min-h-screen flex flex-col bg-background dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}
    >
      <Header />
      <main className="flex-grow">
        <section className="bg-background dark:bg-gray-900 py-16 md:py-4">
          <div className="container max-w-[1440px] mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="relative flex px-4 justify-center flex-col gap-10 overflow-hidden rounded-lg min-h-[400px] lg:min-h-[700px]">
                  <h1 className="text-6xl md:text-8xl font-bold  dark:text-white">
                    Qif
                  </h1>
                  <Ripple className="pointer-events-none bg-transparent " />
                  <p className="text-2xl md:text-4xl text-gray-700 dark:text-gray-300">
                    Powerful filtering system for React.js applications
                  </p>
                  <div className="flex gap-4 flex-wrap">
                    <Link
                      href="/installation"
                      className="bg-red-600 w-full md:w-auto justify-center flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
                    >
                      <Book size={20} />
                      Documentation
                    </Link>
                    <Link
                      href="https://github.com/hsnards/qif"
                      className="bg-gray-200 w-full md:w-auto justify-center items-center flex gap-2 text-gray-900  px-6 py-2 rounded-md hover:bg-gray-300 transition-colors"
                    >
                      <Github size={20} />
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
              <NeonGradientCard className="">
                <div className="overflow-x-auto p-4 text-xs  sm:text-sm">
                  <Suspense fallback={"...."}>
                    <CodeBlock
                      code={`import { useFilters, FiltersProvider } from 'react-qif'

const App = () => {
  const [filters, setFilters] = useState<Partial<Params>>({});

  return (
    <FiltersProvider syncSearchParams filters={filters} setFilters={setFilters}>
        <SearchFilter />
        <CategoryFilter />
        <PriceRangeFilter />
        <ResetButton />
        <FilteredResults />
    </FiltersProvider>
  );
};


const FilteredResults = () => {
  const { getValue } = useFilters();
  const searchTerm = getValue('search');

  // Use searchTerm to filter your content
  return (
    <div>
      {/* Your filtered content */}
    </div>
  );
}

`}
                    />
                  </Suspense>
                </div>
              </NeonGradientCard>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-32">
          <div className="container max-w-[1440px]  mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600 dark:text-gray-100">
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
                <div key={index} className=" p-6 rounded-lg text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
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

        <section className="bg-background dark:bg-gray-900 py-16 md:py-32">
          <div className="container max-w-[1440px] mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-600 dark:text-gray-100">
                Ready to simplify your filtering?
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                Start using Qif today and experience the difference.
              </p>
              <Link
                href="/installation"
                className="bg-red-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
