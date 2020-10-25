export interface ElementHistory {
    elementId: number;
    elementName: string;
    name: string;
    type: string;
    time: Date
}

export interface Items {
    id: number;
    name: string
}

export interface Element {
    id: number;
    name: string;
    items: Array<Items>
}

export interface HistoryType {
    name: string;
    title: string;
}