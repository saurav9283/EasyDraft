// Import React
import React from "react";

// Import CSS file
import "./Avatars.css";

// Import video assets
import video3 from "./../../video/usecase_mailchimp2.mp4";
import video4 from "./../../video/usecase_mailchimp2.mp4";
import d1 from "./../../video/d1.png";
import d2 from "./../../video/d2.png";

function Avatars() {
  return (
    <>
      <div className="background_section">
        <img
          src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c4edf1c49ad5ab27cd37b_blur-purple.svg"
          className="blur_bg_purple"
          alt=""
        />
        <div className="section_purple mobile-z-10">
          <div className="gobal_padding">
            <div className="w-layout-blockcontainer heygen_container w-container">
              <div className="create_heading_wrap">
                <h2 className="heygen_section_heading">
                  Create videos for every team
                </h2>
                <p className="create_para">
                  Engage, explain, entertain - AI-Powered video creation for any need.
                </p>
              </div>
              <div className="create_crads_grid">
                <div
                  id="w-node-_9e87974b-df6e-013a-efff-d6e90fb9dbbd-8c4e74c2"
                  className="create_crads_col"
                >
                  <div className="create_video_card">
                    <div className="relative create_video_wrap">
                      <img src={d1} alt="" />
                    </div>
                    <div className="create_card_content is-relative">
                      <div className="create_card_details">
                        <div>
                          <h3 className="create_cred_head">
                            Sales outreach
                            <br />
                            <span className="light-purple_span">
                              that converts
                            </span>
                          </h3>
                          <div className="create_cred_info">
                            Create personalized outreach videos at scale
                          </div>
                        </div>
                        <div className="create_card_btns">
                          <a
                            href="https://app.heygen.com/login"
                            className="button_primary is-create w-inline-block"
                          >
                            <div>Get started</div>
                            <div className="btn_right_arrow_icon w-embed"></div>
                          </a>
                          <div className="button_play">
                            <div className="btn_play_video_icon w-embed"></div>
                          </div>
                        </div>
                      </div>
                      <div className="create_card_mask is-below"></div>
                    </div>
                  </div>
                  <div className="create_video_card">
                    <div className="relative create_video_wrap">
                      <img src={d1} alt="" />
                    </div>
                    <div className="create_card_content is-relative">
                      <div className="create_card_details">
                        <div>
                          <h3 className="create_cred_head">
                            Content marketing
                            <br />
                            <span className="light-purple_span">
                              that engages
                            </span>
                          </h3>
                          <div className="create_cred_info">
                            Supercharge your content calendar with videos
                          </div>
                        </div>
                        <div className="create_card_btns">
                          <a
                            href="https://app.heygen.com/login"
                            className="button_primary is-create w-inline-block"
                          >
                            <div>Get started</div>
                            <div className="btn_right_arrow_icon w-embed"></div>
                          </a>
                          <div className="button_play">
                            <div className="btn_play_video_icon w-embed"></div>
                          </div>
                        </div>
                      </div>
                      <div className="create_card_mask is-below"></div>
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-a4e5afa5-c9c5-7cb7-c74a-6442a809679c-8c4e74c2"
                  className="create_col-2"
                >
                  <p className="create_para-_pc">
                    Engage, explain, entertain. AI-powered video creation for any need.
                  </p>
                  <div
                    id="w-node-f981df19-6f0d-952b-c930-593ac824a8f2-8c4e74c2"
                    className="create_crads_col"
                  >
                    <div className="create_video_card">
                      <div className="relative create_video_wrap">
                        <img src={d2} className="video-preview" alt="" />
                        <div className="create_video_wrap w-embed">
                          <video
                            src={video3}
                            className="muted-video"
                            controls
                            playsInline
                          ></video>
                        </div>
                        <div className="button_play is-create-mobile">
                          <div className="btn_play_video_icon w-embed"></div>
                        </div>
                      </div>
                      <div className="create_card_content is-relative">
                        <div className="create_card_details">
                          <div>
                            <h3 className="create_cred_head">
                              Product marketing
                              <br />
                              <span className="light-purple_span">
                                that resonates
                              </span>
                            </h3>
                            <div className="create_cred_info">
                              Produce engaging & concise product videos
                            </div>
                          </div>
                          <div className="create_card_btns">
                            <a
                              href="https://app.heygen.com/login"
                              className="button_primary is-create w-inline-block"
                            >
                              <div>Get started</div>
                            </a>
                            <div className="button_play">
                              <div className="btn_play_video_icon w-embed"></div>
                            </div>
                          </div>
                        </div>
                        <div className="create_card_mask is-below"></div>
                      </div>
                    </div>
                    <div className="create_video_card">
                      <div className="relative create_video_wrap">
                        <img
                          src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d2deda795ed37cbb36946_Frame%20Extractor.webp"
                          className="video-preview"
                          alt=""
                        />
                        <div className="create_video_wrap w-embed">
                          <video
                            src={video4}
                            className="muted-video"
                            controls
                            playsInline
                          ></video>
                        </div>
                        <div className="button_play is-create-mobile"></div>
                      </div>
                      <div className="create_card_content is-relative">
                        <div className="create_card_details">
                          <div>
                            <h3 className="create_cred_head">
                              Learning & development
                              <br />
                              <span className="light-purple_span">
                                that teaches
                              </span>
                            </h3>
                            <div className="create_cred_info">
                              Create training videos your team will actually watch
                            </div>
                          </div>
                          <div className="create_card_btns">
                            <a href="https://app.heygen.com/login">
                              <div>Get started</div>
                              <div className="btn_right_arrow_icon w-embed"></div>
                            </a>
                            <div className="button_play">
                              <div className="btn_play_video_icon w-embed"></div>
                            </div>
                          </div>
                        </div>
                        <div className="create_card_mask is-below"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section_purple mobile-z-10">
            <div className="gobal_padding"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Avatars;
