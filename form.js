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
const btnGroupElement = document.getElementById("btn-group");
const cancelBtn = document.getElementById("cancel");
const percentElement = document.getElementById("percent");
const progressBarElement = document.getElementById("prog-bar");
let inputsElements = [currencyElement, customerStatusElement, descriptionElement, depositElement, firstNameElement, rateElement, lastNameElement, balanceElement, numberElement];
let customerToUpdate;

function countValidInputs(inputs) {
    return inputs.filter(input => input.classList.contains("success")).length;
}

let customers = JSON.parse(localStorage.getItem("customers")) ? JSON.parse(localStorage.getItem("customers")).map(customer => Object.assign(customer, { "selected": false, "protected": false })) : [];

function showProgress(progressValue) {
    progressBarElement.classList.remove("hide-element");
    progressElement.style.width = `${progressValue}%`;
    percentElement.textContent = `Progress: ${progressValue} %`;
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
    console.log(isAllInputsValid)
    if (isAllInputsValid) {
        let customerData = getCustomerDataFromUser();
        let customerToUpdateIndex = customers.indexOf(customerToUpdate);

        if (localStorage.getItem("duplicate")) {
            let index = localStorage.getItem("index");
            index++;
            customers.splice(index, 0, getCustomerDataFromUser());
            setCustomersInLocalStorage(customers);
            window.location = "table.html";

        } else {
            updateTable(inputsElements, customerData, customerToUpdateIndex, "update", 1);
        }
    }

})

function ToggledisabledInputs(option) {
    inputsElements.forEach(input => {
        if (option) {
            if ((input.name !== "number") && (input.name !== "first-name")) {
                input.disabled = true;
            }
        } else {
            if ((input.name !== "number") && (input.name !== "first-name")) {
                input.disabled = false;
            }
        }
    })
}

cancelBtn.addEventListener("click", () => {
    restInputsValue(inputsElements);
    restInputsStyle(inputsElements);
    let tableRowElement = document.getElementById(customerToUpdate.id);
    showUpHiglightedcustomer(tableRowElement);
    upDateProgressValue(countValidInputs(inputsElements));
    submitBtn.classList.remove("hide-element");
    btnGroupElement.classList.remove("btn-group");
    formHeaderElement.innerText = "Add Customer";
    submitBtn.classList.remove("hide-element");
    btnGroupElement.classList.remove("btn-group");
    formHeaderElement.innerText = "Add Customer";
    progressBarElement.classList.add("hide-element");
})

function getCustomerDataFromUser() {
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
        status
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
        if (localStorage.getItem("spIndex")) {
            let customerData = getCustomerDataFromUser();
            let index = localStorage.getItem("spIndex");
            console.log(localStorage.getItem("spIndex"))
            updateTable(inputsElements, customerData, index, "Add");
            window.location = "table.html"
        } else {
            let customerData = getCustomerDataFromUser();

            updateTable(inputsElements, customerData, 0, "Add");
            window.location = "table.html"
        }
        // specificIndex = 0;
    }
})

function spliceDataInOriginalList(originalCustomesList, customerIndex, customerDataFromUser, deleteCount = 0) {
    originalCustomesList.splice(customerIndex, deleteCount, customerDataFromUser)
}

function updateTable(inputsList, customerDataFromUser, index, message, deleteCount) {
    spliceDataInOriginalList(customers, index, customerDataFromUser, deleteCount)
    setCustomersInLocalStorage(customers);
    localStorage.setItem("id", customerDataFromUser.id)
        // restInputsValue(inputsList);
        // restInputsStyle(inputsList);
        // render(customers);
        // let tableRowElement = document.getElementById(customerDataFromUser.id);
        // showUpHiglightedcustomer(tableRowElement);
        // showNotification(notificationElement, customerDataFromUser.firstName, message);
        // upDateProgressValue(countValidInputs(inputsList));
}

function changeCheckAllInputStatus(customersList) {
    let isAllChecked = customersList.every(customer => customer.selected);
    isAllChecked = customersList.length === 0 ? false : isAllChecked;

    if (isAllChecked) {
        checkAllInputElement.checked = true;
    } else {
        checkAllInputElement.checked = false;
    }
}

firstNameElement.addEventListener("input", () => {
    if (btnGroupElement.classList.contains("btn-group")) {
        firstNameValidity(firstNameElement, customersFiltredForUpdate(customers, customerToUpdate));
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
    if (btnGroupElement.classList.contains("btn-group")) {
        numberValidity(numberElement, customersFiltredForUpdate(customers, customerToUpdate));
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

function lastNameValidity(input) {
    if (hasValue(input)) {
        return false;
    } else if (checkOnlyLetters(input, "[a-zA-Z]+$")) {
        return false;
    } else {
        return true
    }
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

function isInputsValiditySuccess(inputsList) {
    return inputsList.every(input => input.classList.contains("success"))
}

function restInputsValue(inputs) {
    inputs.forEach(input => input.value = "");
    customerStatusElement.selectedIndex = 0;
    currencyElement.selectedIndex = 0;
}

function restInputsStyle(inputs) {
    inputs.forEach((input) => {
        input.classList.remove("success", "error");
        input.nextElementSibling.innerHTML = "";
        //set success Icon visibility hidden
        input.nextElementSibling.nextElementSibling.classList.remove("show");
    });
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

function fillInputsField(customer) {
    let { firstName, lastName, description, rate, balance, deposit, status, id, currency } = customer;

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

function customersFiltredForUpdate(originalCustomesList, customerTo) {
    return originalCustomesList.filter(customer => customer.id != customerTo.id);
}

window.onload = function() {
    if (localStorage.getItem("duplicate")) {
        formHeaderElement.innerText = "duplicate Customer";
        submitBtn.classList.add("hide-element");
        btnGroupElement.classList.add("btn-group");
        btnGroupElement.classList.remove("hide-element");
        btnGroupElement.firstElementChild.textContent = "duplicate";
        let index = localStorage.getItem("index");
        customerToUpdate = customers[index];
        fillInputsField(customerToUpdate);
        checkInputsValidation(customers);
        upDateProgressValue(countValidInputs(inputsElements));
        console.log(customerToUpdate.id)
    }
};