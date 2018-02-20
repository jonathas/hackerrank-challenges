class BinaryCalculator {

    constructor() {
        this.setOperations();
        this.selectElements();
        this.addListeners();
    }

    setOperations() {
        this.operations = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => Math.floor(a / b),
        }
    }

    selectElements() {
        this.res = document.querySelector("#res");

        this.btnClr = document.querySelector("#btnClr");
        this.btnEql = document.querySelector("#btnEql");

        const btns = document.getElementsByTagName("button");
        this.btnArray = Array.from(btns).filter(btn =>
            btn.innerText != this.btnClr.innerText && btn.innerText != this.btnEql.innerText);
    }

    addListeners() {
        this.btnArray.map(btnEl => btnEl.addEventListener("click", btn => this.addToRes(btn.target)));
        this.btnClr.addEventListener("click", () => this.res.innerText = "");
        this.btnEql.addEventListener("click", () => this.res.innerText = this.calculate());
    }

    addToRes(btnTarget) {
        if (btnTarget.innerText != this.btnClr.innerText && btnTarget.innerText != this.btnEql.innerText) {
            this.res.innerText = this.res.innerText + btnTarget.innerText;
        }
    }

    calculate() {
        if (this.res.innerText !== "" && this.res.innerText.split("").length >= 3) {
            let [op1, operator, op2] = res.innerText.split(/\b/);
            op1 = this.convertBinaryStringToInt(op1);
            op2 = this.convertBinaryStringToInt(op2);
            let result = this.operations[operator](op1, op2);
            return this.convertToBinaryString(result);
        }
        return "";
    }

    convertBinaryStringToInt(val) {
        return parseInt(val, 2);
    }

    convertToBinaryString(val) {
        return Number(val).toString(2);
    }

}

new BinaryCalculator();