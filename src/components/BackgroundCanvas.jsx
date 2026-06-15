
export default function BackgroundCanvas({ children }) {
  return (
    <div className="relative min-h-screen w-full bg-dark-bg text-brand-text-primary px-4 py-8 md:px-8 lg:px-16 overflow-hidden">
      {/* Background Noise overlay */}
      <div className="noise-overlay" />
      
      {/* Atmospheric Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] radial-glow-orange pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] radial-glow-teal pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-6">
        {children}
      </div>
    </div>
  );
}
