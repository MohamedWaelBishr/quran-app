async function ReciterLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-primary flex min-h-screen flex-col items-center p-24 text-white">
      {children}
    </section>
  );
}

export default ReciterLayout;
