export class Task {
  /** @type {number} */ id;
  /** @type {string} */ code;
  /** @type {string} */ description;
  /** @type {number} */ is_completed;
  /** @type {number} */ goal_id;

  /** @param {Task} task */
  constructor(task) {
    Object.assign(this, { ...task });
  }
}
