function getInputFieldValue (elementId) {
    const element = document.getElementById(elementId);
    const elementValue = parseFloat(element.value);
    if(!isNaN(elementValue) && elementValue !== '' && elementValue >= 0) {
        return elementValue;
    }
    else {
        return false;
    }
}

function getTextFieldValue (elementId) {
    const element = document.getElementById(elementId);
    const elementValue = parseFloat(element.innerText);
    if(!isNaN(elementValue) && elementValue !== '' && elementValue >= 0) {
        return elementValue;
    }
    else {
        false
    }
}

function setTextFieldValue (elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}