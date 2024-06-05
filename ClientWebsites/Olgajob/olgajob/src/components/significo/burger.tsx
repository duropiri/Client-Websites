import React from 'react';

function burger() {
  const customStyle = (delay: number) => ({
    '--delay': `${delay}s`,
  } as React.CSSProperties);

  return (
    <div data-lenis-prevent="" className="burger">
      <div className="container">
        <div className="burger__body">
          <div className="burger__list">
            <a href="/solutions" className="burger__item w-inline-block" style={customStyle(0.3)}>
              <div className="f-18">Solutions</div>
            </a>
            <a href="/about" className="burger__item w-inline-block" style={customStyle(0.35)}>
              <div className="f-18">About</div>
            </a>
            <a href="/insights" className="burger__item w-inline-block" style={customStyle(0.4)}>
              <div className="f-18">Insights</div>
            </a>
            <a href="/category/thought-leadership" className="burger__item with-arrow w-inline-block" style={customStyle(0.45)}>
              <div className="f-18">↳</div>
              <div className="f-18">Thought Leadership</div>
            </a>
            <a href="/category/resources" className="burger__item with-arrow w-inline-block" style={customStyle(0.5)}>
              <div className="f-18">↳</div>
              <div className="f-18">Resources</div>
            </a>
            <a href="/category/newsroom" className="burger__item with-arrow w-inline-block" style={customStyle(0.55)}>
              <div className="f-18">↳</div>
              <div className="f-18">Newsroom</div>
            </a>
            <a href="/team" className="burger__item w-inline-block" style={customStyle(0.6)}>
              <div className="f-18">Team</div>
            </a>
            <a href="/careers" className="burger__item w-inline-block" style={customStyle(0.65)}>
              <div className="f-18">Careers</div>
            </a>
            <a href="/contact" className="burger__item w-inline-block" style={customStyle(0.7)}>
              <div className="f-18">Contact Us</div>
            </a>
          </div>
          <div className="burger__socials">
            <a href="https://www.instagram.com/significohealth/" target="_blank" className="footer__social--item w-inline-block">
              <div className="svg w-embed">
                <svg width="100%" height="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16.4531 3.03711H8.45312C5.6917 3.03711 3.45312 5.27569 3.45312 8.03711V16.0371C3.45312 18.7985 5.6917 21.0371 8.45312 21.0371H16.4531C19.2145 21.0371 21.4531 18.7985 21.4531 16.0371V8.03711C21.4531 5.27569 19.2145 3.03711 16.4531 3.03711ZM19.7031 16.0371C19.6976 17.8297 18.2457 19.2816 16.4531 19.2871H8.45312C6.66048 19.2816 5.20861 17.8297 5.20312 16.0371V8.03711C5.20861 6.24446 6.66048 4.7926 8.45312 4.78711H16.4531C18.2457 4.7926 19.6976 6.24446 19.7031 8.03711V16.0371ZM17.2031 8.28711C17.7554 8.28711 18.2031 7.83939 18.2031 7.28711C18.2031 6.73483 17.7554 6.28711 17.2031 6.28711C16.6508 6.28711 16.2031 6.73483 16.2031 7.28711C16.2031 7.83939 16.6508 8.28711 17.2031 8.28711ZM12.4531 7.53711C9.96784 7.53711 7.95312 9.55183 7.95312 12.0371C7.95312 14.5224 9.96784 16.5371 12.4531 16.5371C14.9384 16.5371 16.9531 14.5224 16.9531 12.0371C16.9558 10.8428 16.4825 9.69668 15.638 8.85219C14.7935 8.0077 13.6474 7.53445 12.4531 7.53711ZM9.70312 12.0371C9.70312 13.5559 10.9343 14.7871 12.4531 14.7871C13.9719 14.7871 15.2031 13.5559 15.2031 12.0371C15.2031 10.5183 13.9719 9.28711 12.4531 9.28711C10.9343 9.28711 9.70312 10.5183 9.70312 12.0371Z" fill="currentColor" />
                </svg>
              </div>
            </a>
            <a href="https://www.linkedin.com/company/significo-health/" target="_blank" className="footer__social--item w-inline-block">
              <div className="svg w-embed">
                <svg width="100%" height="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.95312 3.2793C4.1247 3.2793 3.45312 3.95087 3.45312 4.7793V19.7793C3.45312 20.6077 4.1247 21.2793 4.95312 21.2793H19.9531C20.7815 21.2793 21.4531 20.6077 21.4531 19.7793V4.7793C21.4531 3.95087 20.7815 3.2793 19.9531 3.2793H4.95312ZM8.97388 7.28202C8.97951 8.23827 8.26373 8.82749 7.41435 8.82327C6.61419 8.81905 5.9167 8.18202 5.92092 7.28343C5.92514 6.43827 6.5931 5.75905 7.46076 5.77874C8.34107 5.79843 8.97951 6.4439 8.97388 7.28202ZM12.7328 10.0411H10.2128H10.2114V18.6009H12.8748V18.4012C12.8748 18.0213 12.8745 17.6413 12.8742 17.2612C12.8734 16.2474 12.8725 15.2325 12.8777 14.219C12.8791 13.9729 12.8903 13.717 12.9536 13.4821C13.1912 12.6046 13.9802 12.0379 14.8605 12.1772C15.4258 12.2657 15.7998 12.5934 15.9573 13.1264C16.0544 13.4596 16.098 13.8182 16.1022 14.1656C16.1136 15.2132 16.112 16.2608 16.1104 17.3085C16.1098 17.6783 16.1092 18.0483 16.1092 18.4181V18.5995H18.7811V18.3942C18.7811 17.9422 18.7809 17.4903 18.7806 17.0384C18.7801 15.9089 18.7795 14.7794 18.7825 13.6495C18.7839 13.139 18.7291 12.6356 18.6039 12.142C18.4169 11.4079 18.0302 10.8004 17.4016 10.3617C16.9558 10.0495 16.4664 9.8484 15.9194 9.8259C15.8571 9.82331 15.7943 9.81992 15.7312 9.81651C15.4515 9.80139 15.1672 9.78603 14.8998 9.83996C14.1348 9.99324 13.4627 10.3434 12.955 10.9607C12.896 11.0315 12.8383 11.1034 12.7522 11.2107L12.7328 11.235V10.0411ZM6.13477 18.6037H8.78555V10.0466H6.13477V18.6037Z" fill="currentColor" />
                </svg>
              </div>
            </a>
            <a href="https://www.youtube.com/@significo_" target="_blank" className="footer__social--item w-inline-block">
              <div className="svg w-embed">
                <svg width="100%" height="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.0445 7.24012C21.9306 6.81752 21.708 6.43212 21.3989 6.12228C21.0897 5.81245 20.7048 5.58898 20.2825 5.47412C18.7165 5.04412 12.4515 5.03712 12.4515 5.03712C12.4515 5.03712 6.1875 5.03012 4.6205 5.44112C4.19843 5.56126 3.81432 5.78789 3.50507 6.09925C3.19581 6.41061 2.97179 6.79624 2.8545 7.21912C2.4415 8.78512 2.4375 12.0331 2.4375 12.0331C2.4375 12.0331 2.4335 15.2971 2.8435 16.8471C3.0735 17.7041 3.7485 18.3811 4.6065 18.6121C6.1885 19.0421 12.4365 19.0491 12.4365 19.0491C12.4365 19.0491 18.7015 19.0561 20.2675 18.6461C20.69 18.5315 21.0752 18.3085 21.3852 17.9993C21.6951 17.6901 21.9189 17.3054 22.0345 16.8831C22.4485 15.3181 22.4515 12.0711 22.4515 12.0711C22.4515 12.0711 22.4715 8.80612 22.0445 7.24012ZM10.4475 15.0421L10.4525 9.04212L15.6595 12.0471L10.4475 15.0421Z" fill="currentColor" />
                </svg>
              </div>
            </a>
            <a href="https://www.youtube.com/@significo_" target="_blank" className="footer__social--item w-inline-block">
              <div className="svg w-embed">
                <svg width="100%" height="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.0445 7.24012C21.9306 6.81752 21.708 6.43212 21.3989 6.12228C21.0897 5.81245 20.7048 5.58898 20.2825 5.47412C18.7165 5.04412 12.4515 5.03712 12.4515 5.03712C12.4515 5.03712 6.1875 5.03012 4.6205 5.44112C4.19843 5.56126 3.81432 5.78789 3.50507 6.09925C3.19581 6.41061 2.97179 6.79624 2.8545 7.21912C2.4415 8.78512 2.4375 12.0331 2.4375 12.0331C2.4375 12.0331 2.4335 15.2971 2.8435 16.8471C3.0735 17.7041 3.7485 18.3811 4.6065 18.6121C6.1885 19.0421 12.4365 19.0491 12.4365 19.0491C12.4365 19.0491 18.7015 19.0561 20.2675 18.6461C20.69 18.5315 21.0752 18.3085 21.3852 17.9993C21.6951 17.6901 21.9189 17.3054 22.0345 16.8831C22.4485 15.3181 22.4515 12.0711 22.4515 12.0711C22.4515 12.0711 22.4715 8.80612 22.0445 7.24012ZM10.4475 15.0421L10.4525 9.04212L15.6595 12.0471L10.4475 15.0421Z" fill="currentColor" />
                </svg>
              </div>
            </a>
            <a href="https://www.facebook.com/significohealth" target="_blank" className="footer__social--item w-inline-block">
              <div className="svg w-embed">
                <svg width="100%" height="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.4512 12.3414C22.4512 6.78478 17.9741 2.28027 12.4512 2.28027C6.92832 2.28027 2.45117 6.78478 2.45117 12.3414C2.45117 17.3631 6.10801 21.5255 10.8887 22.2803V15.2497H8.34961V12.3414H10.8887V10.1248C10.8887 7.60323 12.3817 6.21039 14.6658 6.21039C15.76 6.21039 16.9043 6.4069 16.9043 6.4069V8.88288H15.6434C14.4012 8.88288 14.0137 9.65849 14.0137 10.4542V12.3414H16.7871L16.3438 15.2497H14.0137V22.2803C18.7944 21.5255 22.4512 17.3633 22.4512 12.3414Z" fill="currentColor" />
                </svg>
              </div>
            </a>
            <a href="https://twitter.com/significohealth" target="_blank" className="footer__social--item w-inline-block">
              <div className="svg w-embed">
                <svg width="100%" height="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.6292 4.28027H20.3893L14.3592 11.0577L21.4531 20.2803H15.8987L11.5482 14.6869L6.57035 20.2803H3.80856L10.2583 13.0311L3.45312 4.28027H9.14857L13.081 9.39289L17.6292 4.28027ZM16.6604 18.6557H18.1899L8.31753 5.81955H6.67632L16.6604 18.6557Z" fill="currentColor" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default burger;
