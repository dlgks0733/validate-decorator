/* eslint-disable */
export type RegExpTypes = "NAME" | "EMAIL" | "PHONE";
export class RegExpVal {

    private static instance: RegExpVal;

    private constructor() {
        RegExpVal.instance = this;
    }

    static get getInstance() {
        if(!RegExpVal.instance) {
            RegExpVal.instance = new RegExpVal();
        }
        return this.instance;
    }

    public getValue(key: RegExpTypes) {
        switch (key) {
            case "NAME": {
                return {
                    type: key,
                    regExp: /^[가-힣]{2,6}$/,
                    errMsg: "한글만 입력 가능"
                };
            }
            case "EMAIL": {
                return {
                    type: key,
                    regExp: /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/,
                    errMsg: "잘못된 이메일 형식"
                };
            }
            case "PHONE": {
                return {
                    type: key,
                    regExp: /^01[0179][0-9]{7,8}$/,
                    errMsg: "잘못된 전화번호 형식"
                };
            }
        }
    }   
}
