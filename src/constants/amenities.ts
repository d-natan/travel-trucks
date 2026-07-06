import {
  MdOutlineAcUnit,
  MdOutlineBathroom,
  MdOutlineKitchen,
  MdOutlineLocalGasStation,
  MdOutlineMicrowave,
  MdOutlineRadio,
  MdOutlineTv,
  MdOutlineWaterDrop,
} from "react-icons/md";

import { LuRefrigerator } from "react-icons/lu";

import type { IconType } from "react-icons";

export interface AmenityConfig {
  label: string;
  icon: IconType;
}

export const AMENITIES: Record<string, AmenityConfig> = {
  ac: {
    label: "AC",
    icon: MdOutlineAcUnit,
  },

  bathroom: {
    label: "Bathroom",
    icon: MdOutlineBathroom,
  },

  kitchen: {
    label: "Kitchen",
    icon: MdOutlineKitchen,
  },

  tv: {
    label: "TV",
    icon: MdOutlineTv,
  },

  radio: {
    label: "Radio",
    icon: MdOutlineRadio,
  },

  refrigerator: {
    label: "Refrigerator",
    icon: LuRefrigerator,
  },

  microwave: {
    label: "Microwave",
    icon: MdOutlineMicrowave,
  },

  gas: {
    label: "Gas",
    icon: MdOutlineLocalGasStation,
  },

  water: {
    label: "Water",
    icon: MdOutlineWaterDrop,
  },
};
