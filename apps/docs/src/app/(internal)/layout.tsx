import { LayoutComponent } from "@/components/layout";

export default function InternalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LayoutComponent>{children}</LayoutComponent>;
}
