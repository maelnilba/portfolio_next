import { Box, Image, Tooltip } from "@chakra-ui/react";
import { CardWrapper } from "./CardWrapper";

export const Rounded = ({ src, boxSize = 300, alt }) => {
  return (
    <Image boxSize={`${boxSize}px`} borderRadius="full" src={src} alt={alt} />
  );
};

export const Tooltiped = ({ src, boxSize = 40, placement = "bottom" }) => {
  const alt = src.split("/")[2].split(".")[0];
  return (
    <Tooltip placement={placement} label={alt}>
      <Box>
        <Image boxSize={`${boxSize}px`} borderRadius="sm" src={src} alt={alt} />
      </Box>
    </Tooltip>
  );
};

export const LogosList = ({ list }) => {
  return (
    <CardWrapper spacing={5}>
      {list.map((item, idx) => (
        <Tooltiped
          key={`${item}${idx}`}
          src={`./logos/${item}.png`}
        ></Tooltiped>
      ))}
    </CardWrapper>
  );
};
