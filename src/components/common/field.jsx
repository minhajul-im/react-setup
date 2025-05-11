import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

export const Field = ({
  children,
  label,
  htmlFor,
  error,
  inputNote,
  required,
  uploadText,
  ...props
}) => {
  const id = htmlFor || getChildId(children);

  const isCheckbox = React.Children.only(children).props.type === "checkbox";
  const isRadio = React.Children.only(children).props.type === "radio";
  const isFileInput = React.Children.only(children).props.type === "file";

  return (
    <div className={`form-inner ${isRadio ? "radio-wrapper" : ""}`}>
      {isCheckbox || isRadio ? (
        <div
          className={`input-wrapper flex items-center gap-2 ${
            isCheckbox ? "checkbox-wrapper" : "radio-wrapper"
          }`}>
          {React.cloneElement(children, {
            className: `${children.props.className || ""} ${
              isCheckbox ? "checkbox-input" : "radio-input"
            }`,
          })}
          {label && (
            <label htmlFor={id} className="form-label mb-0 fw-normal">
              {label}
              {required && <span className="text-error ms-1">*</span>}
            </label>
          )}
        </div>
      ) : isFileInput ? (
        <div className="file-input-wrapper">
          {label && (
            <label htmlFor={id} className="form-label">
              {label}
              {required && <span className="text- ms-1 text-error">*</span>}
            </label>
          )}
          <label
            className={`${
              !props?.isDragAbleDisable
                ? "file-input flex items-center justify-center flex-col p-4 px-4 gap-2 border-2 border-dashed border-gray-300 rounded-md cursor-pointer transition-all hover:bg-primarymild hover:border-primary"
                : ""
            }`}
            htmlFor={id}>
            {!props?.isDragAbleDisable && (
              <>
                <FaCloudUploadAlt className="text-primary text-[30px]" />
                <p className="text-sm text-gray-600">
                  {uploadText ?? "Drag your file(s) or Browse"}
                </p>
              </>
            )}

            <div className={`${!props?.isDragAbleDisable ? "hidden" : ""}`}>
              {children}
            </div>
          </label>
        </div>
      ) : (
        <>
          {label && (
            <label htmlFor={id} className="form-label">
              <span>{label}</span>
              {required && <span className="text-error ms-1">*</span>}
            </label>
          )}
          {children}
        </>
      )}

      {!!error && (
        <div role="alert" className="text-error fs-13 mt-1">
          {error}
        </div>
      )}

      {inputNote && <span className="fs-14 mt-2 d-block">{inputNote}</span>}
    </div>
  );
};

const getChildId = (children) => {
  const child = React.Children.only(children);

  if (child && "id" in child.props) {
    return child.props.id;
  }
  return null;
};
