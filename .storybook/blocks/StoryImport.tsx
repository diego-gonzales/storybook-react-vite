import React from "react";
import { Source } from "@storybook/blocks";

/**
 * A block that displays the story name or title from the of prop
 * - if a story reference is passed, it renders the story name
 * - if a meta reference is passed, it renders the stories' title
 * - if nothing is passed, it defaults to the primary story
 */
export const StoryImport = ({ componentName }) => {
  return (
    <Source
      code={`import { ${componentName} } from 'my-library'`}
      language="jsx"
      dark
    />
  );
};
