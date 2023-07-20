
export const getValueByPath = (obj: { [key: string]: any }, path: string[]) => {
  let temp: any = obj[path[0]];
  for (let i = 1; i < path.length; i++) temp = temp[path[i]];
  return temp;
}

// todo : change that name
export function remakeObjectByTransformer<T, R>(
  obj: Record<string, T>,
  keysToChange: string[],
  transformer: (i: T) => R
) {
  // todo : for later => change this implementation, there is always better M.E
  const objClone = { ...obj };
  modifyObjectByTransformer(objClone, keysToChange, transformer);
  return objClone;
}


export function modifyObjectByTransformer<T, R>(
  obj: Record<string, T>,
  keysToChange: string[],
  transformer: (i: T) => R
): void {
  keysToChange.forEach((k) => {
    (obj[k] as unknown as R) = transformer(obj[k]);
  });
}


export function containsData(val: any): boolean {
  return !(val === undefined || val === null);
}

// todo : there is ofcourse a better way for handling edge
// cases other than repeating the code, bs mafish dma8. b3deen
export function modifyObjectByTransformerNested<T, R>(
  obj: Record<string, T>,
  nestedPaths: string[][],
  transformer: (i: T) => R
): void {
  nestedPaths.forEach((pathFragments) => {
    debugger;
    const lastItem = pathFragments.pop();
    const lastNestedObj = pathFragments.reduce(
      (x, y) => x[y] as Record<string, T>,
      obj
    );
    if (lastItem && lastNestedObj[lastItem])
      (lastNestedObj[lastItem] as unknown as R) = transformer(
        lastNestedObj[lastItem]
      );
  });
}

export const setNestedAttributeByPath = (
  obj: { [key: string]: any },
  path: string[] = [],
  val: any
): void => {
  if (path === undefined || path.length === 0) return;
  const lastItem = path.pop();
  const lastNestedObj = path.reduce((x, y) => x[y], obj);
  if (lastItem && lastNestedObj && lastNestedObj[lastItem]) lastNestedObj[lastItem] = val;
};
