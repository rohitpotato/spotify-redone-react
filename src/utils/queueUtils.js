export default function transformQueue(list = []) {
  const newList = list.reduce(
    (acc, curr) => {
      if (curr?.track?.id) {
        acc.collection[curr.track.id] = curr;
        acc.sortOrder.push(curr.track.id);
      }
      return acc;
    },
    { sortOrder: [], collection: {} }
  );
  return newList;
}

export const transforArtistQueue = (list = []) => {
  const newList = list.reduce(
    (acc, curr) => {
      if (curr?.id) {
        acc.collection[curr.id] = { track: curr };
        acc.sortOrder.push(curr.id);
      }
      return acc;
    },
    { sortOrder: [], collection: {} }
  );
  return newList;
};
