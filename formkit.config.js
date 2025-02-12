// formkit.config.ts
import { generateClasses } from "@formkit/themes";
import defaultTheme from "./formkit.theme.js";
import customInputs from "./components/formkit";
import { genesisIcons } from "@formkit/icons";
import {
  createAutoHeightTextareaPlugin,
  createMultiStepPlugin,
} from "@formkit/addons";
import "@formkit/addons/css/multistep";

const legends = ["checkbox_multi", "radio_multi", "repeater", "transferlist"];

function addAsteriskPlugin(node) {
  if (
    ["button", "submit", "hidden", "group", "list", "meta"].includes(
      node.props.type
    )
  )
    return;

  node.on("created", () => {
    const legendOrLabel = legends.includes(
      `${node.props.type}${node.props.options ? "_multi" : ""}`
    )
      ? "legend"
      : "label";

    if (node.props.definition.schemaMemoKey) {
      node.props.definition.schemaMemoKey += `${
        node.props.options ? "_multi" : ""
      }_add_asterisk`;
    }

    const schemaFn = node.props.definition.schema;
    node.props.definition.schema = (sectionsSchema = {}) => {
      sectionsSchema[legendOrLabel] = {
        children: [
          "$label",
          {
            $el: "span",
            if: "$state.required",
            attrs: {
              class: "$classes.asterisk",
            },
            children: ["*"],
          },
        ],
      };

      return schemaFn(sectionsSchema);
    };
  });
}

export default {
  plugins: [
    addAsteriskPlugin,
    createAutoHeightTextareaPlugin(),
    createMultiStepPlugin(),
  ],
  icons: {
    ...genesisIcons,
  },
  config: {
    classes: generateClasses(defaultTheme),
  },
  inputs: customInputs,
};
