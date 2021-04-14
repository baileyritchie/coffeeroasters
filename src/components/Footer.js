import React from 'react'
import './Footer.css';

export default function Footer() {
  return (
    <section className="footer">
        <div className="footer-container">
          <div className="footer-logo-container">
            <h1 className="footer-logo">
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.4893 3.00268C9.97493 -0.508874 4.76554 -1.01438 1.87661 1.87766C-1.01383 4.76821 -0.508337 9.97779 3.00008 13.4908C3.93606 14.4269 5.01454 15.1424 6.15301 15.6554C6.52651 13.4848 7.59748 11.3983 9.22344 9.68528C8.68496 9.49328 8.13297 9.33128 7.55698 9.17377C4.14606 8.23776 2.4511 5.39222 2.05511 2.05617C2.38262 2.45002 2.68082 2.86313 2.97814 3.27503C3.555 4.0742 4.12855 4.86879 4.90654 5.50922C6.11679 6.50576 7.44522 6.89045 8.89855 7.3113C8.95466 7.32755 9.01096 7.34385 9.06745 7.36025C9.75593 7.55975 10.3544 7.85525 10.9034 8.20026C12.3464 7.14574 13.9738 6.44373 15.6538 6.15423C15.1423 5.01571 14.4253 3.93869 13.4893 3.00268ZM7.54648 16.4894C7.76998 14.3159 8.82296 12.1903 10.5104 10.5028C14.0248 6.99124 19.2342 6.48423 22.1232 9.37778C25.0136 12.2683 24.5096 17.4779 20.9967 20.991C19.3092 22.6785 17.1838 23.7315 15.0103 23.9565C14.7208 23.985 14.4343 24 14.1538 24C12.2849 24 10.6154 23.3445 9.38544 22.1145C7.96947 20.7 7.31549 18.7019 7.54648 16.4894ZM12.6869 18.2729C13.8388 17.3939 15.0853 17.0459 16.4413 16.6754C19.8522 15.7394 21.5457 12.8938 21.9432 9.55778C21.6184 9.94944 21.3224 10.3598 21.0273 10.7688C20.4487 11.5709 19.8735 12.3681 19.0917 13.0108C17.8778 14.009 16.5463 14.3943 15.0864 14.8168L14.9308 14.8619C11.5934 15.8309 9.94343 18.6524 9.56244 21.936C9.89121 21.541 10.1924 21.1309 10.492 20.7229C11.1423 19.8374 11.7852 18.962 12.6869 18.2729Z" fill="#0E8784" />
              </svg>
              Coffee Roasters
            </h1>
            <ul className="footer-nav-container">
              <li className="footer-nav-link">Home</li>
              <li className="footer-nav-link">About Us</li>
              <li className="footer-nav-link">Create Your Plan</li>
            </ul>
          </div>
          <div className="footer-socials-container">
            <img className="footer-social" src="/assets/shared/desktop/icon-facebook.svg" />
            <img className="footer-social" src="/assets/shared/desktop/icon-twitter.svg" />
            <img className="footer-social" src="/assets/shared/desktop/icon-instagram.svg" />
          </div>
        </div>
      </section>
  )
}
