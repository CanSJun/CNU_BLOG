export enum TAG {
  JAVA = 'JAVA',
  REACT = 'REACT',
  SPRINGBOOT = 'SPRINGBOOT',
  DB = 'DB',
}

export interface IPost {
  id: string;
  title: string;
  contents: string;
  tag: TAG;
}

export type IResponsePostList = IPost[];
