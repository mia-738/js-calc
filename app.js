let sp = 0;
let num = 0;
let time = 2;
let aaaa = 0;
let func = [];
let calc = [];
let formula = [];
let ans = [];
let kari = [];

function get_calc(btn) {
    let dis = [];

    console.log(calc)
    console.log(kari)

    if(btn.value) {
        dis += btn.value;
        if (!isNaN(dis)) {
            time = 0;
        }
        else {
            time++;
        }

    }


    if(btn.value == "=") {
        if (aaaa >= 1){
            calc += kari;
            aaaa = 0;
            calc += ")";
            document.dentaku.display.value += ")";
        }

        console.log(calc)
        console.log(kari)

        formula += document.dentaku.display.value;
        function Calc(obj){
            return Function('"use strict";return (' + obj + ')')();
        }
        calc = Number(Calc(calc).toFixed(10));
        document.dentaku.display.value = Number(Calc(calc).toFixed(10));
        time = 0;
        ans += Number(Calc(calc).toFixed(10));
        document.dentaku.pl.value = formula;
        document.dentaku.calc.value = ans;
    } 
    else if (btn.value == "CE") {
        document.dentaku.display.value = "0";
        calc = [];
        kari = [];
        dis = [];
        time = 1;
        num = 0;
    } 
    else if (btn.value == "AC") {
        document.dentaku.display.slice( 0, -1 ) ;
        calc.slice( 0, -1 ) ;
    }

    else {
        if (time < 2) {

            if (btn.value == "×") {
                btn.value = "*";
                calc += btn.value;
                document.dentaku.multi.value = "×";
                document.dentaku.display.value += btn.value;
            }
            else if (btn.value == "÷") {
                btn.value = "/";
                calc += btn.value;
                document.dentaku.div.value = "÷";
                document.dentaku.display.value += btn.value;
            }
            else if (btn.value == "%") {
                btn.value = "/100";
                calc += btn.value;
                document.dentaku.par.value = "%";
                document.dentaku.display.value += btn.value;
            }
            else if (btn.value == "x!") {
                aaaa = 1;
                btn.value = "factorialize(";
                calc += btn.value;
                document.dentaku.fact.value = "!";
                document.dentaku.display.value += btn.value;
                document.dentaku.fact.value = "x!";
                time = 0;
            }
            else if (btn.value == "EXP") {
                btn.value = "*10**";
                calc += btn.value;
                document.dentaku.exp.value = "E";
                document.dentaku.display.value += btn.value;
                document.dentaku.exp.value = "EXP";
            }
            else if (btn.value == "x^y") { 
                btn.value = "**";
                calc += btn.value;
                document.dentaku.squ.value = "^";
                document.dentaku.display.value += btn.value;
                document.dentaku.squ.value = "x^y";
            }
            else if (btn.value == "+") {
                calc += btn.value;
                document.dentaku.display.value += btn.value;
            }
            else if (btn.value == "-") {
                calc += btn.value;
                document.dentaku.display.value += btn.value;
            }
            else if (btn.value == ")") { 
                if (aaaa <= 1) {
                    kari += calc;
                }
                aaaa = 0;
                calc += btn.value;
                document.dentaku.display.value += btn.value;
            }
            else if (btn.value == ".") {
                if (calc === "") {
                    calc += "0" + btn.value;
                    document.dentaku.display.value += "0" + btn.value;
                }
                else {
                    calc += btn.value;
                    document.dentaku.display.value += btn.value;
                }
            }
            else if (!isNaN(dis)) {
                num++
                if (aaaa === 0) {
                    if (calc == "") {
                        document.dentaku.display.value = "";
                    }
                    if (sp >= 1) {
                        calc += "*" + btn.value;
                        document.dentaku.display.value += "×" + btn.value;
                    }
                    else {
                        calc += btn.value;
                        document.dentaku.display.value += btn.value;
                    }
                }
                else {
                    if (calc == "") {
                        document.dentaku.display.value = "";
                    }
                    if (sp >= 1) {
                        kari += "*" + btn.value;
                        document.dentaku.display.value += "×" + btn.value;
                    }
                    else {
                        kari += btn.value;
                        document.dentaku.display.value += btn.value;
                    }
                }
            }
        }
        else {
            if (btn.value == ".") {
                if (calc == "") {
                    calc += btn.value;
                    document.dentaku.display.value += btn.value;
                    console.log("x");
                }
            }
        }
        if (btn.value == "sin") {
            if (calc == "") {
                document.dentaku.display.value = "";
            }
            if (sp >= 1){
                btn.value = "*Math.sin(";
                calc += btn.value;
                document.dentaku.sin.value = "×sin(";
                document.dentaku.display.value += btn.value;
                document.dentaku.sin.value = "sin";
                sp++
            }
            else if (num >= 1){
                btn.value = "*Math.sin(";
                calc += btn.value;
                document.dentaku.sin.value = "sin(";
                document.dentaku.display.value += btn.value;
                document.dentaku.sin.value = "sin";
                sp++
            }
            else {
                btn.value = "Math.sin(";
                calc += btn.value;
                document.dentaku.sin.value = "sin(";
                document.dentaku.display.value += btn.value;
                document.dentaku.sin.value = "sin";
                sp++
            }
            aaaa = 1;
        }
        else if (btn.value == "In") {
            if (calc == "") {
                document.dentaku.display.value = "";
            }
            if (sp >= 1){
                btn.value = "*Math.log(";
                calc += btn.value;
                document.dentaku.in.value = "×In(";
                document.dentaku.display.value += btn.value;
                document.dentaku.in.value = "In";
                sp++
            }
            else if (num >= 1){
                btn.value = "*Math.log(";
                calc += btn.value;
                document.dentaku.in.value = "In(";
                document.dentaku.display.value += btn.value;
                document.dentaku.in.value = "In";
                sp++
            }
            else {
                btn.value = "Math.log(";
                calc += btn.value;
                document.dentaku.in.value = "In(";
                document.dentaku.display.value += btn.value;
                document.dentaku.in.value = "In";
                sp++
            }
            aaaa = 1;
        }
        else if (btn.value == "π") {
            if (calc == "") {
                document.dentaku.display.value = "";
            }
            if (sp >= 1){
                btn.value = "*Math.PI";
                calc += btn.value;
                document.dentaku.pi.value = "×π";
                document.dentaku.display.value += btn.value;
                document.dentaku.pi.value = "π";
                sp++
            }
            else if (num >= 1){
                btn.value = "*Math.PI";
                calc += btn.value;
                document.dentaku.pi.value = "π";
                document.dentaku.display.value += btn.value;
                sp++
            }
            else {
                btn.value = "Math.PI";
                calc += btn.value;
                document.dentaku.pi.value = "π";
                document.dentaku.display.value += btn.value;
                sp++
            }
        }
        else if (btn.value == "cos") {
            if (calc == "") {
                document.dentaku.display.value = "";
            }
            if (sp >= 1){
                btn.value = "*Math.cos(";
                calc += btn.value;
                document.dentaku.cos.value = "×cos(";
                document.dentaku.display.value += btn.value;
                document.dentaku.cos.value = "cos";
                sp++
            }
            else if (num >= 1){
                btn.value = "*Math.cos(";
                calc += btn.value;
                document.dentaku.cos.value = "cos(";
                document.dentaku.display.value += btn.value;
                document.dentaku.cos.value = "cos";
                sp++
            }
            else {
                btn.value = "Math.cos(";
                calc += btn.value;
                document.dentaku.cos.value = "cos(";
                document.dentaku.display.value += btn.value;
                document.dentaku.cos.value = "cos";
                sp++
            }
            aaaa = 1;
        }
        else if (btn.value == "log") {
            if (calc == "") {
                document.dentaku.display.value = "";
            }
            if (sp >= 1){
                btn.value = "*Math.log10(";
                calc += btn.value;
                document.dentaku.log.value = "×log(";
                document.dentaku.display.value += btn.value;
                document.dentaku.log.value = "log";
                sp++
            }
            else if (num >= 1){
                btn.value = "*Math.log10(";
                calc += btn.value;
                document.dentaku.log.value = "log(";
                document.dentaku.display.value += btn.value;
                document.dentaku.log.value = "log";
                sp++
            }
            else {
                btn.value = "Math.log10(";
                calc += btn.value;
                document.dentaku.log.value = "log(";
                document.dentaku.display.value += btn.value;
                document.dentaku.log.value = "log";
                sp++
            }
            aaaa = 1;
        }
        else if (btn.value == "e") {
            if (calc == "") {
                document.dentaku.display.value = "";
            }
            if (sp >= 1){
                btn.value = "*Math.E";
                calc += btn.value;
                document.dentaku.e.value = "×e";
                document.dentaku.display.value += btn.value;
                document.dentaku.e.value = "e";
                sp++
            }
            else if (num >= 1){
                btn.value = "*Math.E";
                calc += btn.value;
                document.dentaku.e.value = "e";
                document.dentaku.display.value += btn.value;
                sp++
            }
            else {
                btn.value = "Math.E";
                calc += btn.value;
                document.dentaku.e.value = "e";
                document.dentaku.display.value += btn.value;
                sp++
            }
        }
        else if (btn.value == "tan") {
            if (calc == "") {
                document.dentaku.display.value = "";
            }
            if (sp >= 1){
                btn.value = "*Math.tan(";
                calc += btn.value;
                document.dentaku.tan.value = "×tan(";
                document.dentaku.display.value += btn.value;
                document.dentaku.tan.value = "tan";
                sp++
            }
            else if (num >= 1){
                btn.value = "*Math.tan(";
                calc += btn.value;
                document.dentaku.tan.value = "tan(";
                document.dentaku.display.value += btn.value;
                document.dentaku.tan.value = "tan";
                sp++
            }
            else {
                btn.value = "Math.tan(";
                calc += btn.value;
                document.dentaku.tan.value = "tan(";
                document.dentaku.display.value += btn.value;
                document.dentaku.tan.value = "tan";
                sp++
            }
            aaaa = 1;
        }
        else if (btn.value == "√") { 
            if (calc == "") {
                document.dentaku.display.value = "";
            }
            btn.value = "**0.5";
            calc += btn.value;
            document.dentaku.rute.value = "√(";
            document.dentaku.display.value += btn.value;
            document.dentaku.rute.value = "√";
        }
        else if (btn.value == "(") {
            if (calc == "") {
                document.dentaku.display.value = "";
            }
            calc += btn.value;
            document.dentaku.display.value += btn.value;
    
        }
    }

    if (!(btn.value == "π") && !(btn.value == "e")) {
        sp = 0;
    }
    else if (sp >= 1) {
        time = 0;
    }
    else {
        num = 0;
    }

}
