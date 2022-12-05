import { IAssets } from './types';

export const IconMail = (props: IAssets) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-mail"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x={3} y={5} width={18} height={14} rx={2}></rect>
      <polyline points="3 7 12 13 21 7"></polyline>
    </svg>
  );
};
