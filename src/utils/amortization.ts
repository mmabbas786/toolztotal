export interface AmortizationPeriod {
  period: number; // Month index (1-based)
  beginningBalance: number;
  principalPaid: number;
  interestPaid: number;
  endingBalance: number;
}

export interface AmortizationResult {
  monthlyPI: number;
  baseline: {
    schedule: AmortizationPeriod[];
    totalInterest: number;
    payoffMonths: number;
  };
  accelerated: {
    schedule: AmortizationPeriod[];
    totalInterest: number;
    payoffMonths: number;
  };
}

/**
 * Calculates both the baseline and accelerated monthly amortization schedules.
 */
export function calculateAmortization(
  principal: number,
  annualRate: number,
  termMonths: number,
  extraPayment: number = 0
): AmortizationResult {
  const monthlyRate = (annualRate / 100) / 12;
  let monthlyPI = 0;

  if (principal > 0 && termMonths > 0) {
    if (monthlyRate === 0) {
      monthlyPI = principal / termMonths;
    } else {
      monthlyPI = principal * (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / (Math.pow(1 + monthlyRate, termMonths) - 1);
    }
  }

  // 1. Generate Baseline Schedule
  const baselineSchedule: AmortizationPeriod[] = [];
  let tempBalance = principal;
  let totalInterest = 0;

  for (let m = 1; m <= termMonths; m++) {
    const interestPayment = tempBalance * monthlyRate;
    const principalPayment = Math.min(tempBalance, monthlyPI - interestPayment);
    const endingBalance = Math.max(0, tempBalance - principalPayment);

    baselineSchedule.push({
      period: m,
      beginningBalance: tempBalance,
      principalPaid: principalPayment,
      interestPaid: interestPayment,
      endingBalance: endingBalance
    });

    totalInterest += interestPayment;
    tempBalance = endingBalance;
    if (tempBalance <= 0) break;
  }

  // 2. Generate Accelerated Schedule
  const acceleratedSchedule: AmortizationPeriod[] = [];
  let accelTotalInterest = 0;
  let accelBalance = principal;
  let accelMonth = 0;

  if (extraPayment > 0 && principal > 0) {
    while (accelBalance > 0 && accelMonth < 600) { // Limit to 50 years max
      accelMonth++;
      const interestPayment = accelBalance * monthlyRate;
      const standardPayment = Math.min(accelBalance + interestPayment, monthlyPI);
      const standardPrincipal = Math.max(0, standardPayment - interestPayment);
      const extraPrincipal = Math.min(accelBalance - standardPrincipal, extraPayment);
      const totalPrincipal = standardPrincipal + extraPrincipal;
      const endingBalance = Math.max(0, accelBalance - totalPrincipal);

      acceleratedSchedule.push({
        period: accelMonth,
        beginningBalance: accelBalance,
        principalPaid: totalPrincipal,
        interestPaid: interestPayment,
        endingBalance: endingBalance
      });

      accelTotalInterest += interestPayment;
      accelBalance = endingBalance;
    }
  }

  return {
    monthlyPI,
    baseline: {
      schedule: baselineSchedule,
      totalInterest,
      payoffMonths: baselineSchedule.length
    },
    accelerated: {
      schedule: acceleratedSchedule,
      totalInterest: accelTotalInterest,
      payoffMonths: acceleratedSchedule.length
    }
  };
}

export interface GroupedPeriod {
  period: string;
  beginningBalance: number;
  principalPaid: number;
  interestPaid: number;
  endingBalance: number;
}

/**
 * Aggregates a monthly amortization schedule into a yearly schedule.
 */
export function getYearlySchedule(schedule: AmortizationPeriod[], initialPrincipal: number): GroupedPeriod[] {
  const yearlySchedule: GroupedPeriod[] = [];
  let beginningBal = initialPrincipal;
  const totalYears = Math.ceil(schedule.length / 12);

  for (let year = 1; year <= totalYears; year++) {
    const yearIndex = (year - 1) * 12;
    const monthsChunk = schedule.slice(yearIndex, yearIndex + 12);
    if (monthsChunk.length === 0) break;

    const principalSum = monthsChunk.reduce((sum, item) => sum + item.principalPaid, 0);
    const interestSum = monthsChunk.reduce((sum, item) => sum + item.interestPaid, 0);
    const endingBal = monthsChunk[monthsChunk.length - 1].endingBalance;

    yearlySchedule.push({
      period: `Year ${year}`,
      beginningBalance: beginningBal,
      principalPaid: principalSum,
      interestPaid: interestSum,
      endingBalance: endingBal
    });
    beginningBal = endingBal;
  }

  return yearlySchedule;
}

/**
 * Generates a standard CSV string representation of a schedule.
 */
export function generateCsv(
  schedule: { period: string | number; beginningBalance: number; principalPaid: number; interestPaid: number; endingBalance: number }[],
  periodLabel: string
): string {
  const csvLines = [
    `${periodLabel},Beginning Balance,Principal Paid,Interest Paid,Ending Balance`
  ];

  schedule.forEach(row => {
    // Convert period to numeric digits if it's a string (e.g. "Year 5" -> "5")
    const num = typeof row.period === 'string' ? row.period.replace(/\D/g, '') : row.period;
    csvLines.push(`${num},${row.beginningBalance.toFixed(2)},${row.principalPaid.toFixed(2)},${row.interestPaid.toFixed(2)},${row.endingBalance.toFixed(2)}`);
  });

  return csvLines.join('\n');
}

export interface ChartPathsResult {
  baseLineD: string;
  baseFillD: string;
  accelLineD: string;
  accelFillD: string;
  hasAccel: boolean;
}

/**
 * Generates the SVG path 'd' attributes for the amortization charts.
 */
export function getSvgChartPaths(
  baselineSchedule: AmortizationPeriod[],
  acceleratedSchedule: AmortizationPeriod[],
  principal: number,
  isYearly: boolean,
  width: number = 600,
  height: number = 220,
  paddingLeft: number = 50,
  paddingRight: number = 10,
  paddingTop: number = 15,
  paddingBottom: number = 25
): ChartPathsResult {
  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;

  const getX = (index: number, totalPoints: number) => paddingLeft + (index / (totalPoints - 1)) * chartWidth;
  const getY = (value: number) => paddingTop + chartHeight - (value / principal) * chartHeight;

  // 1. Map Baseline Points
  let basePoints = [{ period: 0, balance: principal }];
  if (isYearly) {
    for (let i = 0; i < baselineSchedule.length; i += 12) {
      const chunk = baselineSchedule.slice(i, i + 12);
      const endingMonth = chunk[chunk.length - 1];
      basePoints.push({ period: Math.ceil(endingMonth.period / 12), balance: endingMonth.endingBalance });
    }
  } else {
    baselineSchedule.forEach(m => {
      basePoints.push({ period: m.period, balance: m.endingBalance });
    });
  }

  const baseCoords = basePoints.map((d, index) => `${getX(index, basePoints.length)},${getY(d.balance)}`);
  const baseLineD = `M ${baseCoords.join(' L ')}`;
  const baseFillD = `${baseLineD} L ${getX(basePoints.length - 1, basePoints.length)},${paddingTop + chartHeight} L ${getX(0, basePoints.length)},${paddingTop + chartHeight} Z`;

  // 2. Map Accelerated Points (only if accelerated is shorter)
  let accelLineD = '';
  let accelFillD = '';
  let hasAccel = false;

  if (acceleratedSchedule.length > 0 && acceleratedSchedule.length < baselineSchedule.length) {
    hasAccel = true;
    let accelPoints = [{ period: 0, balance: principal }];

    if (isYearly) {
      for (let i = 0; i < acceleratedSchedule.length; i += 12) {
        const chunk = acceleratedSchedule.slice(i, i + 12);
        const endingMonth = chunk[chunk.length - 1];
        accelPoints.push({ period: Math.ceil(endingMonth.period / 12), balance: endingMonth.endingBalance });
      }
    } else {
      acceleratedSchedule.forEach(m => {
        accelPoints.push({ period: m.period, balance: m.endingBalance });
      });
    }

    const totalPoints = basePoints.length;
    const maxPeriod = isYearly ? (baselineSchedule.length / 12) : baselineSchedule.length;

    const accelCoords = accelPoints.map(d => {
      // Map the accelerated period position relative to the baseline scale
      const baseRelativeIndex = (d.period / maxPeriod) * (totalPoints - 1);
      return `${getX(baseRelativeIndex, totalPoints)},${getY(d.balance)}`;
    });

    accelLineD = `M ${accelCoords.join(' L ')}`;
    accelFillD = `${accelLineD} L ${accelCoords[accelCoords.length - 1].split(',')[0]},${paddingTop + chartHeight} L ${getX(0, totalPoints)},${paddingTop + chartHeight} Z`;
  }

  return {
    baseLineD,
    baseFillD,
    accelLineD,
    accelFillD,
    hasAccel
  };
}
