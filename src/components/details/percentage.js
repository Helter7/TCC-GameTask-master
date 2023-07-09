export function percentage(tasks) {
  let completed = 0;
  for (let t of tasks) {
    t.is_completed == 1 ? (completed = completed + 1) : undefined;
  }
  return parseInt(100 * (completed / tasks.length));
}
