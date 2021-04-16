import styled from '@emotion/styled';

export const Bar = styled.div`
  background-color: ${({theme}) => theme.colors.light};
  width: 100%;
  height: 7px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    display: block;
    height: 100%;
    width: ${({percent}) => percent}%;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: inherit;
    animation: fill 0.3s backwards;
    background-color: ${({percent}) =>
      percent < 50 ? '#fb7171' : percent >= 75 ? '#5bc686' : 'gold'};
  }

  @keyframes fill {
    0% {
      width: 0;
    }
  }
`;
