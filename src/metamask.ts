import { installed } from "./store";
import { get } from 'svelte/store';
export async function initSnap(){
    if(typeof window !== 'undefined'){
    try {
        const result = await window.ethereum.request({
          method: 'wallet_requestSnaps',
          params: {
            'npm:stellar-snap': {},
          },
        });
      
        console.log(result);
        installed.set(true);
      } catch (error) {
        console.log(error);
      }
    }
    else{
        console.log("server side call ignoring");
    }

}
export async function callSnap(methodName:string, params?:object){
    if(typeof window !== 'undefined'){
        if(get(installed) === true){
            const result = await window.ethereum.request({
                method: 'wallet_invokeSnap',
                params: {
                snapId: 'npm:stellar-snap',
                request: {
                    method: methodName,
                    params:(params || {})
                },
                },
            });
            return result;
        }
        else{
            console.log("not installed");
        }
    }
    else{
        console.log("server side call ignored");
    }
}