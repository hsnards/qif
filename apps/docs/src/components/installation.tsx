'use client'

export function InstallationComponent() {
  return (

      <div className="space-y-6">
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Installation</h2>
          <p className="text-muted-foreground">
            To get started with Qif, you need to install it in your React project. You can do this using npm or yarn.
          </p>
        </section>
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-foreground">Using npm</h3>
          <div className="bg-gray-400/10 p-4 rounded-md">
            <pre className="overflow-x-auto">
              <code className="text-sm text-muted-foreground">npm install react-qif nuqs</code>
            </pre>
          </div>
        </section>
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-foreground">Using yarn</h3>
          <div className="bg-gray-400/10 p-4 rounded-md">
            <pre className="overflow-x-auto">
              <code className="text-sm text-muted-foreground">yarn add react-qif nuqs</code>
            </pre>
          </div>
        </section>
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-foreground">Requirements</h3>
          <p className="text-muted-foreground">
            Qif uses nuqs internally. Make sure your project meets its requirements before installation.
            <a href="https://nuqs.47ng.com/" target="_blank" rel="noreferrer noopener" className="text-blue-500"> Learn more about nuqs</a>
          </p>
        </section>
      </div>
  )
}