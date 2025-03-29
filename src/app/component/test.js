"use client";

import { useState } from "react";
import Image from "next/image";

export default function Test() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="afg">
      <div className="aoc">
          <header className="j y au dv">
            <nav aria-label="Global" className="fy la vy aaz abe atn dwm">
              <div className="la dqo">
                <a href="#" className="fe ath">
                  <span className="i">Your Company</span>
                  <Image
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="pt vn"
                  />
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="la dns">
                <button
                  type="button"
                  className="fg lg aaz abf agd atj bau"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <span className="i">Open main menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="on"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>

              {/* Desktop Navigation */}
              <div className="ld dnq dst hidden lg:flex space-x-6">
                <a href="#" className="aze azr baw">
                  Product
                </a>
                <a href="#" className="aze azr baw">
                  Features
                </a>
                <a href="#" className="aze azr baw">
                  Marketplace
                </a>
                <a href="#" className="aze azr baw">
                  Company
                </a>
              </div>

              <div className="ld dnq dqo dsh hidden lg:flex">
                <a href="#" className="aze azr baw">
                  Log in <span aria-hidden="true">→</span>
                </a>
              </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
              <div className="lg:hidden px-4 py-4 space-y-2 bg-white shadow-md">
                <a href="#" className="aze azr baw block">
                  Product
                </a>
                <a href="#" className="aze azr baw block">
                  Features
                </a>
                <a href="#" className="aze azr baw block">
                  Marketplace
                </a>
                <a href="#" className="aze azr baw block">
                  Company
                </a>
                <a href="#" className="aze azr baw block">
                  Log in <span aria-hidden="true">→</span>
                </a>
              </div>
            )}
          </header>

          {/* Hero Section */}
          <main>
            <div className="l dn">
              <svg aria-hidden="true" className="j y au do qn vo asc biz">
                <defs>
                  <pattern
                    x="50%"
                    y="-1"
                    id="pattern-bg"
                    width="200"
                    height="200"
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M.5 200V.5H200" fill="none"></path>
                  </pattern>
                </defs>
                <svg x="50%" y="-1" className="afi arf">
                  <path
                    d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                    strokeWidth="0"
                  ></path>
                </svg>
                <rect
                  fill="url(#pattern-bg)"
                  width="100%"
                  height="100%"
                  strokeWidth="0"
                ></rect>
              </svg>
              <div className="afg">
                <div className="fy vy auc avu axf cym dwm dxq">
                  <div className="fy vt ack dlx dnq dqi dsb">
                    <div className="l vo dqk dqs edc">
                      <h1 className="ayl azr azt azw baw dac">
                        We’re changing the way people connect
                      </h1>
                      <p className="hm ayo azp azw bas crt dak dqi">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                        irure qui lorem cupidatat commodo. Elit sunt amet fugiat
                        veniam occaecat fugiat aliqua.
                      </p>
                      <div className="ho la aaz acg">
                        <a
                          href="#"
                          className="agd amg atz aum ayp azr bdk bff bto car cat cba"
                        >
                          Get started
                        </a>
                        <a href="#" className="aze azr baw">
                          Live demo <span aria-hidden="true">→</span>
                        </a>
                      </div>
                    </div>{" "}
                    <div className="hr la abg abr cmx ctr czt dmd dyo">
                      <div className="kt ug wt acs avt com cyn dkl dxr eas ega">
                        <div className="l">
                          <img
                            alt=""
                            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;h=528&amp;q=80"
                            className="lu vo agg all asz bfb"
                          />
                          <div className="d j u agg ber bga bjg"></div>
                        </div>
                      </div>
                      <div className="iw ug wt acs cnt cyl dxr">
                        <div className="l">
                          <img
                            alt=""
                            src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;h=528&amp;q=80"
                            className="lu vo agg all asz bfb"
                          />
                          <div className="d j u agg ber bga bjg"></div>
                        </div>
                        <div className="l">
                          <img
                            alt=""
                            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=.4&amp;w=396&amp;h=528&amp;q=80"
                            className="lu vo agg all asz bfb"
                          />
                          <div className="d j u agg ber bga bjg"></div>
                        </div>
                      </div>
                      <div className="ug wt acs avt cxv">
                        <div className="l">
                          <img
                            alt=""
                            src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;crop=left&amp;w=400&amp;h=528&amp;q=80"
                            className="lu vo agg all asz bfb"
                          />
                          <div className="d j u agg ber bga bjg"></div>
                        </div>
                        <div className="l">
                          <img
                            alt=""
                            src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;h=528&amp;q=80"
                            className="lu vo agg all asz bfb"
                          />
                          <div className="d j u agg ber bga bjg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
    </div>
  );
}
