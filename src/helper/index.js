export const getPageNumberFromUrl = (url) => {
  if (!url) return null;
  const urlParams = new URL(url);
  return urlParams.searchParams.get("page");
};

export const navigateBack = (breadcrumb) => {
  if (breadcrumb) {
    let url = breadcrumb?.path;

    if (breadcrumb?.query_params) {
      Object.entries(breadcrumb?.query_params).forEach(
        ([key, value], index) => {
          if (index === 0) {
            url += "?";
          } else {
            url += "&";
          }
          url += `${key}=${value || null}`;
        }
      );
    }
    return url;
  }
};

export const truncateText = (text = "", maxLength = 20) => {
  if (text.length > maxLength) return text.slice(0, maxLength) + "...";
  return text;
};
