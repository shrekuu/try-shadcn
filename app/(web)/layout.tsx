import SiteHeader from "./_components/site-header";

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SiteHeader />
      <main>{children}</main>
    </div>
  );
}
