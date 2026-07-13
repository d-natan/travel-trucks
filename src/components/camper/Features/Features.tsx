"use client";

import {
  FaSnowflake,
  FaBath,
  FaUtensils,
  FaTv,
  FaBroadcastTower,
  FaWater,
  FaFire,
} from "react-icons/fa";

import { MdMicrowave } from "react-icons/md";

import type { CamperDetails } from "@/types";

import VehicleDetails from "../VehicleDetails";

import styles from "./Features.module.css";

interface Props {
  camper: CamperDetails;
}

const amenityIcons = {
  ac: <FaSnowflake />,
  bathroom: <FaBath />,
  kitchen: <FaUtensils />,
  tv: <FaTv />,
  radio: <FaBroadcastTower />,
  refrigerator: <FaSnowflake />,
  microwave: <MdMicrowave />,
  gas: <FaFire />,
  water: <FaWater />,
};

export default function Features({ camper }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.amenities}>
        {camper.amenities.map((item) => (
          <div key={item} className={styles.badge}>
            {camper.amenities.map((item) => {
              const icon = amenityIcons[item];

              return (
                <div key={item} className={styles.badge}>
                  {icon && <span className={styles.icon}>{icon}</span>}

                  <span>{item.replaceAll("_", " ")}</span>
                </div>
              );
            })}

            <span>{item.replaceAll("_", " ")}</span>
          </div>
        ))}
      </div>

      <VehicleDetails camper={camper} />
    </div>
  );
}
