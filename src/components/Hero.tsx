export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20 relative">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Fast, Reliable Internet for Your Home & Business
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Experience lightning-fast speeds and unbeatable reliability with FastNet Solutions.
        </p>
        <div>
          <button className="btn-primary text-lg px-8 py-4">
            View Our Plans
          </button>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 text-white/30 text-xs">
        Sample by Jameson A. Olitoquit
      </div>
    </section>
  )
}