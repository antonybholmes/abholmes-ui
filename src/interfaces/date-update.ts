import { IDateRange } from "./date-range";

export interface IDateUpdate extends IDateRange {
	// whether to trigger the ui to update the dates.
	// When using the mouse on the months, this should
	// be set to false to prevent clicking on different
	// months triggering a refresh since this is jarring
	// shift in the ui.
	update: boolean
  }
  