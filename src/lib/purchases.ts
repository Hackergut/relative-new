import { Purchases, type Package } from "@revenuecat/purchases-js";

export const ENTITLEMENT_ID = "project-Ska5cKGS Pro";
const API_KEY = "test_FJcxhgAPNydDQJGCpqYXZLviWtE";

export function getPurchases() {
  const appUserId = userId();
  if (Purchases.isConfigured()) return Purchases.getSharedInstance();
  return Purchases.configure({ apiKey: API_KEY, appUserId });
}

export async function loadPackages(): Promise<Package[]> {
  const offerings = await getPurchases().getOfferings();
  return offerings.current?.availablePackages ?? [];
}

export async function presentPaywall(htmlTarget: HTMLElement) {
  return getPurchases().presentPaywall({ htmlTarget });
}

export async function buyPackage(rcPackage: Package, htmlTarget: HTMLElement) {
  return getPurchases().purchase({ rcPackage, htmlTarget });
}

export function trackPaywall() {
  getPurchases().trackCustomPaywallImpression();
}

function userId() {
  const key = "relative.rc.user";
  const existing = window.localStorage.getItem(key);
  if (existing) return existing;
  const id = crypto.randomUUID();
  window.localStorage.setItem(key, id);
  return id;
}
