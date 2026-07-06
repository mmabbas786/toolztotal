// Shared tax rates configuration for ToolzTotal

export interface StateTaxRate {
  stateName: string;
  salesTaxRate: number; // average combined state + local rate (%)
  propertyTaxRate: number; // average effective property tax rate (%)
}

export const stateTaxRates: Record<string, StateTaxRate> = {
  CA: { stateName: "California", salesTaxRate: 8.85, propertyTaxRate: 0.75 },
  TX: { stateName: "Texas", salesTaxRate: 8.20, propertyTaxRate: 1.60 },
  NY: { stateName: "New York", salesTaxRate: 8.52, propertyTaxRate: 1.40 },
  FL: { stateName: "Florida", salesTaxRate: 7.02, propertyTaxRate: 0.86 },
  IL: { stateName: "Illinois", salesTaxRate: 8.86, propertyTaxRate: 2.08 },
  PA: { stateName: "Pennsylvania", salesTaxRate: 6.34, propertyTaxRate: 1.43 },
  OH: { stateName: "Ohio", salesTaxRate: 7.22, propertyTaxRate: 1.53 },
  GA: { stateName: "Georgia", salesTaxRate: 7.37, propertyTaxRate: 0.90 },
  NC: { stateName: "North Carolina", salesTaxRate: 7.00, propertyTaxRate: 0.77 },
  MI: { stateName: "Michigan", salesTaxRate: 6.00, propertyTaxRate: 1.38 },
  NJ: { stateName: "New Jersey", salesTaxRate: 6.60, propertyTaxRate: 2.23 },
  NH: { stateName: "New Hampshire", salesTaxRate: 0.00, propertyTaxRate: 1.86 },
  HI: { stateName: "Hawaii", salesTaxRate: 4.44, propertyTaxRate: 0.27 }
};
