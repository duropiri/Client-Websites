import React from 'react';

function Home() {
  return (
    <div className="home-sticky">
      <header module-name="HeroScroll" className="section">
        <div className="container is--full">
          <div
            className="hero"
            style={{
              transform: 'translate3d(0px, 0px, 0px)',
              opacity: 1,
            }}
          >
            <div
              mobile-link="https://cdn.significo.com/videos/significo-main-hero-mobile.mp4"
              desktop-link="https://cdn.significo.com/videos/significo-main-hero.mp4"
              className="hero__video"
              style={{
                '--cliping': '0.0009%',
                opacity: 0,
              } as React.CSSProperties}
            >
              <div className="video w-embed">
                <div
                  style={{ width: '100%', height: '100%' }}
                  className="w-background-video w-background-video-atom"
                >
                  <video
                    muted
                    autoPlay
                    crossOrigin="anonymous"
                    loop
                    playsInline
                    data-wf-ignore="true"
                    data-object-fit="cover"
                  >
                    <source
                      src="https://cdn.significo.com/videos/significo-main-hero.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <img
                src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d34831bc_Placeholder%20mob.jpeg"
                loading="eager"
                alt="Video Still Of Team Significo"
                className="img-video-placeholder is--mob"
                style={{ display: 'none' }}
              />
              <img
                src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d34831b9_placeholder.png"
                loading="eager"
                sizes="100vw"
                alt="Video Still Of Team Significo"
                className="img-video-placeholder is--pc"
                style={{ display: 'none' }}
              />
            </div>
            <div
              className="hero__subtitle"
              style={{ opacity: 1, visibility: 'inherit' }}
            >
              <h3 className="f-24" style={{ textAlign: 'center' }}>
                <span>We craft health care technology that is more human:</span>
              </h3>
            </div>
            <div className="hero__rows--parent">
              <div
                className="hero__rows"
                style={{
                  '--row': '71.2708',
                  '--scale': 1,
                } as React.CSSProperties}
              >
                <div
                  className="hero__row"
                  style={{
                    transform: 'translate3d(40.8389%, 0px, 0px)',
                  }}
                >
                  <div className="hero__line">
                    <div className="f-74">empathetic</div>
                    <div
                      data-link="https://assets-global.website-files.com/653a7da37f4d157ace610df8/653fbee05075a5a835e7a86c_production 4962731 2160p-transcode.mp4"
                      className="hero__circle"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483189_Ellipse%20845-1.png"
                        loading="lazy"
                        alt="A person Smiling"
                        style={{
                          transform: 'translate3d(0px, 0px, 0px) scale(1.08, 1.08)',
                        }}
                      />
                    </div>
                    <div className="f-74">useful</div>
                    <div
                      data-link="https://assets-global.website-files.com/653a7da37f4d157ace610df8/653fbee41f3495ab16774aac_Stocksy 3336745-transcode.mp4"
                      className="hero__circle"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png"
                        loading="lazy"
                        alt="An older man with glasses"
                        style={{
                          transform: 'translate3d(0px, 0px, 0px) scale(1.08, 1.08)',
                        }}
                      />
                    </div>
                  </div>
                  <div className="hero__line">
                    <div className="f-74">intuitive</div>
                    <div
                      data-link="https://assets-global.website-files.com/653a7da37f4d157ace610df8/653fbf00bb4500d8fe2a6da2_Stocksy 5495217-transcode.mp4"
                      className="hero__circle"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png"
                        loading="lazy"
                        alt="Woman with Afro"
                        style={{
                          transform: 'translate3d(0px, 0px, 0px) scale(1.08, 1.08)',
                        }}
                      />
                    </div>
                    <div className="f-74">useful</div>
                    <div
                      data-link=""
                      className="hero__circle"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483185_Ellipse%20844.png"
                        loading="lazy"
                        alt="A person with a jacket on"
                        style={{
                          transform: 'translate3d(0px, 0px, 0px) scale(1.08, 1.08)',
                        }}
                      />
                    </div>
                  </div>
                  <div className="hero__line">
                    <div className="f-74">empathetic</div>
                    <div
                      data-link="https://assets-global.website-files.com/653a7da37f4d157ace610df8/653fbee05075a5a835e7a86c_production 4962731 2160p-transcode.mp4"
                      className="hero__circle"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483183_Ellipse%20845-6.png"
                        loading="lazy"
                        alt="Old man with hat on"
                        style={{
                          transform: 'translate3d(0px, 0px, 0px) scale(1.08, 1.08)',
                        }}
                      />
                    </div>
                    <div className="f-74">useful</div>
                    <div
                      data-link="https://assets-global.website-files.com/653a7da37f4d157ace610df8/653fbee41f3495ab16774aac_Stocksy 3336745-transcode.mp4"
                      className="hero__circle"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png"
                        loading="lazy"
                        alt="An older man with glasses"
                        style={{
                          transform: 'translate3d(0px, 0px, 0px) scale(1.08, 1.08)',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero__bottom">
              <div className="hero__descr">
                <h4 className="f-14" style={{ textAlign: 'start' }}>
                  <span>We build big ideas. Software. Apps. Tools. For real people. Real lives.</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
