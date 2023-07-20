mport { SimpleChanges } from "@angular/core";

 
export const useEffect: Hook = (cb, changes: SimpleChanges, depsArr) => {
  for (const dep of depsArr) {
    const change = changes[dep];
    if (change === undefined) continue;
    else {
      if (change.previousValue !== change.currentValue) {
        cb();
        return;
      }
    }
  }
};

 
type Hook = (cb: () => void, changes: SimpleChanges, depsArr: string[]) => void;
