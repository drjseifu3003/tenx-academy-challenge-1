import validateAddress from '../src/address';

describe('validateAddress', () => {
  it('validates a correct US address', () => {
    const res = validateAddress({
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      postalCode: '12345-6789',
      country: 'US',
    });
    expect(res.valid).toBe(true);
    expect(res.errors).toEqual({});
  });

  it('rejects invalid US postal code', () => {
    const res = validateAddress({
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      postalCode: 'ABCDE',
      country: 'United States',
    });
    expect(res.valid).toBe(false);
    expect(res.errors.postalCode).toBeDefined();
  });

  it('validates a correct Canadian postal code', () => {
    const res = validateAddress({
      street: '12 Rue Test',
      city: 'Montreal',
      postalCode: 'H2B 1Z0',
      country: 'CA',
    });
    expect(res.valid).toBe(true);
  });

  it('rejects invalid Canadian postal code', () => {
    const res = validateAddress({
      street: '12 Rue Test',
      city: 'Montreal',
      postalCode: '12345',
      country: 'Canada',
    });
    expect(res.valid).toBe(false);
  });

  it('validates a correct UK postcode', () => {
    const res = validateAddress({
      street: '10 Downing St',
      city: 'London',
      postalCode: 'SW1A 2AA',
      country: 'UK',
    });
    expect(res.valid).toBe(true);
  });

  it('rejects missing required fields', () => {
    const res = validateAddress({} as any);
    expect(res.valid).toBe(false);
    expect(res.errors.street).toBeDefined();
    expect(res.errors.city).toBeDefined();
    expect(res.errors.postalCode).toBeDefined();
    expect(res.errors.country).toBeDefined();
  });
});
