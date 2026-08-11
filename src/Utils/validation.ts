import { APPERROR } from "./apperror.js";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export function validateUserBody(body: any): void {
  const { Username, email, phonenum } = body ?? {};
  if (!Username || typeof Username !== "string" || !Username.trim())
    throw new APPERROR(
      "Username is required and must be a non-empty string",
      400,
    );
  if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email))
    throw new APPERROR(
      "email is required and must be a valid email address",
      400,
    );
  if (!phonenum || typeof phonenum !== "string" || !phonenum.trim())
    throw new APPERROR(
      "phonenum is required and must be a non-empty string",
      400,
    );
}
//user
export function validateUserUpdateBody(body: any): void {
  const { Username, email, phonenum } = body ?? {};

  if (Username !== undefined) {
    if (typeof Username !== "string" || !Username.trim()) {
      throw new APPERROR("Username must be a non-empty string", 400);
    }
  }

  if (email !== undefined) {
    if (typeof email !== "string" || !EMAIL_REGEX.test(email)) {
      throw new APPERROR("email must be a valid email address", 400);
    }
  }

  if (phonenum !== undefined) {
    if (typeof phonenum !== "string" || !phonenum.trim()) {
      throw new APPERROR("phonenum must be a non-empty string", 400);
    }
  }
}
//product
export function validateProductBody(body: any): void {
  const { Productname, ProductDescription, Price, StockQuantity } = body ?? {};

  if (!Productname || typeof Productname !== "string" || !Productname.trim()) {
    throw new APPERROR(
      "Productname is required and must be a non-empty string",
      400,
    );
  }

  if (
    !ProductDescription ||
    typeof ProductDescription !== "string" ||
    !ProductDescription.trim()
  ) {
    throw new APPERROR(
      "ProductDescription is required and must be a non-empty string",
      400,
    );
  }

  if (
    Price === undefined ||
    Price === null ||
    typeof Price !== "number" ||
    Number.isNaN(Price)
  ) {
    throw new APPERROR("Price is required and must be a number", 400);
  }

  if (Price <= 0) {
    throw new APPERROR("Price must be a positive number", 400);
  }

  if (
    StockQuantity === undefined ||
    StockQuantity === null ||
    typeof StockQuantity !== "number" ||
    Number.isNaN(StockQuantity)
  ) {
    throw new APPERROR("StockQuantity is required and must be a number", 400);
  }

  if (StockQuantity <= 0) {
    throw new APPERROR("StockQuantity must be a positive number", 400);
  }
}

export function validateProductUpdateBody(body: any): void {
  const { Productname, ProductDescription, Price, StockQuantity } = body ?? {};

  if (Productname !== undefined) {
    if (typeof Productname !== "string" || !Productname.trim()) {
      throw new APPERROR("Productname must be a non-empty string", 400);
    }
  }

  if (ProductDescription !== undefined) {
    if (typeof ProductDescription !== "string" || !ProductDescription.trim()) {
      throw new APPERROR("ProductDescription must be a non-empty string", 400);
    }
  }

  if (Price !== undefined) {
    if (typeof Price !== "number" || Number.isNaN(Price)) {
      throw new APPERROR("Price must be a number", 400);
    }

    if (Price <= 0) {
      throw new APPERROR("Price must be a positive number", 400);
    }
  }

  if (StockQuantity !== undefined) {
    if (typeof StockQuantity !== "number" || Number.isNaN(StockQuantity)) {
      throw new APPERROR("StockQuantity must be a number", 400);
    }

    if (StockQuantity <= 0) {
      throw new APPERROR("StockQuantity must be a positive number", 400);
    }
  }
}
export function validateAddProductToCartBody(body: any): void {
  const { productId, quantity } = body ?? {};

  if (!productId || typeof productId !== "string" || !productId.trim()) {
    throw new APPERROR(
      "productId is required and must be a non-empty string",
      400,
    );
  }

  if (
    quantity === undefined ||
    quantity === null ||
    typeof quantity !== "number" ||
    Number.isNaN(quantity)
  ) {
    throw new APPERROR("quantity is required and must be a number", 400);
  }

  if (quantity <= 0) {
    throw new APPERROR("quantity must be a positive number", 400);
  }
}

export function validateCartQuantityBody(body: any): void {
  const { quantity } = body ?? {};

  if (
    quantity === undefined ||
    quantity === null ||
    typeof quantity !== "number" ||
    Number.isNaN(quantity)
  ) {
    throw new APPERROR("quantity is required and must be a number", 400);
  }

  if (quantity <= 0) {
    throw new APPERROR("quantity must be a positive number", 400);
  }
}
//order
export function validateOrderBody(body: any): void {
  const { user, PurchasedProducts, totalPrice, orderStatus } = body ?? {};

  if (!user || typeof user !== "string" || !user.trim()) {
    throw new APPERROR("user is required and must be a non-empty string", 400);
  }

  if (!PurchasedProducts || !Array.isArray(PurchasedProducts)) {
    throw new APPERROR(
      "PurchasedProducts is required and must be an array",
      400,
    );
  }

  if (
    totalPrice === undefined ||
    totalPrice === null ||
    typeof totalPrice !== "number" ||
    Number.isNaN(totalPrice)
  ) {
    throw new APPERROR("totalPrice is required and must be a number", 400);
  }

  if (totalPrice <= 0) {
    throw new APPERROR("totalPrice must be a positive number", 400);
  }

  if (!orderStatus || typeof orderStatus !== "string" || !orderStatus.trim()) {
    throw new APPERROR(
      "orderStatus is required and must be a non-empty string",
      400,
    );
  }
}

export function validateOrderUpdateBody(body: any): void {
  const { totalPrice, orderStatus } = body ?? {};

  if (totalPrice !== undefined) {
    if (typeof totalPrice !== "number" || Number.isNaN(totalPrice)) {
      throw new APPERROR("totalPrice must be a number", 400);
    }

    if (totalPrice <= 0) {
      throw new APPERROR("totalPrice must be a positive number", 400);
    }
  }

  if (orderStatus !== undefined) {
    if (typeof orderStatus !== "string" || !orderStatus.trim()) {
      throw new APPERROR("orderStatus must be a non-empty string", 400);
    }
  }
}
