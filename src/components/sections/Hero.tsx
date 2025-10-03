const Hero = () => {
  return (
    <section className="container mx-auto">
      <div className="relative h-[500px] rounded-2xl overflow-hidden mb-12">
        <img 
          src="/img/9733d3ba-2cca-4580-9c1d-5bca93ab12d4.jpg" 
          alt="Литье металла"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex items-end justify-center pb-12">
          <div className="text-center">
            <h2 className="text-6xl font-bold mb-4 text-white drop-shadow-2xl">Торговля драгоценными и цветными металлами</h2>
            <p className="text-2xl text-white/90 drop-shadow-lg">Премиальное качество. Актуальные котировки LME.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
