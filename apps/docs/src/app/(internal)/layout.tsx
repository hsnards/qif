import { LayoutComponent } from "@/components/layout/layout";

export default function InternalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LayoutComponent>{children}</LayoutComponent>;
}
