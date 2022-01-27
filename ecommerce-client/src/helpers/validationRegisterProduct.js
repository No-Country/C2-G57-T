export const validationProduct = (values, size, fileUpload) => {
  if (
    size.length === 0 ||
    fileUpload.length === 0 ||
    !values.name ||
    !values.description ||
    !values.price ||
    !values.color ||
    !values.stock ||
    !values.category ||
    !values.subcategory
  ) {
    return false;
  } else {
    return true;
  }
};
