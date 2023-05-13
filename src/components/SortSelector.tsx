import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by Relevance
      </MenuButton>

      <MenuList>
        <MenuItem>Average rating</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Releance date</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
