/* eslint-disable */
import {RegExpVal, RegExpTypes } from '@/model/RegExpModel';

const regExpMap: Map<string, any> = new Map<string, Object>();

function RegExps(regExpType: RegExpTypes): Function;
function RegExps(exp: RegExp, msg: string): Function;
function RegExps(one: any, two?: any): Function {
    return (target: any, propertyKey: string) => {
        const type = (typeof one === "object") ? "OTHER" : one;
        const { regExp, errMsg } = (typeof one === "object") ? {regExp: one, errMsg: two} : RegExpVal.getInstance.getValue(one);
        const regExpJson = {
            type: type,
            regExp: regExp,
            errMsg: errMsg,
            valid: undefined
        };
        regExpMap.set(propertyKey, regExpJson);
        target.validators = regExpMap;
    }
}

function Validate() {
    return (target: any, propertyKey: string, descriptor: any) => {
        descriptor.value = function(...args: any[]) {
            const data = this.$data;
            const validators: Map<string, any> = data.validators;
            for (const [key, value] of validators) {
                if(data[key]) {
                    value.valid = value.regExp.test(data[key]);
                } else {
                    value.valid = undefined;
                }
            }
        };
        return descriptor;
    }
}

export { RegExps, Validate };