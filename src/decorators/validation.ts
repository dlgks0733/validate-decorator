/* eslint-disable */
import {RegExpVal, RegExpTypes } from '@/model/RegExpModel';

const regExpMap: Map<string, any> = new Map<string, Object>();

function RegExps(RegExpType: RegExpTypes) {
    return (target: any, propertyKey: string) => {
        const { regExp, errMsg } = RegExpVal.getInstance.getValue(RegExpType);
        const regExpJson = {
            type: RegExpType,
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