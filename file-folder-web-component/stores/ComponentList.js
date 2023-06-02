import {writable} from "svelte/store";
const item=[];
export const componentList= writable(item);
export const key= writable(0);