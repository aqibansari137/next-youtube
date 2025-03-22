import styled from "styled-components";

export const YoutubePlayerStyle = styled.div`
  .avble-treatment-center-youtube,
  .taking-spravato-youtube {
    aspect-ratio: 16 / 9;
    width: 100% !important;
    height: 100% !important;

    img,
    iframe {
      border-radius: 10px;
    }
  }

  .what-spravato-isi-youtube,
  .patient-story-youtube {
    margin: 15px auto 16px;
    aspect-ratio: 16 / 9;
    width: 100% !important;
    height: 100% !important;

    img,
    iframe {
      border-radius: 10px;
    }
  }

  /* stylelint-disable selector-class-pattern */
  .react-player__preview .react-player__shadow {
    display: none !important;

    .react-player__play-icon {
      display: none;
    }
  }
`;