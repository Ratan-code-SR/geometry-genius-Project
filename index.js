/*  triangle*/
const outputTriangleDisplayFunction  = ()=>{
    const baseInput = findInputValue("base-input")
    const heightInput = findInputValue("height-input");
    const result = parseFloat(baseInput * heightInput).toFixed(2);
    setInnerText("display1", result);
}


/* rectangle  */

const outputRectangleDisplayFunction  = ()=>{
    const widthValue = findInputValue("input-width")
    const widthLength = findInputValue("input-length");
    const result = parseFloat(widthValue * widthLength).toFixed(2);
    setInnerText("display2", result);
}

/* parallelogram */
const outputParallelogramDisplayFunction  = ()=>{
    const baseValue = findInputValue("para-base")
    const heightValue = findInputValue("para-height");
    const result = parseFloat(baseValue * heightValue).toFixed(2);
    setInnerText("display3", result);
}





/* display find function */
const setInnerText = (innerTextId, result) => {
    const innerText = document.getElementById(innerTextId);
    innerText.innerText = result;
}

/* input find function */
const findInputValue = (inputValue) => {
    const inputWidth = document.getElementById(inputValue);
    const inputWidthValue = inputWidth.value;
    const finalInput = parseFloat(inputWidthValue);
    return finalInput;
}

