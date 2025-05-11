import { CardWrapper } from "./card-wrapper";

export const SuccessMessage = () => {
  return (
    <div className="p-4 lg:p-6 rounded-lg bg-green-100 max-w-xs flex justify-center items-center h-full flex-col gap-6">
      <h2 className="text-success text-2xl font-bold">Well Done</h2>
      <div className="w-32 h-32 relative text-success">
        <svg
          className="w-full h-full absolute"
          viewBox="0 0 26 26"
          xmlns="http://www.w3.org/2000/svg">
          <g
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path
              className="circle"
              d="M13 1C6.372583 1 1 6.372583 1 13s5.372583 12 12 12 12-5.372583 12-12S19.627417 1 13 1z"
            />
            <path className="tick" d="M6.5 13.5L10 17 l8.808621-8.308621" />
          </g>
        </svg>
      </div>
      <p className="text-xl text-muted-foreground font-semibold">Successfull</p>
    </div>
  );
};
