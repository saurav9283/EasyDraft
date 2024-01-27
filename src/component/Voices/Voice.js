import React from "react";
import './Voice.css'

function Voice() {
  return (
    <div className="voices_padding">
      <div className="w-layout-block container heygen_container w-container">
        <div className="voices_wrap">
          <div className="voices_content">
            <div className="section_head_padding_2">
              <div className="section_head_padding voice">
                <h2 className="heygen_section_heading is-black">AI voices</h2>
                <p className="heygen_para1">
                  Select a premium voice across any style or language. Benefit
                  from our AI-Driven text reader, infusing human-like intonation
                  and inflections with exceptional accuracy.
                </p>
              </div>
              <div className="_2_btns_or_wrap voices">
                <a
                  href="https://app.heygen.com/login"
                  className="button_primary w-inline-block"
                >
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6560d706514c51af627b9c97_how-btn-img.webp"
                    className="image-82"
                    alt=""
                  />
                  <div>Get started for free</div>
                  <div className="btn_right_arrow_icon w-embed"></div>
                </a>
              </div>
            </div>
          </div>
          <div className="voices_play_btns_wrapper">
            <div className="voices_slider shadows_2 voice-fixed1">
              <div className="voice_slider_heading_div">
                <h3 className="voices_slider_heading">
                  <span className="purple-span">300+</span>Voices
                </h3>
              </div>
              <div
                id="voice-slider"
                className="splide w-node-e69c063c-7c9d-5e98-a231-9ba72e2b5b53-8c4e74c2 splide--slide splide--ltr splide--draggable is-active is-overflow is-initialized"
              >
                <div className="splide__track splide__track--slide splide__track--ltr splide__track--draggable">
                <div className="splide__list voices_slider_content" style={{ transform: 'translateX(0px)' }}>
                    <div
                      className="splide__slide button_ai_voice is-active is-visible"
                      id="voice-slider-slide01"
                    >
                      <div className="audio_voice w-embed">
                        <audio
                          src="https://resource.heygencdn.com/homepage/LeviFriendly_out.mp3"
                          preload="none"
                        ></audio>
                      </div>
                      <div className="btn_play_voice_icon w-embed"></div>
                      <div className="btn_playing_voice_icon is-hidden w-embed"></div>
                      <div>
                        <div className="ai_voice_name">Levi</div>
                        <div className="ai_voice_chracter">Friendly</div>
                      </div>
                    </div>
                    <div
                      className="splide__slide button_ai_voice is-visible"
                      id="voice-slider-slide02"
                    >
                      <div className="audio_voice w-embed">
                        <audio
                          src="https://resource.heygencdn.com/homepage/CharlesNatural_out.mp3"
                          preload="none"
                        ></audio>
                      </div>
                      <div className="btn_play_voice_icon w-embed"></div>
                      <div className="btn_playing_voice_icon is-hidden w-embed"></div>
                      <div>
                        <div className="ai_voice_name">Charles</div>
                        <div className="ai_voice_chracter">Natural</div>
                      </div>
                    </div>
                    <div
                      className="splide__slide button_ai_voice is-visible"
                      id="voice-slider-slide03"
                    >
                      <div className="audio_voice w-embed">
                        <audio
                          src="https://resource.heygencdn.com/homepage/EthanProfessional_out.mp3"
                          preload="none"
                        ></audio>
                      </div>
                      <div className="btn_play_voice_icon w-embed"></div>
                      <div className="btn_playing_voice_icon is-hidden w-embed"></div>
                      <div>
                        <div className="ai_voice_name">Ethan</div>
                        <div className="ai_voice_chracter">Professional</div>
                      </div>
                    </div>
                    <div
                      className="splide__slide button_ai_voice is-visible"
                      id="voice-slider-slide03"
                    >
                      <div className="audio_voice w-embed">
                        <audio
                          src="https://resource.heygencdn.com/homepage/EthanProfessional_out.mp3"
                          preload="none"
                        ></audio>
                      </div>
                      <div className="btn_play_voice_icon w-embed"></div>
                      <div className="btn_playing_voice_icon is-hidden w-embed"></div>
                      <div>
                        <div className="ai_voice_name">Ethan</div>
                        <div className="ai_voice_chracter">Professional</div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="voices_slider shadows_2 voice-fixed2">
              <div className="voice_slider_heading_div">
                <h3 className="voices_slider_heading">
                  <span className="purple-span">40+</span>Languages
                </h3>
                <div className="slider_control_wrap">
                  <div className="languages_prev_btn"></div>
                  <div className="languages_next_btn"></div>
                </div>
              </div>
              <div
                id="language-slider"
                className="splide splide--slide splide--ltr splide--draggable is-active is-overflow is-initialized"
              >
                <div className="splide__track splide__track--slide splide__track--ltr splide__track--draggable">
                  <div className="splide__list voices_slider_content">
                    <div
                      className="splide__slide button_ai_voice_language is-active is-visible"
                      id="language-slider-slide01"
                    >
                      <div className="audio_voice w-embed">
                        <audio
                          src="https://resource.heygencdn.com/homepage/Japanese_out.mp3"
                          preload="none"
                        ></audio>
                      </div>
                      <div className="btn_play_voice_icon w-embed"></div>
                      <div className="btn_playing_voice_icon is-hidden w-embed"></div>
                      <div>
                        <div className="ai_voice_name">🇯🇵 Japanese</div>
                      </div>
                    </div>
                    <div
                      className="splide__slide button_ai_voice_language is-visible is-next"
                      id="language-slider-slide02"
                    >
                      <div className="audio_voice w-embed">
                        <audio
                          src="https://resource.heygencdn.com/homepage/Spanish_out.mp3"
                          preload="none"
                        ></audio>
                      </div>
                      <div className="btn_play_voice_icon w-embed"></div>
                      <div className="btn_playing_voice_icon is-hidden w-embed"></div>
                      <div>
                        <div className="ai_voice_name">🇪🇸 Spanish</div>
                      </div>
                    </div>
                    <div
                      className="splide__slide button_ai_voice_language is-visible"
                      id="language-slider-slide03"
                    >
                      <div className="audio_voice w-embed">
                        <audio
                          src="https://resource.heygencdn.com/homepage/German_out.mp3"
                          preload="none"
                        ></audio>
                      </div>
                      <div className="btn_play_voice_icon w-embed"></div>
                      <div className="btn_playing_voice_icon is-hidden w-embed"></div>
                      <div>
                        <div className="ai_voice_name">🇩🇪 German</div>
                      </div>
                    </div>
                    <div
                      className="splide__slide button_ai_voice_language"
                      id="language-slider-slide04"
                    >
                      <div className="audio_voice w-embed">
                        <audio
                          src="https://resource.heygencdn.com/homepage/German_out.mp3"
                          preload="none"
                        ></audio>
                      </div>
                      <div className="btn_play_voice_icon w-embed"></div>
                      <div className="btn_playing_voice_icon is-hidden w-embed"></div>
                      <div>
                        <div className="ai_voice_name">🇫🇷 French</div>
                      </div>
                    </div>
                    <div
                      className="splide__slide button_ai_voice_language"
                      id="language-slider-slide05"
                    >
                      <div className="audio_voice w-embed">
                        <audio
                          src="https://resource.heygencdn.com/homepage/German_out.mp3"
                          preload="none"
                        ></audio>
                      </div>
                      <div className="btn_play_voice_icon w-embed"></div>
                      <div className="btn_playing_voice_icon is-hidden w-embed"></div>
                      <div>
                        <div className="ai_voice_name">🇰🇷 Korean</div>
                      </div>
                    </div>
                    <div
                      className="splide__slide button_ai_voice_language"
                      id="language-slider-slide05"
                    >
                      <div className="audio_voice w-embed">
                        <audio
                          src="https://resource.heygencdn.com/homepage/German_out.mp3"
                          preload="none"
                        ></audio>
                      </div>
                      <div className="btn_play_voice_icon w-embed"></div>
                      <div className="btn_playing_voice_icon is-hidden w-embed"></div>
                      <div>
                        <div className="ai_voice_name">🇮🇹 Italian</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="caf9285d-5c9b-7374-d024-82fe7a9e7cf8">
          <div className="ai_voice_script_grid">
            <div className="ai_voice_script_script">
              <div>
                <div className="text-block-90">Script</div>
                <div className="ai_voices_script">
                Hey there! Welcome to HeyGen! This is what we sound like in another language.
                </div>
              </div>
              <a href="" className="button-10 w-button">
                Generate voice
              </a>
            </div>
            <div className="voices_videos_wrapper">
              <div
                className="voice_script_card _4"
                style={{
                  willChange: "transform",
                  transform:
                    "translate3d(10.0298px, -88.3873px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="voices_btn_wrap_voice">
                  <div></div>
                </div>
                <div className="ai_voice_video_wrap w-embed">
                  <video
                    src="https://resource.heygencdn.com/homepage/aivoices3_2.mp4"
                    className="ai_voice_video"
                  ></video>
                </div>
                <img
                  src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d369e812df05307549258_avatar-voice-preview.webp"
                  className="video-preview"
                  alt=""
                />
              </div>
              <div
                className="voice_script_card _1"
                style={{
                  willChange: "transform",
                  transform:
                    "translate3d(-98.417px, -10.0298px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="voices_btn_wrap_voice">
                  <div></div>
                </div>
                <div className="ai_voice_video_wrap w-embed">
                  <video
                    src="https://resource.heygencdn.com/homepage/aivoices1_2.mp4"
                    className="ai_voice_video"
                  ></video>
                </div>
                <img
                  src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d3699a4e346961e52a711_avatar-voice-preview-1.webp"
                  className="video-preview"
                  alt=""
                />
              </div>
              <div
                className="voice_script_card _3"
                style={{
                  willChange: "transform",
                  transform:
                    "translate3d(98.417px, 10.0298px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="voices_btn_wrap_voice">
                  <div></div>
                </div>
                <div className="ai_voice_video_wrap w-embed">
                  <video
                    src="https://resource.heygencdn.com/homepage/aivoices4_2.mp4"
                    className="ai_voice_video"
                  ></video>
                </div>
                <img
                  src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d369b4c3117db5e3c03bd_avatar-voice-preview-2.webp"
                  className="video-preview"
                  alt=""
                />
              </div>
              <div
                className="voice_script_card _2"
                style={{
                  willChange: "transform",
                  transform:
                    "translate3d(-10.0298px, 88.3873px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="voices_btn_wrap_voice">
                  <div></div>
                </div>
                <div className="ai_voice_video_wrap w-embed">
                  <video
                    src="https://resource.heygencdn.com/homepage/aivoices3_2.mp4"
                    className="ai_voice_video"
                  ></video>
                </div>
                <img
                  src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d369cb149e5acd842f67b_avatar-voice-preview-3.webp"
                  className="video-preview"
                  alt=""
                />
              </div>
              {/* Add more video cards */}
            </div>
          </div>
          <div className="ai_voice_script_bg"></div>
        </div>
      </div>
    </div>
  );
}

export default Voice;
