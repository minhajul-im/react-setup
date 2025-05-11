import { navigateBack } from "@/helper";
import { LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";

export const HeaderWithBreadcrumb = ({
  title = null,
  breadcrumbs = null,
  children = null,
  ...props
}) => {
  const attributes = {
    ...props,
    className: `flex justify-between items-center flex-wrap gap-4 ${
      props.className || ""
    }`,
  };

  return (
    <div {...attributes}>
      <div className="text-lg lg:text-xl font-semibold">
        {title && <h2>{title}</h2>}

        {breadcrumbs && (
          <nav aria-label="breadcrumb" className="breadcrumb-wrapper flex mt-2">
            <ol className="inline-flex items-center space-x-1 md:space-x-1.5 rtl:space-x-reverse flex-wrap">
              <li className="inline-flex items-center">
                <Link
                  to="/"
                  className="inline-flex items-center gap-1 text-sm font-normal text-gray-700 hover:text-primary dark:text-gray-400 dark:hover:text-white">
                  <LayoutDashboard size={16} />
                  Dashboard
                </Link>
              </li>

              {breadcrumbs.map((breadcrumb, i) => {
                return (
                  <li key={i} aria-current="page">
                    <div className="flex items-center">
                      <svg
                        className="rtl:rotate-180 w-2.5 h-2.5 text-gray-400 mx-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10">
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 9 4-4-4-4"
                        />
                      </svg>

                      {breadcrumb?.path ? (
                        <Link
                          to={navigateBack(breadcrumb)}
                          className="ms-1 text-sm font-normal text-gray-700 hover:text-primary md:ms-2 dark:text-gray-400 dark:hover:text-white">
                          {breadcrumb?.title}
                        </Link>
                      ) : (
                        <span className="ms-1 text-sm font-normal text-gray-500 md:ms-2 dark:text-gray-300">
                          {breadcrumb?.title}
                        </span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </nav>
        )}
      </div>
      {children && <div className="page-header-action">{children}</div>}
    </div>
  );
};
