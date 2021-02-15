import { CheckCircleIcon, MinusIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem, useColorMode } from "@chakra-ui/react";

export const TodoList = ({ list }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.800", dark: "gray.100" };
  const sortedList = list.sort((x, y) => {
    return x.done === y.done ? 0 : x.done ? -1 : 1;
  });
  return (
    <List spacing={3}>
      {sortedList.map(({ label, done }) => (
        <ListItem key={label}>
          <ListIcon
            as={done ? CheckCircleIcon : MinusIcon}
            color={bgColor[colorMode]}
          />
          {label}
        </ListItem>
      ))}
    </List>
  );
};
