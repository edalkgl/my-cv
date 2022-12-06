import { IAssets } from './types';

export const IconExternalLink = (props: IAssets) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      stroke-width={1}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path>
      <line x1={10} y1={14} x2={20} y2={4}></line>
      <polyline points="15 4 20 4 20 9"></polyline>
    </svg>
  );
};
