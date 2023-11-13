import { Asset, EntrySkeletonType } from "contentful";

import { Document } from "@contentful/rich-text-types";

import { client } from "./contentfulClient";

export interface Project {
  projectName: string;
  shortDescription: string;
  image: Asset;
  slug: any;
  keywords?: string[];
  date?: string;
  content?: Document;
}

export const getProjects = async (): Promise<Project[]> => {
  /* Implementer meg */

  return [];
};

export const getProject = async (
  slug: string
): Promise<Project | undefined> => {
  /* Implementer meg */
  return undefined;
};
