export interface Address {
  street: string;
  city: string;
  state?: string;
  postalCode: string;
  country: string;
}

export type ValidationResult = {
  valid: boolean;
  errors: Partial<Record<keyof Address, string[]>>;
};

function isEmpty(val: unknown): boolean {
  return val === undefined || val === null || (typeof val === 'string' && val.trim() === '');
}

function normalizeCountry(country?: string): 'US' | 'CA' | 'UK' | 'OTHER' {
  if (!country) return 'OTHER';
  const c = country.toLowerCase().trim();
  if (c === 'us' || c === 'usa' || c === 'united states' || c === 'united states of america')
    return 'US';
  if (c === 'ca' || c === 'canada') return 'CA';
  if (c === 'uk' || c === 'gb' || c === 'gbr' || c === 'united kingdom' || c === 'great britain')
    return 'UK';
  return 'OTHER';
}

const postalRegex: Record<string, RegExp> = {
  US: /^\d{5}(-\d{4})?$/,
  CA: /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
  UK: /^([A-Za-z]{1,2}\d{1,2}[A-Za-z]?\s*\d[A-Za-z]{2})$/i,
};

/**
 * Validate an address object.
 * - Checks presence and basic length/format of fields
 * - Applies country-specific postal code validation for US, CA, UK
 */
export default function validateAddress(address: Partial<Address>): ValidationResult {
  const errors: Partial<Record<keyof Address, string[]>> = {};

  if (!address || typeof address !== 'object') {
    return { valid: false, errors: { street: ['address must be an object'] } };
  }

  // street
  if (isEmpty(address.street)) {
    errors.street = errors.street || [];
    errors.street.push('street is required');
  } else if (typeof address.street !== 'string' || address.street.trim().length < 3) {
    errors.street = errors.street || [];
    errors.street.push('street must be at least 3 characters');
  }

  // city
  if (isEmpty(address.city)) {
    errors.city = errors.city || [];
    errors.city.push('city is required');
  } else if (typeof address.city !== 'string' || address.city.trim().length < 2) {
    errors.city = errors.city || [];
    errors.city.push('city must be at least 2 characters');
  }

  // state (optional)
  if (
    !isEmpty(address.state) &&
    (typeof address.state !== 'string' || address.state.trim().length < 2)
  ) {
    errors.state = errors.state || [];
    errors.state.push('state must be at least 2 characters if provided');
  }

  // country
  if (isEmpty(address.country)) {
    errors.country = errors.country || [];
    errors.country.push('country is required');
  }

  // postalCode
  if (isEmpty(address.postalCode)) {
    errors.postalCode = errors.postalCode || [];
    errors.postalCode.push('postalCode is required');
  } else if (typeof address.postalCode !== 'string') {
    errors.postalCode = errors.postalCode || [];
    errors.postalCode.push('postalCode must be a string');
  } else {
    const country = normalizeCountry(address.country);
    const value = address.postalCode.trim();

    if (country === 'US') {
      if (!postalRegex.US.test(value)) {
        errors.postalCode = errors.postalCode || [];
        errors.postalCode.push('postalCode must match US ZIP (e.g. 12345 or 12345-6789)');
      }
    } else if (country === 'CA') {
      if (!postalRegex.CA.test(value)) {
        errors.postalCode = errors.postalCode || [];
        errors.postalCode.push('postalCode must match CA format (e.g. A1A 1A1)');
      }
    } else if (country === 'UK') {
      if (!postalRegex.UK.test(value)) {
        errors.postalCode = errors.postalCode || [];
        errors.postalCode.push('postalCode must match UK postcode format (e.g. SW1A 1AA)');
      }
    } else {
      // basic check for other countries: non-empty and reasonable length
      if (value.length < 3 || value.length > 20) {
        errors.postalCode = errors.postalCode || [];
        errors.postalCode.push('postalCode seems invalid for the specified country');
      }
    }
  }

  const valid = Object.keys(errors).length === 0;
  return { valid, errors };
}
