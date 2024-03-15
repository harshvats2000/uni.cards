import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants";

const Hero = () => {
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    function scrollTrack() {
      if (window.scrollY >= 700) setShow(true);
      else setShow(false);
    }

    window.addEventListener("scroll", scrollTrack);

    return () => {
      window.removeEventListener("scroll", scrollTrack);
    };
  }, []);

  return (
    <div>
      <div className="relative h-[100vh] w-full flex items-center justify-center">
        <div className="flex flex-col md:flex-row-reverse mx-auto max-w-[1280px] w-full justify-center z-10 bg-transparent">
          <img
            src={`${BASE_URL}/images/nx-wave/nx_wave_hero.png`}
            alt="card_asset"
            className="h-auto w-[225px] md:w-[420px] md:h-[420px] max-w-[420px] z-[1] mx-6"
          />
          <div className="z-10 w-full mt-7 md:mt-0 md:my-auto flex flex-col self-end md:self-center px-6">
            <h1 className="font-normal max-w-[300px] md:max-w-[700px] text-3xl md:text-[3.4rem] md:leading-[54px] text-black md:mb-6 ">
              <span>
                <strong>NX Wave.</strong> The next-gen credit card for those who love rewards.
              </span>
            </h1>
            <div className="mt-4 md:mt-0">
              <p className="font-medium text-sm md:text-base md:mb-9">
                1% Cashback
                <svg
                  className="mx-[8px] mb-[2px] inline leading-5"
                  width="12"
                  height="12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m6 0 1.273 4.727L12 6 7.273 7.273 6 12 4.727 7.273 0 6l4.727-1.273L6 0Z"
                    fill="#000"
                    style={{ mixBlendMode: "darken" }}
                  ></path>
                </svg>
                5x Rewards
                <svg
                  className="mx-[8px] mb-[2px] inline leading-5"
                  width="12"
                  height="12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m6 0 1.273 4.727L12 6 7.273 7.273 6 12 4.727 7.273 0 6l4.727-1.273L6 0Z"
                    fill="#000"
                    style={{ mixBlendMode: "darken" }}
                  ></path>
                </svg>
                Zero Forex Markup
              </p>
            </div>
            <div className="hidden md:block">
              <div className="flex justify-between items-center max-w-[94vw]">
                <div className="flex flex-col">
                  <form>
                    <div className="flex bg-black p-1 pl-2 rounded-xl justify-between">
                      <div className="flex items-center">
                        <input
                          className="bg-black border-0 outline-none text-white p-1 placeholder-[#7E8587] w-44"
                          placeholder="Enter Phone Number"
                          value={phone}
                          onChange={(e) => {
                            const input = e.target.value;
                            const regex = /^[0-9]*$/; // Regex to match only numbers
                            if (regex.test(input) && input.length <= 10) {
                              setPhone(input);
                            }
                          }}
                        />
                        {phone && (
                          <span className="w-6">
                            <button onClick={() => setPhone("")}>
                              <svg width="14" height="15" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M1.498.498.356 1.72l5.41 5.786L.41 13.233l1.17 1.25 5.355-5.728 5.41 5.786 1.142-1.22-5.41-5.787 5.492-5.873-1.17-1.25-5.491 5.873L1.498.498Z"
                                  fill="#fff"
                                ></path>
                              </svg>
                            </button>
                          </span>
                        )}
                      </div>
                      <button
                        disabled={phone !== "" && phone.length !== 10}
                        type="submit"
                        className="text-center text-sm leading-7 justify-between pt-2 ml-2 bg-[#FDEF78] rounded-xl z-10 py-2 px-4 disabled:opacity-80 disabled:cursor-not-allowed"
                      >
                        <span>Apply Now</span>
                      </button>
                    </div>
                  </form>
                  <div className="consent flex items-center py-4 px-2 max-w-xs">
                    <input type="checkbox" checked id="consent-msg" />
                    <label
                      for="consent-msg"
                      className="consent relative text-white md:text-black text-[10px] leading-3 cursor-pointer"
                    >
                      You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your
                      application.
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <video autoPlay muted loop playsInline className="hero-video">
          <source src={`${BASE_URL}/videos/nxt_wave_bg.mp4`} type="video/mp4" />
        </video>
      </div>

      <div
        className={`w-full bottom-0 z-40 fixed md:hidden py-8 ${show ? "show-apply-now" : "hide-apply-now"}`}
        style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 110%)" }}
      >
        <div className="px-6 mx-auto md:mx-0 md:max-w-sm font-medium">
          <div className="flex flex-col transition-all ease-in">
            <div className="phone-input-container">
              <div className="flex items-center">
                <input
                  id="phone"
                  className="phone-input w-full text-lg border-0 outline-none rounded-tr-xl rounded-tl-xl py-3"
                  placeholder="Enter your phone number"
                  autoComplete={false}
                  value={phone}
                  onChange={(e) => {
                    const input = e.target.value;
                    const regex = /^[0-9]*$/; // Regex to match only numbers
                    if (regex.test(input) && input.length <= 10) {
                      setPhone(input);
                    }
                  }}
                />
                {phone && (
                  <span className="w-6">
                    <button onClick={() => setPhone("")}>
                      <svg width="14" height="15" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1.498.498.356 1.72l5.41 5.786L.41 13.233l1.17 1.25 5.355-5.728 5.41 5.786 1.142-1.22-5.41-5.787 5.492-5.873-1.17-1.25-5.491 5.873L1.498.498Z"
                          fill="#fff"
                        ></path>
                      </svg>
                    </button>
                  </span>
                )}
              </div>
            </div>
            <button
              disabled={phone !== "" && phone.length !== 10}
              onClick={() => setShow(!show)}
              className="p-4 rounded-lg z-10 flex justify-between items-center bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]"
            >
              <span>Apply now</span>
              <img
                src={`${BASE_URL}/images/right_arrow.svg`}
                alt="right_arrow"
                width="21px"
                className="inline ml-3 css-0"
              />
            </button>
            <div className="consent flex items-center py-4 px-2 max-w-xs">
              <input type="checkbox" id="consent-msg" checked />
              <label
                htmlFor="consent-msg"
                className="consent relative items-center text-white md:text-black text-[10px] leading-3 cursor-pointer"
              >
                You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your
                application.
              </label>
            </div>
          </div>
        </div>
      </div>

      <div style={{ opacity: show ? 1 : 0, transition: "0.5s", position: "relative", zIndex: 100 }}>
        <section className="hidden sm:block fixed bottom-0 w-screen bg-uni-grey py-5 z-10">
          <div className="mx-auto max-w-7xl px-12 w-full flex justify-between">
            <div className="flex justify-between items-center block w-full">
              <div className="flex w-full flex-row justify-between items-center">
                <form>
                  <div className="flex bg-black p-1 pl-2 rounded-xl justify-between">
                    <div className="flex items-center">
                      <input
                        className="min-w-lg bg-black border-0 outline-none text-white p-1 placeholder-[#7E8587] w-44"
                        placeholder="Enter Phone Number"
                        value={phone}
                        onChange={(e) => {
                          const input = e.target.value;
                          const regex = /^[0-9]*$/; // Regex to match only numbers
                          if (regex.test(input) && input.length <= 10) {
                            setPhone(input);
                          }
                        }}
                      />
                      <span className="w-6">
                        {phone && (
                          <button onClick={() => setPhone("")}>
                            <svg width="14" height="15" fill="white" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M1.498.498.356 1.72l5.41 5.786L.41 13.233l1.17 1.25 5.355-5.728 5.41 5.786 1.142-1.22-5.41-5.787 5.492-5.873-1.17-1.25-5.491 5.873L1.498.498Z"
                                fill="#fff"
                              ></path>
                            </svg>
                          </button>
                        )}
                      </span>
                    </div>
                    <button
                      disabled={phone !== "" && phone.length !== 10}
                      type="submit"
                      className="text-center text-sm leading-7 justify-between pt-2 ml-2 bg-[#FDEF78] rounded-xl z-10 py-2 px-4 disabled:opacity-80 disabled:cursor-not-allowed"
                    >
                      <span>Apply Now</span>
                    </button>
                  </div>
                </form>
                <div className="consent flex items-center py-4 px-2 max-w-xs">
                  <input type="checkbox" id="consent-msg" checked />
                  <label
                    for="consent-msg"
                    className="consent flex items-center relative text-white md:text-black text-[10px] leading-3 cursor-pointer"
                  >
                    You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your
                    application.
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
