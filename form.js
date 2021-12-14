const firstNameElement = document.getElementById("first-name");
const lastNameElement = document.getElementById("last-name");
const descriptionElement = document.getElementById("description");
const balanceElement = document.getElementById("balance");
const rateElement = document.getElementById("rate");
const currencyElement = document.getElementById("currency");
const customerStatusElement = document.getElementById("customer-status");
const form = document.getElementById("form");
const numberElement = document.getElementById("number");
const depositElement = document.getElementById("deposit");
const addCustomer = document.getElementById("add");
const progressElement = document.getElementById("progress");
const validationForm = document.getElementById("validation-form");
const submitBtn = document.getElementById("submit");
const updateBtn = document.getElementById("update");
const formHeaderElement = document.getElementById("form-header");
const cancelBtn = document.getElementById("cancel");
const percentElement = document.getElementById("percent");
const progressBarElement = document.getElementById("prog-bar");
let inputsElements = [currencyElement, customerStatusElement, descriptionElement, depositElement, firstNameElement, rateElement, lastNameElement, balanceElement, numberElement];
let customerToUpdate;

function countValidInputs(inputs) {
    return inputs.filter(input => input.classList.contains("success")).length;
}

let customers = JSON.parse(localStorage.getItem("customers")) ? JSON.parse(localStorage.getItem("customers")) : [];

handleForm()

function showProgress(progressValue) {
    progressBarElement.classList.remove("hide-element");
    progressElement.style.width = `${progressValue}%`;
    percentElement.textContent = `Progress: ${progressValue} %`;
    progressValue === 100 ? progressBarElement.classList.add("flipe-bar") : progressBarElement.classList.remove("flipe-bar");
}

function upDateProgressValue(validInputs) {
    let progress = (100 / 9) * validInputs;
    progress = Math.round(progress);
    showProgress(progress);
}

function setCustomersInLocalStorage(originalCustomesList) {
    return localStorage.setItem("customers", JSON.stringify(originalCustomesList));
}

updateBtn.addEventListener("click", () => {
    let isAllInputsValid = isInputsValiditySuccess(inputsElements);

    if (isAllInputsValid) {
        let customerData = getCustomerDataFromUser(true);
        let customerToUpdateIndex = getParameters("index");
        let newUrl;
        if (getParameters("duplicate")) {
            customerToUpdateIndex++;
            spliceDataInOriginalList(customers, customerToUpdateIndex, customerData, 0);
            newUrl = `index.html?duplicate=true&&index=${customerToUpdateIndex}`;

        } else {
            spliceDataInOriginalList(customers, customerToUpdateIndex, customerData, 1);
            newUrl = `index.html?update=true&&index=${customerToUpdateIndex}`;
        }
        window.location.replace(newUrl);
    }

})

function ToggledisabledInputs() {
    inputsElements.forEach(input => {
        if ((input.name !== "number") && (input.name !== "first-name")) {
            input.disabled = true;
        }
    })
}

cancelBtn.addEventListener("click", () => {
    window.location.replace("index.html");
})

function getCustomerDataFromUser(higlighted) {
    let firstName = firstNameElement.value.trim() !== "" ?
        valuecapitalize(firstNameElement.value) :
        firstNameElement.value;
    let lastName = lastNameElement.value.trim() !== "" ?
        valuecapitalize(lastNameElement.value) :
        lastNameElement.value;
    let id = numberElement.value;
    let description = descriptionElement.value;
    let rate = rateElement.value;
    let balance = balanceElement.value;
    let status = customerStatusElement.value;
    let deposit = depositElement.value;
    let currency = currencyElement.value;
    return {
        currency,
        rate,
        firstName,
        id,
        lastName,
        description,
        balance,
        deposit,
        status,
        higlighted
    };
}

function valuecapitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputsValidation(customers);
    let isAllInputsValid = isInputsValiditySuccess(inputsElements);

    if (isAllInputsValid) {
        let customerData = getCustomerDataFromUser(true);
        let specificIndex = getParameters("spIndex");

        if (specificIndex) {
            spliceDataInOriginalList(customers, specificIndex, customerData, 0);
        } else {
            spliceDataInOriginalList(customers, 0, customerData, 0);
        }
        let newUrl = `index.html?add=true&&spIndex=${specificIndex}`
        window.location.replace(newUrl);
    }
})

