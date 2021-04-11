import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Checkbox() {
  const [checkboxActive, setcheckboxActive] = useState(false);
  return (
    <div class="form-check">
      <div>
        <input
          class="form-check-input"
          type="checkbox"
          id="flexCheckDefault"
          onclick={() => setcheckboxActive(!checkboxActive)}
        ></input>
        <label class="form-check-label" for="flexCheckDefault">
        I understand that by adding my profile to the Work Ready Kāpiti portal I am agreeing for my information to be shared with both Youth and Employers in the Kāpiti region.
        </label>
      </div>
    </div>
  );
}
