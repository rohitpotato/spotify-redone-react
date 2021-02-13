export default function transformQueue(list = []) {
  const newList = list.reduce(
    (acc, curr) => {
      if (curr?.track.id) {
        acc.collection[curr.track.id] = curr;
        acc.sortOrder.push(curr.track.id);
      }
      return acc;
    },
    { sortOrder: [], collection: {} }
  );
  return newList;
}
