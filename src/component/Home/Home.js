import React from "react";
import "./Home.css";
import video1 from "./../../video/header_video_josh2.mp4";
import video2 from "./../../video/header_video_studio_avatar2.mp4";
import video3 from "./../../video/header_video_instant_avatar2.mp4";
function Home() {
  return (
    <>
      <div className="hero_padding">
        <div className="vertical-center-div">
          <div className="max-w-740">
            <div className="ver-center_gap-mid">
              <h1 className="heygrn_hero_heading">
                <span className="primary_color_span">AI-powered video</span>{" "}
                creations at scale
              </h1>
              <p className="heygen_hero_para">
                Effortlessly produce studio quality videos with AI-generated
                avatars and voices.
              </p>
              <div>
                <a
                  href="https://app.heygen.com/login"
                  className="button_primary is-head-pc w-inline-block"
                >
                  <div>Get started for free</div>
                </a>
                {/* <a href="" className="button_primary demo_head w-inline-block">
              </a> */}
                <div className="button_subtitle">No credit card needed</div>
              </div>
              <div className="logos_padding">
                <div className="w-embed"></div>
                <div className="logos">
                  <div className="logos_row">
                    <a
                      href="https://www.accenture.com/us-en"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788726e54fd474715a07e_logo01.webp"
                        className="logos_img"
                        alt=""
                      />
                    </a>
                    <a
                      href="https://www.amazon.com/"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678873deec7d7e37bdeea1_logo02.webp"
                        className="logos_img"
                        alt=""
                      />
                    </a>
                    <a
                      href="https://www.aljazeera.com/"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678877e4cf298e0b0fde90_logo11.webp"
                        className="logos_img"
                        alt=""
                      />
                    </a>
                    <a href="https://kw.com/" className="w-inline-block">
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678873c24df339f07d9349_logo04.webp"
                        className="logos_img"
                        alt=""
                      />
                    </a>
                    <a
                      href="https://www.nvidia.com/en-us/"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788737283d01b95257cfe_logo05.webp"
                        className="logos_img"
                        alt=""
                      />
                    </a>
                    <a href="https://pattern.com/" className="w-inline-block">
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567887342c8b40c4b7cc7b7_logo07.webp"
                        className="logos_img"
                        alt=""
                      />
                    </a>
                    <a
                      href="https://www.salesforce.com/in/?ir=1"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788738924578962e7faf2_logo08.webp"
                        className="logos_img"
                        alt=""
                      />
                    </a>
                    <a
                      href="https://www.volvo.com/en/"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678877c7f2428b8355f0dc_logo10.webp"
                        className="logos_img"
                        alt=""
                      />
                    </a>
                    <a
                      href="https://www.amazon.com/"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678873deec7d7e37bdeea1_logo02.webp"
                        className="logos_img"
                        alt=""
                      />
                    </a>
                    <a
                      href="https://www.aljazeera.com/"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678877e4cf298e0b0fde90_logo11.webp"
                        className="logos_img"
                        alt=""
                      />
                    </a>
                    <a href="https://kw.com/" className="w-inline-block">
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678873c24df339f07d9349_logo04.webp"
                        className="logos_img"
                        alt=""
                      />
                    </a>
                    <a
                      href="https://www.nvidia.com/en-us/"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788737283d01b95257cfe_logo05.webp"
                        className="logos_img"
                        alt=""
                      />
                    </a>
                    <a href="https://pattern.com/" className="w-inline-block">
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567887342c8b40c4b7cc7b7_logo07.webp"
                        className="logos_img"
                        alt=""
                      />
                    </a>
                    <a
                      href="https://www.amazon.com/"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678873deec7d7e37bdeea1_logo02.webp"
                        className="logos_img"
                        alt=""
                      />
                    </a>
                    <a
                      href="https://www.aljazeera.com/"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678877e4cf298e0b0fde90_logo11.webp"
                        className="logos_img"
                        alt=""
                      />
                    </a>
                    <a href="https://kw.com/" className="w-inline-block">
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678873c24df339f07d9349_logo04.webp"
                        className="logos_img"
                        alt=""
                      />
                    </a>
                    <a
                      href="https://www.nvidia.com/en-us/"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788737283d01b95257cfe_logo05.webp"
                        className="logos_img"
                        alt=""
                      />
                    </a>
                    <a href="https://pattern.com/" className="w-inline-block">
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567887342c8b40c4b7cc7b7_logo07.webp"
                        className="logos_img"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="hero_video_wrap">
                <div className="video_script_wrap">
                  <div className="script_tabs">
                    <aside
                      id="script_tab1"
                      className="script_tab w-node-_19293a8a-3f7c-c6bd-00d9-749ad883517d-8c4e74c2 is-active"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566cf826fcbe9010b22000e_hero_avatar_1.webp"
                        className="script_tab_img"
                        alt=""
                      />
                    </aside>
                    <div
                      id="script_tab2"
                      className="script_tab w-node-_0163b902-b715-43ac-6bf1-581d47c877bd-8c4e74c2"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566cf82026f22092b01126f_hero_avatar_2.webp"
                        className="script_tab_img"
                        alt=""
                      />
                    </div>
                    <div
                      id="script_tab3"
                      className="script_tab w-node-_45435275-c362-08f3-14a8-d6d6518a8c29-8c4e74c2"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566cf837db334699b6f542b_hero_avatar_3.webp"
                        className="script_tab_img"
                        alt=""
                      />
                    </div>
                  </div>
                  <div id="w-node-acbe90e9-4c8f-0138-a534-db5ffd0856f4-8c4e74c2">
                    <div className="script_heading">Script</div>
                    <div id="hero-script" className="script_para">
                      {/* {" "} */}
                      my name is saurav kumar i am fphagwara my name is saurav
                      kumar i am from jharkhand persuing b. tech in computer
                      science from LPU punjba phagwara
                    </div>
                  </div>
                </div>
                <div id="hero-video-1" className="hero_video_tabcontent">
                  <div className="w-embed">
                    <video
                      className="hero-video"
                      src={video1}
                      muted
                      autoplay
                      loop
                      playsInline
                      controls={false}
                    ></video>
                  </div>
                  <div className="video_purple_blur"></div>
                  <div className="video_btn_wrap is-hero">
                    <div className="video_btn">
                      <div className="btn_play_icon w-embed"></div>
                    </div>
                  </div>
                </div>
                <div
                  id="hero-video-2"
                  className="hero_video_tabcontent is-hidden"
                >
                  <div className="w-embed">
                    <video src={video2} className="hero-video"></video>
                  </div>
                  <div className="video_purple_blur"></div>
                  <div className="video_btn_wrap is-hero">
                    <div className="video_btn">
                      {/* <div className="btn_play_icon w-embed"></div> */}
                      <div>Demo</div>
                    </div>
                  </div>
                </div>
                <div
                  id="hero-video-3"
                  className="hero_video_tabcontent is-hidden"
                >
                  <div className="w-embed">
                    <video src={video3} className="hero-video"></video>
                  </div>
                  <div className="video_purple_blur"></div>
                  <div className="video_btn_wrap is-hero">
                    <div className="video_btn">
                      <div className="btn_play_icon w-embed">
                        <div>Demo</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="demo">Demo</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
