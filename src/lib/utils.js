import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


function calcFirstChecker(firstNineDigits) {
  let sum = 0;
  
  for (let i = 0; i < 9; ++i) {
    sum += Number(firstNineDigits.charAt(i)) * (10 - i);
  }
  
  const lastSumChecker = sum % 11;
  return lastSumChecker < 2 ? 0 : 11 - lastSumChecker;
}

function calcSecondChecker(cpfWithChecker1) {
  let sum = 0;
  
  for (let i = 0; i < 10; ++i) {
    sum += Number(cpfWithChecker1.charAt(i)) * (11 - i);
  }
  
  const lastSumChecker2 = sum % 11;
  return lastSumChecker2 < 2 ? 0 : 11 - lastSumChecker2;
}

function hasCPFLength(cpf) {
  if (cpf.length > 11 || cpf.length < 11) {
    return false;
  }
  
  return true;
}

function allDigitsAreEqual(digits) {
  for (let i = 0; i < 10; i++) {
    if (digits === Array.from({ length: digits.length + 1 }).join(String(i))) {
      return true;
    }
  }
  
  return false;
}

// https://github.com/tiagoporto/gerador-validador-cpf
export function validateCPF(value) {
  if (typeof value !== "string") {
    return false;
  }
  
  const cleanCPF = String(value).replace(/[\s.-]/g, "");
  const firstNineDigits = cleanCPF.slice(0, 9);
  const checker = cleanCPF.slice(9, 11);
  
  if (!hasCPFLength(cleanCPF) || allDigitsAreEqual(cleanCPF)) {
    return false;
  }

  const checker1 = calcFirstChecker(firstNineDigits);
  const checker2 = calcSecondChecker(`${firstNineDigits}${checker1}`);

  return checker === `${checker1}${checker2}`;
}
