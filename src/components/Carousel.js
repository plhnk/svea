/** @jsx jsx */
import { useState, useEffect, useRef } from 'react';
import { jsx, Flex, Box } from 'theme-ui';

const Carousel = ({ children }) => {
  const slide = useRef();

  const slidesWrapper = useRef();

  const [current, setCurrent] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const delay = 2000;
  const slidesCount = children.length;
  const next = (current + 1) % slidesCount;

  useEffect(() => {
    let timeLeft = 0;
    slidesWrapper.current.style.transform =
      'translateY(calc(-' +
      `${slide.current.clientHeight / 2}` +
      'px - ' +
      `${(current * 100) / slidesCount}` +
      '%))';
    if (isActive) {
      const timer = setInterval(() => {
        if (timeLeft >= 1) {
          timeLeft = 0;
          clearInterval(timer);
          setCurrent(next);
        }

        timeLeft += 0.01;
      }, delay / 100);
      return () => clearInterval(timer);
    }
  }, [isActive, current]);

  return (
    <Box sx={{ overflowX: 'hidden', height: '100%', width: '100%' }}>
      <Flex
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          height: '100%',
          width: '100%',
        }}
      >
        <Flex
          sx={{
            alignSelf: 'flex-start',
            flexDirection: 'column',
            position: 'relative',
            height: '100%',
            width: '100%',
          }}
          id="slidesWrapper"
          ref={slidesWrapper}
        >
          {children.map((children, i) => (
            <div
              onClick={
                current === i && isActive
                  ? () => setIsActive(false)
                  : () => {
                      current === i ? setCurrent(next) : setCurrent(i);
                      setIsActive(true);
                    }
              }
              key={i}
              ref={current === i ? slide : null}
              sx={{
                transition: 'transform 250ms ease-in-out',
                height: '100%',
                width: '100%',
              }}
            >
              {children}
            </div>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Carousel;
