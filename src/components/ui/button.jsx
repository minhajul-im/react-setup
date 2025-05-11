import * as React from "react";
import { cva } from "class-variance-authority";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        iconBig: "h-14 w-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

/**
 * @typedef {Object} ButtonProps
 * @property {React.ReactNode} children
 * @property {boolean} [isLoading]
 * @property {boolean} [iconBtn]
 * @property {string} [tooltipText]
 * @property {boolean} [disabled]
 * @property {React.ComponentType} [icon]
 * @property {string} [className]
 * @property {string} [href]
 */
/**
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<ButtonProps> & React.RefAttributes<HTMLElement>>}
 */
const Button = React.forwardRef(
  (
    {
      children,
      isLoading = false,
      iconBtn = false,
      tooltipText = "",
      disabled = false,
      icon: Icon,
      className = "",
      href = "",
      ...props
    },
    ref
  ) => {
    const buttonClass = `btn ${className || ""}`;

    if (href) {
      return iconBtn ? (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link to={href} {...props} className={buttonClass} ref={ref}>
                {Icon && <Icon className="inline-block h-4 w-4" />}
                <span className="sr-only">{tooltipText}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{tooltipText}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        <Link to={href} {...props} className={buttonClass} ref={ref}>
          {isLoading ? (
            <div className="flex items-center gap-2">
              <FaSpinner className="inline-block animate-spin" />
              {children}
            </div>
          ) : (
            children
          )}
        </Link>
      );
    }

    return iconBtn ? (
      tooltipText ? (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button {...props} className={buttonClass} ref={ref}>
                {Icon && <Icon className="inline-block h-4 w-4" />}
                <span className="sr-only">{tooltipText}</span>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{tooltipText}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        <button {...props} className={buttonClass} ref={ref}>
          {Icon && <Icon className="inline-block" />}
        </button>
      )
    ) : (
      <button
        {...props}
        className={`${buttonClass} ${disabled && "cursor-not-allowed"}`}
        disabled={isLoading || disabled}
        ref={ref}>
        {isLoading ? (
          <div className="flex items-center gap-2">
            <FaSpinner className="inline-block animate-spin" />
            {children}
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
