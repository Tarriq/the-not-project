import styled from 'styled-components';

export const BoroughsSectionContainer = styled.section<{
  $activeIndex: number;
}>`
  height: 100vh;
  position: relative;
  color: white;
  text-shadow: 0 0 20px hsl(0, 0%, 0%);
  h1 {
    font-size: clamp(3rem, 5rem, 4vw);
    position: absolute;
    font-weight: 500;
    top: 10%;
    left: 10%;
  }

  .description {
    position: absolute;
    top: 30%;
    left: 30%;
    width: 30%;
    text-align: center;

    h2 {
      font-size: clamp(3rem, 5rem, 3.5vw);
      font-weight: 500;
      margin-bottom: 20px;
    }

    p {
      font-size: clamp(1rem, 2rem, 2vw);
    }

    ${({ $activeIndex }) =>
      $activeIndex !== -1 &&
      `
        animation: fadepulsateslow 1s;
      `}
  }
`;

export const Background = styled.div<{ $activeIndex: number; $url: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ $url }) =>
      `url('/media/boroughsCards/${$url}.jpg') no-repeat center center/cover`};
    filter: grayscale(50%);
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(var(--bg-color), transparent);
  }
  ${({ $activeIndex }) =>
    $activeIndex !== -1 &&
    `
      animation: fadepulsatefast .66s;
    `}
`;

export const SVGContainer = styled.div<{ $activeIndex: number }>`
  width: 30%;
  max-width: 60vh;
  position: absolute;
  right: 5%;
  bottom: 10%;
  overflow: visible;
  
  svg {
    height: auto;
    width: 100%;
    z-index: 3;
    path {
      fill: hsl(36, 47%, 95%, 0.7);
      transition: 0.2s;
      cursor: pointer;
    }

    ${({ $activeIndex }) =>
      $activeIndex !== -1 &&
      `
        path {
          fill: hsl(36, 47%, 95%, 0.4);
        }
        
        path:nth-child(${$activeIndex + 2}) {
          opacity: 1;
          filter: none;
          fill: hsl(36, 47%, 95%, 0.9);
          stroke: hsl(0, 0%, 0%, 0.5);
          filter: drop-shadow(0 0 20px hsl(36, 47%, 0%, 0.5));
        }
      `}
  }
`;
