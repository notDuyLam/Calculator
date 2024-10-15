function calculate () {
    const input1 = parseFloat(document.getElementById("input1").value);
    const input2 = parseFloat(document.getElementById("input2").value);
    const output = document.getElementById("output");
    let result;
    const selectedRadio = document.querySelector('input[name="operator"]:checked');

    if (selectedRadio == null) {
        alert("Hãy chọn 1 phép tính!!!");
        return;
    }
    else if (selectedRadio.value === "add") {
        result = input1 + input2;
    }
    else if (selectedRadio.value === "subtract") {
        result = input1 - input2;
    }
    else if (selectedRadio.value === "multiply") {
        result = input1 * input2;
    }
    else if (selectedRadio.value === "divide") {
        if (input2 === 0) {
            alert("Không thể chia cho 0")
        }
        result = input1 / input2;
    }
    const regex = /^[0-9]+$/; 
    if(!regex.test(result)) {
        output.value = "Không thể tính"
    }
    else {
        output.value = result;
    }
}

function validateInput1() {
    const input1 = document.getElementById("input1").value;
    const regex = /^[0-9]+$/; 

    if (input1 === "") {}
    else if (!regex.test(input1)) {
        alert("Vui lòng chỉ nhập số!");
    }
}

function validateInput2() {
    const input2 = document.getElementById("input2").value;
    const regex = /^[0-9]+$/;


    if (input2 === "") {}
    else if (!regex.test(input2)) {
        alert("Vui lòng chỉ nhập số!");
    }
}


