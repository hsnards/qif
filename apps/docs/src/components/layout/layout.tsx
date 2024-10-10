"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import ActiveLink from "../ActiveLink";
import { Header } from "./Header";
import Particles from "../ui/particles";
import { Footer } from "./Footer";

export function LayoutComponent({ children }: { children: React.ReactNode }) {
  return (
    <div className={`flex relative min-h-screen w-full flex-col`}>
      <Header />
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-background p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-[1440px] gap-2">
          <h1 className="text-3xl font-semibold text-primary">
            Qif Documentation
          </h1>
        </div>
        <div className="mx-auto md:grid w-full max-w-[1440px] items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav className="hidden md:grid gap-4 text-sm text-muted-foreground">
            <ActiveLink href="/" className="font-semibold text-primary">
              Home
            </ActiveLink>
            <ActiveLink href="/installation" className="hover:text-primary">
              Installation
            </ActiveLink>
            <ActiveLink href="/usage" className="hover:text-primary">
              Usage
            </ActiveLink>
            <ActiveLink href="/api" className="hover:text-primary">
              API Reference
            </ActiveLink>
          </nav>
          <div className="md:grid gap-6">
            <Card className=" bg-backgroundtext-card-foreground">
              <CardHeader></CardHeader>
              <CardContent className="text-foreground">{children}</CardContent>
              <CardFooter className="border-t border-border px-6 py-4">
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link href="https://github.com/hsnards/qif">
                    View on GitHub
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <Particles
            className="absolute inset-0"
            quantity={100}
            ease={80}
            color={"#ffffff"}
            refresh
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
