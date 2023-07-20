import { RowSpecs } from "../shared/models/row-specs.model";
import { getValueByPath } from "./object.utils";

export const mapObjectToRow = (o: object, mapping: RowSpecs) => {
    return Object.values(mapping).map(m => { return getValueByPath(o, m.path) });
}

export const flattenObject = (o: object, mapping: RowSpecs) => {
    return Object.fromEntries(Object.keys(mapping).map(k => [k, getValueByPath(o, mapping[k].path)]));
}


export const test_data = [
    {
        id: 1,
        name: "some name",
        address: {
            data: "my address",
            otherData: "my acctual address"
        },
        random: {
            other: {
                sheka: {
                    data: "random other sheka data"
                }
            }
        }
    }, {
        id: 1,
        name: "some name",
        address: {
            data: "my address",
            otherData: "my acctual address"
        },
        random: {
            other: {
                sheka: {
                    data: "random other sheka data"
                }
            }
        }
    }, {
        id: 1,
        name: "some name",
        address: {
            data: "my address",
            otherData: "my acctual address"
        },
        random: {
            other: {
                sheka: {
                    data: "random other sheka data"
                }
            }
        }
    }
];