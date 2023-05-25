import "@formkit/themes/genesis";
import "@formkit/pro/genesis";
import {
  close,
  down,
  fileDoc,
  check,
  circle,
  spinner,
  star,
  trash,
  add,
  arrowUp,
  arrowDown,
} from "@formkit/icons";
import { DefaultConfigOptions } from "@formkit/vue";
import { createProPlugin, inputs } from "@formkit/pro";

const pro = createProPlugin("fk-7f63b24c62", inputs);
const config: DefaultConfigOptions = {
  icons: {
    close,
    down,
    fileDoc,
    check,
    circle,
    spinner,
    star,
    trash,
    add,
    arrowUp,
    arrowDown,
    checkboxDecorator: check,
    select: down,
  },
  plugins: [pro],
};

export default config;
