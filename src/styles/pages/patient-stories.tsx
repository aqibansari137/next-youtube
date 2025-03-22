import styled from "styled-components";

export const PatientStoriesStyle = styled.div`
  h1{
    text-align: center;
    border-bottom: 2px solid black;
  }

  /* stylelint-disable no-descending-specificity */
  .patient-stories-wrap {
    padding: 0;
    margin-right: auto;
    margin-left: auto;
    position: relative;

    &::before,
    &::after {
      box-sizing: border-box;
    }

    .breadcrumb-wrap {
      top: 16px;
      left: 25px;
      position: absolute;
      z-index: 9;

      a {
        color: purple;
        font-size: 12px;

        .patient-stories-sup {
          padding-right: 3px;
        }
      }

      .breadcrumb-item + .breadcrumb-item::before {
        content: var(--bs-breadcrumb-divider, "|");
      }
    }

    .white-font {
      bottom: 57px;
      color: #fff;
      font-size: 10px;
      position: absolute;
      right: 24px;

      @media (min-width:992px) {
        font-size: 20px;
        line-height: 24px;
        right: 47px;
        bottom: 36px;
      }
    }

    .col-lg-12,
    .col-lg-6,
    .col-lg-4 {
      margin: 0;
      padding: 0;
    }

    sup {
      top: auto;
      font-size: 100%;
    }

    strong {
    }

    h1 {
      text-align: left;
      font-size: 34px;
      line-height: 1.1;
      margin: 0;
      padding: 0;
    }

    img {
      height: auto;
      width: 100%;
    }

    .transcript-wrapper {
      height: 182px;
      overflow-y: scroll;
      padding-right: 32px;
    }

    .patient-stories-row1 {
      margin: 0 -15px;
      position: relative;

      .banner-section {
        padding: 0;

        .banner-section-img {
          position: relative;
        }
      }

      .row {
        @media (min-width:992px) {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .grad {
        img {
          height: 15px;
          margin-top: -10px;

          @media (min-width:992px) {
            margin-top: -14px;
          }
        }
      }

      .section-content {
        position: relative;
        padding: 23px 20px 40px;

        @media (min-width:992px) {
          position: absolute;
          top: 64px;
          left: 40px;
          padding: 0;
        }

        p {
          margin: 20px 0 0;
          font-size: 20px;
          line-height: 1.2;

          @media (min-width:992px) {
            max-width: 356px;
          }
        }
      }
    }

    .right-content {
      padding: 0;
    }

    .patient-stories-video-row {
      width: 389px;
      margin: 0 auto;

      @media (min-width: 481px) and (max-width: 991px) {
        margin: 0 30px;
        width: unset;
        max-width: 100%;
      }

      @media (min-width:992px) {
        width: 90%;
      }

      .video-row {
        display: flex;
        flex-wrap: wrap;
        gap: 40px;

        .video-section {
          margin-bottom: 40px;

          @media (min-width:992px) {
            margin: 0;
            width: 29%;
          }

          @media (min-width: 1430px) {
            width: 307px;

            &:last-child {
              .video-col .img-wrap .video-subhead {
                padding-bottom: 40px;
              }
            }
          }

          .video-col {
            border-radius: 5px;
            overflow: hidden;
            height: 100%;
            background-color: grey;

            .icon-img-wrap {
              position: relative;

              @media (max-width: 481px) {
                max-height: 217px;
              }
            }

            .img-wrap {
              position: relative;

              .video-thumbnail {
                cursor: pointer;
              }

              .video-subhead {
                padding: 50px 20px;

                @media (min-width:992px) {
                  padding: 20px;
                }

                h2 {
                  font-size: 26px;
                  line-height: 28px;
                  margin: 0;
                }

                p {
                  margin: 0;
                  font-size: 19px;
                  line-height: 20px;
                }
              }
            }

            .play-btn {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: auto;
              cursor: pointer;
            }
          }
        }
      }
    }

    .bottom-content {
      text-align: center;
      padding: 6px 5px 35px 15px;

      @media (min-width:992px) {
        padding-top: 0;
        padding-bottom: 20px;
      }

      p {
        font-size: 20px;
        line-height: 24px;
        color: purple;
        margin-bottom: 0;
      }
    }
  }
`;