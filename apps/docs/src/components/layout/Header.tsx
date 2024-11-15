import { Menu, Github, Flower2 } from "lucide-react";
import ActiveLink from "../ActiveLink";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Link from "next/link";

export const Header = () => {
  return (
    <>
    
      <header
        className={`sticky top-0  ${"backdrop-blur-sm"}  transition-all duration-200 border-b transition-colors border-foreground/10 px-4 md:px-6 z-50`}
      >
        <div className="flex items-center gap-4 max-w-[1440px] mx-auto  h-16">
          <nav className="hidden flex-1 flex text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <ActiveLink
              href="/"
              className="flex text-gray-100 items-center gap-2 text-lg font-semibold md:text-base text-white hover:text-white"
            >
              <Flower2 className="h- w-6" />
              <span>Qif</span>
            </ActiveLink>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background text-foreground">
              <nav className="grid gap-6 text-lg font-medium">
                <ActiveLink
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold  text-white hover:text-white"
                >
                  <Flower2 className="h-6 w-6" />
                  <span>Qif Docs</span>
                </ActiveLink>
                <ActiveLink
                  href="/"
                  className="text-muted-foreground hover:text-primary"
                >
                  Home
                </ActiveLink>
                <ActiveLink
                  href="/installation"
                  className="text-muted-foreground hover:text-primary"
                >
                  Installation
                </ActiveLink>
                <ActiveLink
                  href="/usage"
                  className="text-muted-foreground hover:text-primary"
                >
                  Usage
                </ActiveLink>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex w-full flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 flex-row-reverse">
            <a
              href="https://github.com/hsnards/qif"
              rel="noreferrer noopener"
              target="_blank"
              aria-label="GitHub"
              className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500"
            >
              <Github className="h-5 w-5" />
            </a>

            <Link
              href="/installation"
              className="text-sm text-gray-600 dark:text-gray-300 transition-colors hover:text-red-600 dark:hover:text-red-500"
            >
              Documentation
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};
