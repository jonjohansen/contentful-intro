import { EntrySkeletonType, AssetFile, AssetFields, Asset } from "contentful";

import { client } from "./contentfulClient";

interface Author {
  name: string;
  bio: string;
  image?: Asset;
}

export const getAuthor = async (): Promise<Author | undefined> => {
  /* Implementer meg */

  return undefined;
};
