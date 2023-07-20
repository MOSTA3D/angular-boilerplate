import { map, Observable, of, tap } from "rxjs";

const apiUrlGraph: ApiPathNode = {
    value: "api",
    x: {
        value: "x-path",
        y: {
            value: "y-path"
        }
    },
    a: {
        value: "a-path",
        b: {
            value: "b-path",
            c: {
                value: "c-path"
            }
        }
    }
};

function applyPathAssembly(obj: ApiPathNode, path = ""): ApiPathNode {
    return new Proxy(obj, {
        get(target: ApiPathNode, prop: string, _receiver) {
            const nestedObj = target[prop] as ApiPathNode;
            if (nestedObj !== undefined && nestedObj.value !== undefined)
                return applyPathAssembly(nestedObj, `${path}/${nestedObj.value}`);
            if (prop === "value")
                return path;
            return undefined;
        }
    });
};

export const apiUrlGraphProxy = applyPathAssembly(apiUrlGraph);
 
export function applyCacheResponse<R>(apiCall: (...args: any) => Observable<R>) {
  let cachedResponse: R;
  return ():Observable<R> => {
    if(cachedResponse) return of(cachedResponse);
    return apiCall().pipe(tap({next: (res)=> {
      cachedResponse = res;
    }}))
  }
}

interface ApiPathNode {
    value: string,
    [key: string]: ApiPathNode | string,
}