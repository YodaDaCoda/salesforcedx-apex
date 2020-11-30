/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

export function getCurrentTime(): number {
  return new Date().getTime();
}

export function formatStartTime(startTime: string): string {
  const date = new Date(startTime);
  return `${date.toDateString()} ${date.toLocaleTimeString()}`;
}

export function msToSecond(timestamp: string | number): string {
  return ((timestamp as number) / 1000).toFixed(2);
}
