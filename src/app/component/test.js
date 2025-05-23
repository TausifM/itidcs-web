"use client";
import Link from "next/link";
import Image from 'next/image';

export default function HeroSection() {

  return (
        <main>
          <div className="l dn">
            <div className="afg">
              <div className="fy vy auc dwm">
                <div className="fy vt ack dlx dnq dqi dsb">
                  <div className="l vo dqk dqs edc">
                    <h1 className="ayl azr azt azw baw dac">
                      {/* Your Gateway to Success in IT & Digital Innovation! */}
                      Learn. Build. Grow - The Innovative Way.
                    </h1>
                    <p className="hm ayo azp azw bas crt dak dqi">
                      Looking to master the latest IT skills or build a
                      high-performing website or app? You&apos;re in the right place!
                      At ITIDCS, we offer top-tier IT training and
                      professional digital solutions to help you stay ahead in
                      the competitive tech landscape.
                    </p>
                    <div className="ho la aaz acg">
                      <Link
                        href="https://docs.google.com/forms/d/e/1FAIpQLSflmV56d0cYZcW4q5tVbuOfQQ7Qb_YKbYrqm4AEnTCjbzTeKA/viewform"
                        className="agd amg atz aum ayp azr bdk bff bto car cat cba"
                        target="_blank"
                      >
                      Join Today
                      </Link>
                      <Link href="/enroll" className="aze azr baw" >
                      Take your career or business to the next level! <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>{" "}
                  <div className="hr la abg abr cmx ctr czt dmd dyo">
                    <div className="kt ug wt acs avt com cyn dkl dxr eas ega">
                      <div className="l">
                        <Image
                          alt=""
                          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;h=528&amp;q=80"
                          className="lu vo agg all asz bfb"
                          width={400}
                          height={528}
                        />
                        <div className="d j u agg ber bga bjg"></div>
                      </div>
                    </div>
                    <div className="iw ug wt acs cnt cyl dxr">
                      <div className="l">
                        <Image
                          alt=""
                          src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;h=528&amp;q=80"
                          className="lu vo agg all asz bfb"
                          width={400}
                          height={528}
                        />
                        <div className="d j u agg ber bga bjg"></div>
                      </div>
                      <div className="l">
                        <Image
                          alt=""
                          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=.4&amp;w=396&amp;h=528&amp;q=80"
                          className="lu vo agg all asz bfb"
                          width={400}
                          height={528}
                        />
                        <div className="d j u agg ber bga bjg"></div>
                      </div>
                    </div>
                    <div className="ug wt acs avt cxv">
                      <div className="l">
                        <Image
                          alt=""
                          src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;crop=left&amp;w=400&amp;h=528&amp;q=80"
                          className="lu vo agg all asz bfb"
                          width={400}
                          height={528}
                        />
                        <div className="d j u agg ber bga bjg"></div>
                      </div>
                      <div className="l">
                        <Image
                          alt=""
                          src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;h=528&amp;q=80"
                          className="lu vo agg all asz bfb"
                          width={400}
                          height={528}
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
  );
}