function spliceDataInOriginalList(originalCustomesList, customerIndex, customerDataFromUser, deleteCount) {
    originalCustomesList.splice(customerIndex, deleteCount, customerDataFromUser);
    setCustomersInLocalStorage(customers);
}

firstNameElement.addEventListener("input", () => {
    if (!updateBtn.classList.contains("hide-element")) {
        firstNameValidity(firstNameElement, customersFiltredForUpdateOperation(customers, customerToUpdate));
    } else {
        firstNameValidity(firstNameElement, customers);
    }
    upDateProgressValue(countValidInputs(inputsElements))
})

lastNameElement.addEventListener("input", () => {
    lastNameValidity(lastNameElement);
    upDateProgressValue(countValidInputs(inputsElements))
})

numberElement.addEventListener("input", () => {
    if (!updateBtn.classList.contains("hide-element")) {
        numberValidity(numberElement, customersFiltredForUpdateOperation(customers, customerToUpdate));
    } else {
        numberValidity(numberElement, customers);
    }
    upDateProgressValue(countValidInputs(inputsElements))
})

rateElement.addEventListener("input", () => {
    ratetValidity(rateElement);
    upDateProgressValue(countValidInputs(inputsElements))
})

balanceElement.addEventListener("input", () => {
    balanceValidity(balanceElement);
    upDateProgressValue(countValidInputs(inputsElements))
})

customerStatusElement.addEventListener("input", () => {
    statusValidity(customerStatusElement);
    upDateProgressValue(countValidInputs(inputsElements))
})

descriptionElement.addEventListener("input", () => {
    descriptionValidity(descriptionElement);
    upDateProgressValue(countValidInputs(inputsElements))
})

depositElement.addEventListener("input", () => {
    depositValidity(depositElement);
    upDateProgressValue(countValidInputs(inputsElements))
})

currencyElement.addEventListener("input", () => {
    currencyValidity(currencyElement);
    upDateProgressValue(countValidInputs(inputsElements))
})

firstNameElement.addEventListener("blur", (e) => {
    if (!e.target.value) firstNameValidity(firstNameElement, customers);
})

lastNameElement.addEventListener("blur", (e) => {
    if (!e.target.value) lastNameValidity(lastNameElement);
})

numberElement.addEventListener("blur", (e) => {
    if (!e.target.value) numberValidity(numberElement, customers);
})

rateElement.addEventListener("blur", (e) => {
    if (!e.target.value) ratetValidity(rateElement);
})

balanceElement.addEventListener("blur", (e) => {
    if (!e.target.value) balanceValidity(balanceElement);
})

customerStatusElement.addEventListener("blur", (e) => {
    if (!e.target.value) statusValidity(customerStatusElement);
})

descriptionElement.addEventListener("blur", (e) => {
    if (!e.target.value) descriptionValidity(descriptionElement);
})

depositElement.addEventListener("blur", (e) => {
    if (!e.target.value) depositValidity(depositElement);
})

currencyElement.addEventListener("blur", (e) => {
    if (!e.target.value) currencyValidity(currencyElement);
})

function lastNameValidity(input) {
    if (hasValue(input)) {
        return false;
    } else if (checkOnlyLetters(input, /^[a-zA-Z]*$/)) {
        return false;
    } else {
        return true
    }
}

function firstNameValidity(input, originalCustomers) {
    if (hasValue(input)) {
        return false;
    } else if (checkOnlyLetters(input, /^[a-zA-Z]*$/)) {
        return false;
    } else if (isFirstNameExist(input, originalCustomers)) {
        return false;
    } else {
        return true
    }
}

function numberValidity(input, originalCustomers) {
    if (hasValue(input)) {
        return false;
    } else if (isNumber(input)) {
        return false
    } else if (validLength(input)) {
        return false;
    } else if (isNumberExist(input, originalCustomers)) {
        return false;
    }
    return true;
}

function statusValidity(input) {
    if (hasValue(input)) {
        return false;
    }
    return true;
}

function depositValidity(input) {
    if (hasValue(input)) {
        return false;
    } else if (isNumber(input)) {
        return false;
    }
    return true;
}

function ratetValidity(input) {
    if (hasValue(input)) {
        return false;
    } else if (isNumber(input)) {
        return false;
    }
    return true;
}

function balanceValidity(input) {
    if (hasValue(input)) {
        return false;
    } else if (isNumber(input)) {
        return false;
    }
    return true;
}

function currencyValidity(input) {
    if (hasValue(input)) {
        setErrorForInput(input, `should select ${input.name}`);
        return false;
    }
    setSuccessForInput(input);
    return true;
}

