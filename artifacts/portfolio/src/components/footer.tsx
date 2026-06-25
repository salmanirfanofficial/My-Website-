export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 text-center bg-black/60">
      <div className="container mx-auto px-6">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Salman Irfan. Designed & Built with passion.
        </p>
      </div>
    </footer>
  );
}
