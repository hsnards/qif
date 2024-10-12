import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background px-4 py-6 md:px-6">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-2 md:flex-row md:gap-4">
        <p className="text-xs text-muted-foreground md:text-sm">
          © 2023 Qif Package. All rights reserved.
        </p>
        <nav className="flex gap-4 text-xs text-muted-foreground md:ml-auto md:gap-6 md:text-sm">
          <Link
            href="https://github.com/hsnards"
            className="hover:text-primary"
          >
            GitHub
          </Link>
          <Link
            href="https://npmjs.com/package/react-qif"
            className="hover:text-primary"
          >
            NPM
          </Link>
        </nav>
      </div>
    </footer>
  );
};
