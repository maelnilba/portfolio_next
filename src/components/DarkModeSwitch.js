import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode, IconButton } from "@chakra-ui/react";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      variant="outline"
      colorScheme="teal"
      aria-label="Switch theme"
      onClick={toggleColorMode}
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
    />
  );
};