function descriptionValidity(input) {
    if (hasValue(input)) {
        return false;
    } else if (validLength(input)) {
        return false;
    }
    return true
}

function hasValue(input) {
    if (!input.value.trim()) {
        setErrorForInput(input, `${input.name} can't be blanck`);
        return true;
    }
    setSuccessForInput(input)
    return false;
}

function validLength(input) {
    if (input.value.length < 10) {
        if (input.name === "number") {
            setErrorForInput(input, `${input.name} should be 10 digits`);
        } else {
            setErrorForInput(input, `${input.name} should at least have 10 characters`);
        }
        return true;
    }
    setSuccessForInput(input);
    return false;
}

function isNumberExist(input, originalCustomers) {
    let isExist = originalCustomers.some(customer => customer.id == input.value);
    if (isExist) {
        setErrorForInput(input, `${input.name} already exist`);
        return true;
    }
    setSuccessForInput(input)
    return false;
}

function isFirstNameExist(input, originalCustomers) {
    let isExist = originalCustomers.some(customer => customer.firstName.toLowerCase() === input.value.toLowerCase());
    if (isExist) {
        setErrorForInput(input, `${input.name} already exist`);
        return true;
    }
    setSuccessForInput(input);
    return false;
}

function isNumber(input) {
    if (isNaN(input.value)) {
        setErrorForInput(input, `${input.name} should be numbers`);
        return true
    }
    setSuccessForInput(input);
    return false
}

function checkOnlyLetters(input, regx) {
    if (!input.value.match(regx)) {
        setErrorForInput(input, `${input.name} should contains only letters`);
        return true;
    }
    setSuccessForInput(input)
    return false;
}

function checkInputsValidation(originalCustomers) {
    firstNameValidity(firstNameElement, originalCustomers);
    lastNameValidity(lastNameElement);
    descriptionValidity(descriptionElement);
    statusValidity(customerStatusElement);
    currencyValidity(currencyElement);
    numberValidity(numberElement, originalCustomers);
    depositValidity(depositElement);
    ratetValidity(rateElement);
    balanceValidity(balanceElement);
}

function isInputsValiditySuccess(inputsList) {
    return inputsList.every(input => input.classList.contains("success"))
}

function setErrorForInput(input, error) {
    let errorField = input.nextElementSibling;
    let successIcon = input.parentNode.lastElementChild;
    input.classList.add("error");
    input.classList.remove("success");
    successIcon.classList.remove("show");
    errorField.innerHTML = `<i class="fas fa-exclamation"></i> ${error}`;
}

function setSuccessForInput(input) {
    let errorField = input.nextElementSibling;
    let successIcon = errorField.nextElementSibling;
    input.classList.add("success");
    errorField.innerHTML = "";
    successIcon.classList.add("show");
}

function fillInputsField(customerData) {
    let { firstName, lastName, description, rate, balance, deposit, status, id, currency } = customerData;
    firstNameElement.value = firstName;
    lastNameElement.value = lastName;
    numberElement.value = id;
    balanceElement.value = balance;
    rateElement.value = rate;
    depositElement.value = deposit;
    currencyElement.value = currency;
    customerStatusElement.value = status;
    descriptionElement.value = description;
}

function customersFiltredForUpdateOperation(originalCustomesList, customerTo) {
    return originalCustomesList.filter(customer => customer.id != customerTo.id);
}

function getParameters(parName) {
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(parName)
}

function handleForm() {
    if (getParameters("duplicate")) {
        formHeaderElement.innerText = "duplicate Customer";
        submitBtn.classList.add("hide-element");
        updateBtn.classList.remove("hide-element");
        updateBtn.textContent = "duplicate";
        let index = getParameters("index");
        customerToUpdate = customers[index];
        fillInputsField(customerToUpdate);
        ToggledisabledInputs();
        checkInputsValidation(customers);
        upDateProgressValue(countValidInputs(inputsElements));
    } else if (getParameters("update")) {
        formHeaderElement.innerText = "update Customer";
        submitBtn.classList.add("hide-element");
        updateBtn.classList.remove("hide-element")
        let index = getParameters("index");
        customerToUpdate = customers[index];
        fillInputsField(customerToUpdate);
        checkInputsValidation(customersFiltredForUpdateOperation(customers, customerToUpdate));
        upDateProgressValue(countValidInputs(inputsElements));
    }
}