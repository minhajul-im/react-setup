export const ErrorMessage = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-6 p-4 lg:p-6 bg-red-100 rounded-lg max-w-xs">
      <h2 className="text-error text-2xl font-bold">Ops</h2>
      <div className="w-36 h-36 relative text-error">
        <svg
          className="absolute w-full h-full text-error"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 130.2 130.2">
          <circle
            className="error-path error-circle"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeMiterlimit="10"
            cx="65.1"
            cy="65.1"
            r="62.1"
          />
          <line
            className="error-path error-line"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="34.4"
            y1="37.9"
            x2="95.8"
            y2="92.3"
          />
          <line
            className="error-path error-line"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="95.8"
            y1="38"
            x2="34.4"
            y2="92.2"
          />
        </svg>
      </div>
      <p className="text-xl text-muted-foreground font-semibold">Error</p>
    </div>
  );
};
