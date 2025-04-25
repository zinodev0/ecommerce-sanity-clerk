import { getActiveSaleByCouponCode } from "@/sanity/lib/sales/getActiveSaleByCouponCode";

async function BlackFridayBanner() {
  const sale = await getActiveSaleByCouponCode("BFRIDAY");

  if (!sale?.isActive) {
    return null;
  }
  return (
    <div className="bg-gradient-to-r from-red-600 to-black text-white px-6 py-10 mx-4 mt-2 rounded-lg shadow-lg">
      BlackFridayBanner
    </div>
  );
}

export default BlackFridayBanner;
