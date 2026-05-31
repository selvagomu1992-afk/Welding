import { useState, useEffect } from 'react';
import { products, categories } from './data';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProducts = activeCategory === 'All' ? products : products.filter(p => p.c === activeCategory);

  return (
    <div className="min-h-screen bg-white text-dark">
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-xl py-4 shadow-lg' : 'py-5 bg-white/80'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="font-display text-3xl tracking-wider text-dark">APEX<span className="text-primary">.</span></a>
          <ul className="hidden md:flex gap-10">
            {['Services', 'Products', 'Portfolio', 'About', 'Reviews', 'Contact'].map((item) => (
              <li key={item}><a href={`#${item.toLowerCase()}`} className="text-gray-600 text-sm font-medium uppercase tracking-wider hover:text-primary transition-colors">{item}</a></li>
            ))}
          </ul>
          <button className="hidden md:block bg-transparent border-2 border-primary text-primary px-6 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-primary hover:text-white transition-all duration-300">Get Quote</button>
        </div>
      </nav>

      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 text-center px-5">
          <div className="inline-flex items-center gap-2 bg-primary/10 border-2 border-primary px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest text-primary mb-8">APEX WELDING</div>
          <h1 className="font-display text-[clamp(60px,12vw,180px)] leading-[0.9] tracking-[-2px] mb-8">
            <span className="block text-dark">PRECISION</span>
            <span className="block text-primary">WELDING</span>
          </h1>
          <p className="text-gray-600 text-lg font-light max-w-xl mx-auto mb-12 leading-relaxed">Industrial-grade welding solutions that exceed industry standards.</p>
          <div className="flex gap-5 justify-center flex-wrap">
            <a href="#products" className="btn btn-primary">View Products</a>
            <a href="#work" className="btn btn-secondary">View Our Work</a>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6 grid grid-cols-2 md:grid-cols-4 gap-10 shadow-sm">
        {[{n:'38',l:'Years Experience'},{n:'5K+',l:'Projects Completed'},{n:'99%',l:'Client Satisfaction'},{n:'24/7',l:'Emergency Service'}].map((s,i)=>(
          <div key={i} className="text-center p-8 border-r border-gray-200 last:border-r-0"><div className="font-display text-7xl text-primary leading-none mb-2.5">{s.n}</div><div className="text-gray-500 text-sm uppercase tracking-widest">{s.l}</div></div>
        ))}
      </section>

      <section id="services" className="py-[150px] px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">OUR EXPERTISE</h2>
          <p className="section-desc">Mastering the art of metal fusion with cutting-edge techniques.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {t:'Home Doors',d:'Custom metal doors for residential and commercial properties.'},
            {t:'Bridge Construction',d:'Heavy-duty steel bridges for industrial, agricultural, and commercial use.'},
            {t:'Security Cages',d:'Industrial and commercial security cages for equipment protection.'},
            {t:'Roofing Systems',d:'Metal roofing structures, canopy systems, and industrial roofing.'},
            {t:'Hand Carts',d:'Heavy-duty hand carts and platform trucks for industrial use.'},
            {t:'Trolleys',d:'Industrial trolleys for material handling.'},
            {t:'Structural Welding',d:'Heavy-duty structural steel fabrication.'},
            {t:'MIG/TIG Welding',d:'Precision welding for stainless steel and aluminum.'},
            {t:'Custom Fabrication',d:'Bespoke metal fabrication from blueprints.'},
            {t:'Repair Services',d:'Emergency repair and restoration.'},
            {t:'Pipe Welding',d:'Professional pipe welding.'},
            {t:'Artistic Welding',d:'Custom metal sculptures.'}
          ].map((s,i)=>(
            <div key={i} className="bg-white border border-gray-100 p-12 rounded-2xl hover:-translate-y-2.5 hover:shadow-xl transition-all duration-300 hover:border-primary/20">
              <div className="w-[70px] h-[70px] bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-dark">{s.t}</h3>
              <p className="text-gray-500 leading-relaxed mb-6">{s.d}</p>
              <a href="#products" className="text-primary font-semibold text-sm hover:underline">View Products</a>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="py-[150px] px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-tag">Our Products</span>
            <h2 className="section-title">PRODUCT GALLERY</h2>
            <p className="section-desc">Browse our catalog of precision-crafted metal products.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${activeCategory === cat ? 'bg-primary text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-primary/10 hover:text-primary'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300 hover:border-primary/30">
                <div className="relative overflow-hidden">
                  <img src={product.img} alt={product.t} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">{product.c}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-dark">{product.t}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{product.d}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-display text-2xl">{product.p}</span>
                    <button className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary hover:text-white transition-all">Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="py-[150px] px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="section-tag">Our Portfolio</span>
          <h2 className="section-title">LATEST PROJECTS</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[{img:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',c:'Structural',t:'Harbor Bridge',sp:'col-span-2 row-span-2'},{img:'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=600',c:'Industrial',t:'Factory System',sp:''},{img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',c:'Custom',t:'Entry Gate',sp:''},{img:'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600',c:'Piping',t:'Oil Pipeline',sp:''},{img:'https://images.unsplash.com/photo-1590959651373-a3db0af38a9a?w=600',c:'Artistic',t:'Phoenix Sculpture',sp:''}].map((p,i)=>(
            <div key={i} className={`relative overflow-hidden cursor-pointer group rounded-2xl ${p.sp || ''}`}>
              <img src={p.img} alt={p.t} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110 aspect-square" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-400"><span className="text-primary text-xs uppercase tracking-widest mb-2">{p.c}</span><h3 className="text-2xl font-bold text-dark">{p.t}</h3></div>
            </div>
          ))}
        </div>
      </section>

      <section id="reviews" className="py-[150px] px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="section-tag">Client Reviews</span>
          <h2 className="section-title">WHAT THEY SAY</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[{t:'Apex transformed our vision into reality.',n:'Marcus Johnson',r:'Architect'},{t:'We have relied on Apex for over a decade.',n:'Sarah Rodriguez',r:'Director'},{t:'The sculpture exceeded all expectations.',n:'David Kim',r:'Curator'}].map((t,i)=>(
            <div key={i} className="bg-gray-50 p-12 rounded-2xl border border-gray-100"><p className="text-gray-600 text-lg leading-relaxed mb-8">"{t.t}"</p><div className="flex items-center gap-4"><div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-display text-2xl text-white">{t.n[0]}{t.n.split(' ')[1][0]}</div><div><h4 className="text-lg font-semibold text-dark">{t.n}</h4><span className="text-gray-400 text-sm">{t.r}</span></div></div></div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-[150px] px-6 bg-gradient-to-br from-primary to-primary-dark text-center">
        <h2 className="font-display text-[clamp(48px,8vw,96px)] text-white leading-none mb-5">READY TO WELD?</h2>
        <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">Let us forge something extraordinary together.</p>
        <a href="tel:+18005554687" className="btn bg-white text-primary hover:bg-gray-100">Call (800) 555-4687</a>
      </section>

      <footer className="bg-dark py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div><div className="font-display text-4xl mb-5 text-white">APEX<span className="text-primary">.</span></div><p className="text-gray-400 mb-6">Transforming metal into masterpieces since 1985.</p><div className="flex gap-4">{['T','I','L','Y'].map((s,i)=>(<a key={i} href="#" className="w-11 h-11 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">{s}</a>))}</div></div>
          <div><h4 className="text-sm font-semibold uppercase mb-6 text-white">Products</h4><ul className="space-y-3">{['Home Doors','Bridges','Cages','Roofing','Hand Carts','Trolleys','Structural','More'].map(s=><li key={s}><a href="#products" className="text-gray-400 hover:text-primary">{s}</a></li>)}</ul></div>
          <div><h4 className="text-sm font-semibold uppercase mb-6 text-white">Company</h4><ul className="space-y-3">{['About','Team','Careers','Certifications'].map(s=><li key={s}><a href="#" className="text-gray-400 hover:text-primary">{s}</a></li>)}</ul></div>
          <div><h4 className="text-sm font-semibold uppercase mb-6 text-white">Contact</h4><ul className="space-y-3"><li><a href="tel:+18005554687" className="text-gray-400 hover:text-primary">(800) 555-4687</a></li><li><a href="mailto:info@apex.com" className="text-gray-400 hover:text-primary">info@apexwelding.com</a></li><li className="text-gray-400">1247 Industrial Way</li></ul></div>
        </div>
        <div className="pt-10 border-t border-white/10 text-center"><p className="text-gray-500 text-sm">&copy; 2024 Apex Welding Co.</p></div>
      </footer>
    </div>
  );
}

export default App;
