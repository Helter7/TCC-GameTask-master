export class Goal {
  /** @type {number} */ id;
  /** @type {string} */ description;
  /** @type {string} */ deadline;

  /** @param {Goal} goal */
  constructor(goal) {
    Object.assign(this, { ...goal });
  }
}
