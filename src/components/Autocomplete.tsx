import React from "react";
import { getCodeSandboxHost } from "@codesandbox/utils";

import { debounce } from "lodash";
import classnames from "classnames";
import axios from "axios";

const apiPort = 3000;
const ITEMS_API_URL = `https://${getCodeSandboxHost(apiPort)}/api/countries`;
const DEBOUNCE_DELAY = 500;

console.log({ ITEMS_API_URL });

const Autocomplete: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="control">
        <input />
      </div>
      <div className="list"></div>
    </div>
  );
};

export default Autocomplete;
