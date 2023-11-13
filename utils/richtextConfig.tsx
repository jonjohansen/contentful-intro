import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { Options } from "@contentful/rich-text-react-renderer";

export const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b>{text}</b>,
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="text-3xl text-blue-900/[0.8]">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="text-2xl text-blue-900/[0.8]">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="text-xl text-blue-900/[0.8]">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className="text-lg text-blue-900/[0.8]">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className="text-md text-blue-900/[0.8]">{children}</h5>
    ),

    [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4">{children}</p>,
  },
};
