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

    private name: RegExp = /^[가-힣]{2,6}$/;
    private email: RegExp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    private phone: RegExp = /^01[0179][0-9]{7,8}$/;

    public getValue(key: RegExpTypes) {
        switch (key) {
            case "NAME": {
                return {
                    regExp: this.name,
                    errMsg: "한글만 입력 가능"
                };
            }
            case "EMAIL": {
                return {
                    regExp: this.email,
                    errMsg: "잘못된 이메일 형식"
                };
            }
            case "PHONE": {
                return {
                    regExp: this.phone,
                    errMsg: "잘못된 전화번호 형식"
                };
            }
            default: {
                throw new Error("잘못된 정규식 타입입니다.");
            }
        }
    }   
}
