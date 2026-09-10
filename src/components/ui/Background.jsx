
const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-paper dark:bg-ink transition-colors duration-500">
      {/* grid */}
      <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />

      {/* blobs */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-accent/20 blur-[110px] animate-blob" />
      <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-accent-light/20 blur-[110px] animate-blob [animation-delay:4s]" />
      <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-accent/10 blur-[110px] animate-blob [animation-delay:8s]" />
    </div>
  );
};

export default Background;
