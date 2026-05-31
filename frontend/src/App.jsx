import { useState, useEffect } from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark">
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/95 backdrop-blur-xl py-4 border-b border-primary/10' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="font-display text-3xl tracking-wider text-text-primary">APEX<span className="text-primary">.</span></a>
          <ul className="hidden md:flex gap-10">
            {['Services', 'Portfolio', 'About', 'Reviews', 'Contact'].map((item) => (
              <li key={item}><a href={`#${item.toLowerCase()}`} className="text-text-secondary text-sm font-medium uppercase tracking-wider hover:text-primary transition-colors">{item}</a></li>
            ))}
          </ul>
          <button className="hidden md:block bg-transparent border border-primary text-primary px-6 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-primary hover:text-dark transition-all duration-300">Get Quote</button>
        </div>
      </nav>

      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-dark-surface"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 text-center px-5">
          <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest text-primary mb-8">APEX WELDING</div>
          <h1 className="font-display text-[clamp(60px,12vw,180px)] leading-[0.9] tracking-[-2px] mb-8">
            <span className="block text-text-primary">PRECISION</span>
            <span className="block text-primary">WELDING</span>
          </h1>
          <p className="text-text-secondary text-lg font-light max-w-xl mx-auto mb-12 leading-relaxed">Industrial-grade welding solutions that exceed industry standards.</p>
          <div className="flex gap-5 justify-center flex-wrap">
            <a href="#contact" className="btn btn-primary">Start Your Project</a>
            <a href="#work" className="btn btn-secondary">View Our Work</a>
          </div>
        </div>
      </section>

      <section className="bg-dark-surface py-20 px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
        {[{n:'38',l:'Years Experience'},{n:'5K+',l:'Projects Completed'},{n:'99%',l:'Client Satisfaction'},{n:'24/7',l:'Emergency Service'}].map((s,i)=>(
          <div key={i} className="text-center p-8 border-r border-white/10 last:border-r-0"><div className="font-display text-7xl text-primary leading-none mb-2.5">{s.n}</div><div className="text-text-secondary text-sm uppercase tracking-widest">{s.l}</div></div>
        ))}
      </section>

      <section id="services" className="py-[150px] px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">OUR EXPERTISE</h2>
          <p className="section-desc">Mastering the art of metal fusion with cutting-edge techniques and custom fabrication.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {t:'Home Doors',d:'Custom metal doors for residential and commercial properties. Steel security doors, decorative entry doors, and fire-rated doors with expert craftsmanship.'},
            {t:'Bridge Construction',d:'Heavy-duty steel bridges for industrial, agricultural, and commercial use. Pedestrian bridges, vehicular bridges, and modular bridge systems.'},
            {t:'Security Cages',d:'Industrial and commercial security cages for equipment protection, storage enclosures, and high-security storage areas.'},
            {t:'Roofing Systems',d:'Metal roofing structures, canopy覆盖 systems, and industrial roofing solutions. Custom steel roof frames and cladding.'},
            {t:'Hand Carts',d:'Heavy-duty hand carts and platform trucks for industrial use. Custom designs for specific applications and load requirements.'},
            {t:'Trolleys',d:'Industrial trolleys for material handling. Heavy-duty warehouse trolleys, workshop trolleys, and specialized transport equipment.'},
            {t:'Structural Welding',d:'Heavy-duty structural steel fabrication for commercial buildings, bridges, and industrial facilities.'},
            {t:'MIG/TIG Welding',d:'Precision welding for stainless steel, aluminum, and exotic alloys.'},
            {t:'Custom Fabrication',d:'Bespoke metal fabrication from blueprints to finished product.'},
            {t:'Repair Services',d:'Emergency repair and restoration with rapid turnaround.'},
            {t:'Pipe Welding',d:'Professional pipe welding with certified welders.'},
            {t:'Artistic Welding',d:'Custom metal sculptures and architectural metalwork.'}
          ].map((s,i)=>(
            <div key={i} className="bg-dark-surface border border-white/5 p-12 hover:-translate-y-2.5 hover:border-primary/30 transition-all">
              <div className="w-[70px] h-[70px] bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">{s.t}</h3>
              <p className="text-text-secondary leading-relaxed mb-6">{s.d}</p>
              <a href="#" className="text-primary font-semibold text-sm hover:underline">Learn More</a>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="py-[150px] px-6 bg-dark-elevated">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="section-tag">Our Portfolio</span>
          <h2 className="section-title">LATEST PROJECTS</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[{img:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',c:'Structural',t:'Harbor Bridge',sp:'col-span-2 row-span-2'},{img:'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=600',c:'Industrial',t:'Factory System',sp:''},{img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',c:'Custom',t:'Entry Gate',sp:''},{img:'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600',c:'Piping',t:'Oil Pipeline',sp:''},{img:'https://images.unsplash.com/photo-1590959651373-a3db0af38a9a?w=600',c:'Artistic',t:'Phoenix Sculpture',sp:''}].map((p,i)=>(
            <div key={i} className={`relative overflow-hidden cursor-pointer group ${p.sp}`}>
              <img src={p.img} alt={p.t} className="w-full h-full object-cover group-hover:scale-110 transition-transform aspect-square" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity"><span className="text-primary text-xs uppercase mb-2">{p.c}</span><h3 className="text-2xl font-bold text-white">{p.t}</h3></div>
            </div>
          ))}
        </div>
      </section>

      <section id="reviews" className="py-[150px] px-6 bg-dark">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="section-tag">Client Reviews</span>
          <h2 className="section-title">WHAT THEY SAY</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[{t:'Apex transformed our vision into reality.',n:'Marcus Johnson',r:'Architect'},{t:'We have relied on Apex for over a decade.',n:'Sarah Rodriguez',r:'Director'},{t:'The sculpture exceeded all expectations.',n:'David Kim',r:'Curator'}].map((t,i)=>(
            <div key={i} className="bg-dark-surface p-12"><p className="text-text-secondary text-lg leading-relaxed mb-8">"{t.t}"</p><div className="flex items-center gap-4"><div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-display text-2xl text-dark">{t.n[0]}{t.n.split(' ')[1][0]}</div><div><h4 className="text-lg font-semibold">{t.n}</h4><span className="text-text-muted text-sm">{t.r}</span></div></div></div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-[150px] px-6 bg-gradient-to-br from-primary to-primary-dark text-center">
        <h2 className="font-display text-[clamp(48px,8vw,96px)] text-dark leading-none mb-5">READY TO WELD?</h2>
        <p className="text-dark/70 text-lg max-w-xl mx-auto mb-10">Let us forge something extraordinary together.</p>
        <a href="tel:+18005554687" className="btn bg-dark text-primary hover:bg-white hover:text-dark">Call (800) 555-4687</a>
      </section>

      <footer className="bg-dark py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div><div className="font-display text-4xl mb-5">APEX<span className="text-primary">.</span></div><p className="text-text-secondary mb-6">Transforming metal into masterpieces since 1985.</p><div className="flex gap-4">{['T','I','L','Y'].map((s,i)=>(<a key={i} href="#" className="w-11 h-11 bg-dark-surface rounded-lg flex items-center justify-center text-text-secondary hover:bg-primary hover:text-dark transition-all">{s}</a>))}</div></div>
          <div><h4 className="text-sm font-semibold uppercase mb-6">Services</h4><ul className="space-y-3">{['Home Doors','Bridges','Cages','Roofing','Hand Carts','Trolleys','Structural','MIG/TIG'].map(s=><li key={s}><a href="#" className="text-text-secondary hover:text-primary">{s}</a></li>)}</ul></div>
          <div><h4 className="text-sm font-semibold uppercase mb-6">Company</h4><ul className="space-y-3">{['About','Team','Careers','Certifications'].map(s=><li key={s}><a href="#" className="text-text-secondary hover:text-primary">{s}</a></li>)}</ul></div>
          <div><h4 className="text-sm font-semibold uppercase mb-6">Contact</h4><ul className="space-y-3"><li><a href="tel:+18005554687" className="text-text-secondary hover:text-primary">(800) 555-4687</a></li><li><a href="mailto:info@apex.com" className="text-text-secondary hover:text-primary">info@apexwelding.com</a></li><li className="text-text-secondary">1247 Industrial Way</li></ul></div>
        </div>
        <div className="pt-10 border-t border-white/5 text-center"><p className="text-text-muted text-sm">&copy; 2024 Apex Welding Co.</p></div>
      </footer>
    </div>
  );
}

export default App;