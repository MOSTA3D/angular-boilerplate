import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/app/environments/environment";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export default class ResourceService {
    constructor(private http: HttpClient) { }

    get<R>(
        conf: ResourceConfig,
        pathList: string[] = [],
        options: KeyValueObject = {}
    ): Observable<R> {
        return this.requestFactory({ conf, pathList, options, type: "get" });
    }

    getOne<R>(
        id: string | number,
        conf: ResourceConfig,
        pathList: string[] = [],
        options: KeyValueObject = {}
    ): Observable<R> {
        return this.get(conf, [...pathList, `${id}`], options);
    }

    create<T, R>(
        conf: ResourceConfig,
        payload: T,
        pathList: string[] = [],
        options: KeyValueObject = {}
    ): Observable<R> {
        return this.requestFactory({
            conf,
            payload,
            pathList,
            options,
            type: "post",
        });
    }

    update<T, R>(
        id: string | number,
        conf: ResourceConfig,
        payload?: T,
        pathList: string[] = [],
        options: KeyValueObject = {}
    ): Observable<R> {
        return this.requestFactory({
            conf,
            payload,
            pathList: [...pathList, `${id}`],
            options,
            type: "put",
        });
    }

    delete<T, R>(
        id: string | number,
        conf: ResourceConfig,
        payload?: T,
        pathList: string[] = [],
        options: KeyValueObject = {}
    ): Observable<R> {
        return this.requestFactory({
            conf,
            payload,
            pathList: [...pathList, `${id}`],
            options,
            type: "delete",
        });
    }

    private requestFactory<T, R>({
        conf,
        pathList,
        type,
        payload,
        options,
    }: RequestData<T>) {
        const fullUrl = getFullURL([conf.resourcePath, ...pathList]);
        switch (type) {
            case "get":
                return this.http.get<R>(fullUrl, options);
            case "post":
                return this.http.post<R>(fullUrl, payload, options);
            case "put":
                return this.http.put<R>(fullUrl, payload, options);
            case "delete":
                return this.http.delete<R>(fullUrl, options);
        }
    }
    // createAll, sendFile => sendFiles
}


const getFullURL = (() => {
    const { API_URL } = environment;
    return (resourcePath: string[]) => `${API_URL}/api/${resourcePath.join("/")}`;
})();


type KeyValueObject = {
    [key: string]: any;
};


type RequestMethods = "get" | "post" | "put" | "delete";


interface RequestData<T> {
    conf: ResourceConfig;
    payload?: T;
    pathList: string[];
    options: KeyValueObject;
    type: RequestMethods;
}

interface ResourceConfig {
    resourcePath: string;
}