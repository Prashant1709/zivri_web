import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#f1f1f1",
          "#E1AEFF",
          
          "#CDC2AE",
          "#9BABB8",
          "#967E76",
          "#F3BCC8",
          "#116D6E",
          "#5C8984",
          "#526D82",
          "#025464",
          "#D2E9E9",
          "#B3C890",
          "#C1D0B5",
          "#A2A378",
          "#A4D0A4",
          "#159895",
          "#7AA874",
          "#BBD6B8",
        ]}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
