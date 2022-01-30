import React from "react";
import { Profile } from "./Profile/Profile";
import { Places } from "./Places/Places";

export const Content = () => {
  return (
    <main className="main wrapper">
      <Profile />
      <Places />
    </main>
  );
};
