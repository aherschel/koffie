import scheduleCheckpoint from "..";
import { FREQUENCY_CATEGORIES, FrequencyCategory, newLink } from "../../model";
import { InvalidInputException } from "../../exception";

describe("CheckpointScheduler", () => {
  const testFrequencyCategoryScheduling = (
    frequencyCategory: FrequencyCategory,
    referenceDate: Date,
    minDateInclusive: Date,
    maxDateExclusive: Date
  ) => {
    Array.from(Array(50)).forEach(() => {
      const checkpoint = scheduleCheckpoint(
        newLink("", frequencyCategory),
        referenceDate
      );
      expect(checkpoint.date.getTime()).toBeGreaterThanOrEqual(
        minDateInclusive.getTime()
      );
      expect(checkpoint.date.getTime()).toBeLessThanOrEqual(
        maxDateExclusive.getTime()
      );
    });
  };

  it("can be invoked for each frequencyCategory", () => {
    FREQUENCY_CATEGORIES.filter(
      (frequencyCategory) => frequencyCategory !== "Unscheduled"
    ).forEach((frequencyCategory) => {
      scheduleCheckpoint(newLink("", frequencyCategory));
    });
  });

  it("schedules correctly for Daily frequencyCategory", () => {
    testFrequencyCategoryScheduling(
      "Daily",
      new Date(2020, 1, 1),
      new Date(2020, 1, 2),
      new Date(2020, 1, 4)
    );
  });

  it("schedules correctly for BiWeekly frequencyCategory", () => {
    testFrequencyCategoryScheduling(
      "BiWeekly",
      new Date(2020, 1, 1),
      new Date(2020, 1, 4),
      new Date(2020, 1, 7)
    );
  });

  it("schedules correctly for Weekly frequencyCategory", () => {
    testFrequencyCategoryScheduling(
      "Weekly",
      new Date(2020, 1, 1),
      new Date(2020, 1, 7),
      new Date(2020, 1, 12)
    );
  });

  it("schedules correctly for BiMonthly frequencyCategory", () => {
    testFrequencyCategoryScheduling(
      "BiMonthly",
      new Date(2020, 1, 1),
      new Date(2020, 1, 12),
      new Date(2020, 1, 24)
    );
  });

  it("schedules correctly for Monthly frequencyCategory", () => {
    testFrequencyCategoryScheduling(
      "Monthly",
      new Date(2020, 1, 1),
      new Date(2020, 1, 24),
      new Date(2020, 3, 2)
    );
  });

  it("schedules correctly for Quarterly frequencyCategory", () => {
    testFrequencyCategoryScheduling(
      "Quarterly",
      new Date(2020, 1, 1),
      new Date(2020, 3, 2),
      new Date(2020, 6, 1)
    );
  });

  it("throws on scheduleCheckpoint for Unscheduled frequencyCategory", (done) => {
    try {
      scheduleCheckpoint(newLink("", "Unscheduled"), new Date(2020, 1, 1));
    } catch (ex) {
      expect(ex).toBeInstanceOf(InvalidInputException);
      done();
    }
  });
});
