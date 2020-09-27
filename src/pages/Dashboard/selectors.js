/*
  Dashboard  Selector
 */

import { createSelector } from "reselect";
import { filterDataByMood } from "utils";

const selectDashboardState = (state) => {
  return state.dashboardSlice;
};

export const selectClients = () =>
  createSelector(selectDashboardState, (state) => state);

export const selectFilteredClients = () =>
  createSelector(selectDashboardState, (state) => {
    const { clients, filter } = state;
    const filteredClients = filterDataByMood(clients, filter);

    return filteredClients;
  });
