import { Box, Wrap, WrapItem } from "@chakra-ui/react";

export const CardWrapper = ({ children, spacing = 2 }) => {
  if (!Array.isArray(children)) {
    return <Box>{children}</Box>;
  }

  return (
    <Wrap spacing={spacing}>
      {children.map((child, idx) => (
        <WrapItem key={`${child.key}${idx}`}>{child}</WrapItem>
      ))}
    </Wrap>
  );
};
