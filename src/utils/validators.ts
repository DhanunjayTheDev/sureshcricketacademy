export function isValidMobile(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return /^[6-9]\d{9}$/.test(digits);
}

export function isValidAge(value: string): boolean {
  if (!/^\d+$/.test(value.trim())) return false;
  const age = Number(value);
  return age >= 4 && age <= 80;
}

export function isNonEmpty(value: string): boolean {
  return value.trim().length > 0;
}
