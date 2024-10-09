'use client'

import { Button } from "@/components/ui/button"

export function InstallationComponent() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('npm install qif')
  }

  return (
      <div className="space-y-6">
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-red-600 dark:text-white">Installation</h2>
          <p className="text-gray-700 dark:text-red-100">
            To install the Qif package in your project, run the following command in your terminal:
          </p>
          <div className="bg-gray-100 dark:bg-red-800 p-4 rounded-md flex justify-between items-center">
            <code className="text-sm font-mono text-red-600 dark:text-white">npm install qif</code>
            <Button onClick={copyToClipboard} variant="outline" size="sm" className="text-red-600 dark:text-white border-red-600 dark:border-white hover:bg-red-100 dark:hover:bg-red-700">
              Copy
            </Button>
          </div>
        </section>
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-red-600 dark:text-white">Requirements</h2>
          <p className="text-gray-700 dark:text-red-100">
            Qif is compatible with React 16.8+ and requires a modern JavaScript environment with ES6 support.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-red-600 dark:text-white">Next Steps</h2>
          <p className="text-gray-700 dark:text-red-100">
            After installation, head over to the <a href="/usage" className="text-red-600 dark:text-red-300 hover:underline">Usage</a> page to learn how to implement Qif in your project.
          </p>
        </section>
      </div>
  )
}