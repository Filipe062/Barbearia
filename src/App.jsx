import './App.css';

function App() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="logo">BARBER<span>KING</span></div>
        <ul className="nav-links">
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#equipe">Equipe</a></li>
          <li><a href="#agendar">Contato</a></li>
        </ul>
        <button className="nav-cta" onClick={() => scrollTo('agendar')}>Agendar</button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-lines"></div>
        <div className="hero-content">
          <div className="hero-badge">Est. 2010 · Goiânia</div>
          <h1>A Arte do<br /><em>Barbeiro</em><br />Verdadeiro</h1>
          <p>Cortes clássicos, acabamentos impecáveis e uma experiência premium para o homem moderno. Sua melhor versão começa aqui.</p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => scrollTo('agendar')}>Agendar Horário</button>
            <button className="btn-outline" onClick={() => scrollTo('servicos')}>Ver Serviços</button>
          </div>
        </div>
        <div className="hero-ornament">B</div>
      </section>

      {/* STATS */}
      <div className="stats">
        <div className="stat"><div className="stat-num">15+</div><div className="stat-label">Anos de experiência</div></div>
        <div className="stat"><div className="stat-num">8.500+</div><div className="stat-label">Clientes satisfeitos</div></div>
        <div className="stat"><div className="stat-num">6</div><div className="stat-label">Barbeiros especializados</div></div>
        <div className="stat"><div className="stat-num">4.9★</div><div className="stat-label">Avaliação média</div></div>
      </div>

      {/* SERVICES */}
      <section className="services" id="servicos">
        <div className="section-tag">O Que Fazemos</div>
        <div className="section-title">Nossos Serviços</div>
        <div className="section-line"></div>
        <div className="services-grid">
          {[
            { icon: '✂️', name: 'Corte Clássico', desc: 'Tesoura e pente com acabamento impecável. Tradição e precisão em cada fio.', price: 'R$ 45' },
            { icon: '🪒', name: 'Barba Completa', desc: 'Navalha quente, toalha e produtos premium para uma barba bem cuidada.', price: 'R$ 40' },
            { icon: '💈', name: 'Combo VIP', desc: 'Corte + barba + sobrancelha + hidratação capilar. O pacote completo.', price: 'R$ 95' },
            { icon: '🧴', name: 'Tratamento Capilar', desc: 'Hidratação profunda e reestruturação para cabelos ressecados ou danificados.', price: 'R$ 55' },
            { icon: '🔥', name: 'Relaxamento', desc: 'Técnica de alisamento progressivo para um visual liso e disciplinado.', price: 'R$ 80' },
            { icon: '👑', name: 'King Experience', desc: 'Experiência exclusiva com todos os serviços, drinque e consultoria de estilo.', price: 'R$ 149' },
          ].map((s) => (
            <div className="service-card" key={s.name}>
              <div className="service-icon">{s.icon}</div>
              <div className="service-name">{s.name}</div>
              <div className="service-desc">{s.desc}</div>
              <div className="service-price">{s.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="sobre">
        <div className="about-inner">
          <div className="about-visual">
            <div className="about-img-frame">
              <div className="about-img-inner">💈</div>
            </div>
            <div className="about-years">
              <span>15</span>
              <small>anos</small>
            </div>
          </div>
          <div className="about-text">
            <div className="section-tag">Nossa História</div>
            <div className="section-title">Tradição e Excelência em Cada Detalhe</div>
            <div className="section-line"></div>
            <p>A BarberKing nasceu em 2010 com um propósito simples: oferecer o melhor serviço de barbearia de Goiânia. Ao longo de 15 anos, nos tornamos referência em cortes masculinos e cuidados com a barba.</p>
            <p>Cada detalhe do nosso espaço foi pensado para proporcionar conforto, estilo e uma experiência inesquecível. Nossos barbeiros são treinados nas melhores técnicas clássicas e contemporâneas.</p>
            <p>Venha nos visitar e descubra por que somos a escolha preferida de milhares de homens em Goiânia.</p>
            <div className="signature">Carlos Mendes</div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="team" id="equipe">
        <div className="section-tag">Nosso Time</div>
        <div className="section-title">Os Mestres da Navalha</div>
        <div className="section-line"></div>
        <div className="team-grid">
          {[
            { emoji: '👨‍🦱', name: 'Carlos Mendes', role: 'Fundador & Master' },
            { emoji: '👨‍🦲', name: 'Rafael Costa', role: 'Especialista em Barba' },
            { emoji: '👱‍♂️', name: 'Lucas Freitas', role: 'Barbeiro Sênior' },
            { emoji: '🧔', name: 'Diego Alves', role: 'Tratamentos Capilares' },
          ].map((m) => (
            <div className="team-card" key={m.name}>
              <div className="team-avatar">{m.emoji}</div>
              <div className="team-name">{m.name}</div>
              <div className="team-role">{m.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING */}
      <section className="booking" id="agendar">
        <div className="booking-inner">
          <div className="section-tag">Reserve Seu Horário</div>
          <div className="section-title">Agendar Visita</div>
          <div className="section-line" style={{ margin: '0 auto 2rem' }}></div>
          <p style={{ color: 'var(--gray)', fontSize: '.9rem' }}>Escolha o serviço, data e horário de sua preferência. Confirmação imediata por WhatsApp.</p>
          <div className="booking-form">
            <div className="form-row">
              <div className="form-group">
                <label>Nome</label>
                <input type="text" placeholder="Seu nome" />
              </div>
              <div className="form-group">
                <label>Telefone</label>
                <input type="tel" placeholder="(62) 9xxxx-xxxx" />
              </div>
            </div>
            <div className="form-group">
              <label>Serviço</label>
              <select>
                <option>Corte Clássico — R$ 45</option>
                <option>Barba Completa — R$ 40</option>
                <option>Combo VIP — R$ 95</option>
                <option>Tratamento Capilar — R$ 55</option>
                <option>Relaxamento — R$ 80</option>
                <option>King Experience — R$ 149</option>
              </select>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Data</label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>Horário</label>
                <select>
                  {['09:00','10:00','11:00','14:00','15:00','16:00','17:00','18:00'].map(h => (
                    <option key={h}>{h}</option>
                  ))}
                </select>
              </div>
            </div>
            <button className="booking-submit">Confirmar Agendamento</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">BARBERKING</div>
        <div className="footer-info">
          Av. T-3, 1234 — Setor Bueno, Goiânia – GO<br />
          (62) 9 9999-8888 · seg–sáb: 9h às 19h
        </div>
        <div className="footer-socials">
          <a className="footer-social" href="#">in</a>
          <a className="footer-social" href="#">ig</a>
          <a className="footer-social" href="#">wa</a>
        </div>
      </footer>
    </>
  );
}

export default App;
