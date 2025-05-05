export const COUPON_CODES = {
  BFRIDAY: "BFRIDAY",
  XMAS2021: "XMAS2021",
} as const;

export type CouponCode = keyof typeof COUPON_CODES;
