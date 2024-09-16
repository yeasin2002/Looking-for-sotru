import { LayoutGrid, FlipVertical2, Brush, Satellite, Cone, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type groupName = "getting_started" | "collectionList" | "Element Hierarchy" | "styling_basics" | "image_field";

export type itemList = {
  name: string;
  time: string;
  groupName: groupName;
};

type menuList = {
  // Icon: React.ReactNode;
  Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  name: string;
  groupName: groupName;
};

export const filterMenu: menuList[] = [
  {
    Icon: Satellite,
    name: "Getting Started",
    groupName: "getting_started",
  },
  {
    Icon: FlipVertical2,
    name: "Collection List",
    groupName: "collectionList",
  },
  {
    Icon: LayoutGrid,
    name: "Element Hierarchy",
    groupName: "Element Hierarchy",
  },
  {
    Icon: Brush,
    name: "Styling Basics",
    groupName: "styling_basics",
  },
  {
    Icon: Cone,
    name: "Image Field",
    groupName: "image_field",
  },
];

export const filterItems: itemList[] = [
  {
    name: "Using index pages",
    time: "5 min",
    groupName: "getting_started",
  },

  {
    name: "Working with content",
    time: "4 min",
    groupName: "getting_started",
  },

  {
    name: "Using cover pages",
    time: "4 min",
    groupName: "getting_started",
  },
  {
    name: "Intro to the style model",
    time: "4 min",
    groupName: "getting_started",
  },

  {
    name: "Working with content",
    time: "4 min",
    groupName: "collectionList",
  },

  {
    name: "Exploring collections",
    time: "4 min",
    groupName: "collectionList",
  },

  {
    name: "Understand hierarchy",
    time: "4 min",
    groupName: "collectionList",
  },
  {
    name: "Customisations",
    time: "4 min",
    groupName: "collectionList",
  },

  {
    name: "Using cover pages",
    time: "4 min",
    groupName: "Element Hierarchy",
  },
  {
    name: "Image galleries",
    time: "4 min",
    groupName: "Element Hierarchy",
  },
  {
    name: "Intro to the style model",
    time: "4 min",
    groupName: "styling_basics",
  },

  {
    name: "Customisations",
    time: "4 min",
    groupName: "styling_basics",
  },

  {
    name: "Exploring collections",
    time: "4 min",
    groupName: "image_field",
  },

  {
    name: "Image galleries",
    time: "4 min",
    groupName: "image_field",
  },
  {
    name: "Sorting images",
    time: "4 min",
    groupName: "image_field",
  },
  {
    name: "Filters",
    time: "4 min",
    groupName: "image_field",
  },
];
