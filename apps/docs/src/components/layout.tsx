'use client'

import Link from "next/link"
import { Book, CircleUser, Menu, Package2, Search } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function LayoutComponent({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`flex min-h-screen w-full flex-col ${isDarkMode ? 'dark' : ''}`}>
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-white dark:bg-red-900 px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base text-red-600 dark:text-white"
            
          >
            <Package2 className="h-6 w-6" />
            <span>Qif Docs</span>
          </Link>
          <Link
            href="/"
            className="text-gray-500 dark:text-red-200 transition-colors hover:text-red-600 dark:hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/installation"
            className="text-gray-500 dark:text-red-200 transition-colors hover:text-red-600 dark:hover:text-white"
          >
            Installation
          </Link>
          <Link
            href="/usage"
            className="text-gray-500 dark:text-red-200 transition-colors hover:text-red-600 dark:hover:text-white"
          >
            Usage
          </Link>
          <Link
            href="/api"
            className="text-gray-500 dark:text-red-200 transition-colors hover:text-red-600 dark:hover:text-white"
          >
            API
          </Link>
          <Link
            href="/examples"
            className="text-gray-500 dark:text-red-200 transition-colors hover:text-red-600 dark:hover:text-white"
          >
            Examples
          </Link>
          <Link
            href="/tutorial"
            className="text-gray-500 dark:text-red-200 transition-colors hover:text-red-600 dark:hover:text-white"
          >
            Tutorial
          </Link>
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
          <SheetContent side="left" className="bg-white dark:bg-red-900">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold text-red-600 dark:text-white"
              >
                <Package2 className="h-6 w-6" />
                <span>Qif Docs</span>
              </Link>
              <Link
                href="/"
                className="text-gray-500 dark:text-red-200 hover:text-red-600 dark:hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/installation"
                className="text-gray-500 dark:text-red-200 hover:text-red-600 dark:hover:text-white"
              >
                Installation
              </Link>
              <Link
                href="/usage"
                className="text-gray-500 dark:text-red-200 hover:text-red-600 dark:hover:text-white"
              >
                Usage
              </Link>
              <Link
                href="/api"
                className="text-gray-500 dark:text-red-200 hover:text-red-600 dark:hover:text-white"
              >
                API
              </Link>
              <Link
                href="/examples"
                className="text-gray-500 dark:text-red-200 hover:text-red-600 dark:hover:text-white"
              >
                Examples
              </Link>
              <Link
                href="/tutorial"
                className="text-gray-500 dark:text-red-200 hover:text-red-600 dark:hover:text-white"
              >
                Tutorial
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-red-200" />
              <Input
                type="search"
                placeholder="Search docs..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-white dark:bg-red-800 border-gray-300 dark:border-red-700 text-gray-900 dark:text-white"
              />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white dark:bg-red-900">
              <DropdownMenuLabel className="text-gray-700 dark:text-white">Theme</DropdownMenuLabel>
              <DropdownMenuItem onClick={toggleDarkMode} className="text-gray-700 dark:text-white">
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-gray-700 dark:text-white">
                <Link href="https://github.com/your-repo">GitHub</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-700 dark:text-white">
                <Link href="https://npm.com/package/qif">NPM</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-gray-50 dark:bg-red-950 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold text-red-600 dark:text-white">Qif Documentation</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav className="grid gap-4 text-sm text-gray-500 dark:text-red-200">
            <Link href="/" className="font-semibold text-red-600 dark:text-white">
              Home
            </Link>
            <Link href="/installation" className="hover:text-red-600 dark:hover:text-white">Installation</Link>
            <Link href="/usage" className="hover:text-red-600 dark:hover:text-white">Usage</Link>
            <Link href="/api" className="hover:text-red-600 dark:hover:text-white">API Reference</Link>
            <Link href="/examples" className="hover:text-red-600 dark:hover:text-white">Examples</Link>
            <Link href="/tutorial" className="hover:text-red-600 dark:hover:text-white">Tutorial</Link>
          </nav>
          <div className="grid gap-6">
            <Card className="bg-white dark:bg-red-900">
              <CardHeader>
                
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-white">
                {children}
              </CardContent>
              <CardFooter className="border-t border-gray-200 dark:border-red-800 px-6 py-4">
                <Button asChild className="bg-red-600 text-white hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600">
                  <Link href="https://github.com/your-repo">View on GitHub</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <footer className="border-t border-gray-200 dark:border-red-800 bg-white dark:bg-red-900 px-4 py-6 md:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 md:flex-row md:gap-4">
          <p className="text-xs text-gray-500 dark:text-red-200 md:text-sm">
            © 2023 Qif Package. All rights reserved.
          </p>
          <nav className="flex gap-4 text-xs text-gray-500 dark:text-red-200 md:ml-auto md:gap-6 md:text-sm">
            <Link href="https://github.com/your-repo" className="hover:text-red-600 dark:hover:text-white">GitHub</Link>
            <Link href="https://npm.com/package/qif" className="hover:text-red-600 dark:hover:text-white">NPM</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}