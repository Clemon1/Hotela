import { Model, Document } from "mongoose";
import {
  startOfMonth,
  endOfMonth,
  subMonths,
  addMonths,
  subWeeks,
  isWithinInterval,
  startOfWeek,
} from "date-fns";

// Used to calculate e.g total users of an application
export const getMonthlyCounts = async (model, year) => {
  const monthlyCounts = [];

  // Start from the first month after the given year to work backwards from there
  let currentDate = new Date(year + 1, 0, 1);

  // Loop over the last 12 months of the specified year
  for (let i = 0; i < 12; i++) {
    const endDate = endOfMonth(subMonths(currentDate, i + 1)); // end of the month for the i-th month before currentDate
    const startDate = startOfMonth(endDate); // start of the same month

    try {
      const monthYear = endDate.toLocaleDateString("default", {
        month: "short",
        // year: "numeric",
      });

      const total = await model.countDocuments({
        createdAt: { $gte: startDate, $lte: endDate },
      });

      monthlyCounts.push({ month: monthYear, total });
    } catch (error) {
      console.error("Error fetching monthly counts:", error);
      throw new Error("Error fetching monthly counts");
    }
  }

  // Reverse the array to have the counts from January to December of the year
  return monthlyCounts.reverse();
};
