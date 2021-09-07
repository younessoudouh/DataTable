let customers = [{
        firstName: "Estefânio",
        lastName: "de Souza",
        id: 1290763872,
        description: "Reach the full potential of your Customer Experience blueprint with Kinetic CX as your implementation",
        rate: "70.00",
        balance: "000.00",
        deposit: "560.00",
        status: "active"
    },
    {
        firstName: "Alexis",
        lastName: "White",
        id: 1188763567,
        description: " employee development, or journey mapping, our professionals have the tools and",
        rate: "50.00",
        balance: "700.00",
        deposit: "960.0",
        status: "inactive"
    },
    {
        firstName: "Wyatt",
        lastName: "loof Cox",
        id: 7867875643,
        description: "We provide more than just expert customer experience professionals for your project.",
        rate: "70.00",
        balance: "700.00",
        deposit: "960.00",
        status: "inactive"
    },
    {
        firstName: "Leo",
        lastName: "Jarvi",
        id: 7376543210,
        description: "Being able to deliver consistently high levels of services across all touchpoints at every",
        rate: "60.00",
        balance: "400.00",
        deposit: "360.00",
        status: "active"
    },
    {
        firstName: "Anaëlle",
        lastName: "Olivier",
        id: 6789056789,
        description: "Organizations are continuously seeking to deliver new value for their customers to build trust and loyalty.",
        rate: "60.00",
        balance: "-350.00",
        deposit: "160.00",
        status: "active"
    },
    {
        firstName: "Matilda",
        lastName: "Wang",
        id: 0989098767,
        description: " Let our professionals in process excellence and training instil new work practices that can",
        rate: "70.00",
        balance: "550.00",
        deposit: "500.00",
        status: "inactive"
    },
    {
        firstName: "Pilar",
        lastName: "de Ramirez",
        id: 3345432345,
        description: "initiative, our objective is to empower your employees to deliver your CX vision continually.",
        rate: "20.00",
        balance: "900.00",
        deposit: " 100.00",
        status: "active"
    }, {
        firstName: "James",
        lastName: "Herrera",
        id: 1123450003,
        description: "gem materials (including amber, jet, coral, ivory, pearls, tortoise-shell, and synthetic stones",
        rate: "40.00",
        balance: "-550.00",
        deposit: "709.00",
        status: "inactive"
    }, {
        firstName: "Storm",
        lastName: "Moller",
        id: 3345432245,
        description: "Volume 2 presents a history of gem testing, describes the use and working of a number of",
        rate: "50.00",
        balance: "450.00",
        deposit: "200.00",
        status: "inactive"
    }, {
        firstName: "Monica",
        lastName: "Cruz",
        id: 1000454323,
        description: "The title should describe what the article shows the reader. Do not begin the title with the word",
        rate: "50.00",
        balance: "-550.00",
        deposit: "879.00",
        status: "active"
    }, {
        firstName: "Ryder",
        lastName: "Li",
        id: 3555432345,
        description: "alphabetize articles. Try “Joining a Conversation” rather than “How to Join a Conversation",
        rate: "30.00",
        balance: "-300.00",
        deposit: " 200.00",
        status: "inactive"
    }, {
        firstName: "Emir",
        lastName: "Hoff",
        id: 1100445323,
        description: "The slug is the link to the article. Keep it short. The slug for “Joining a Conversation",
        rate: "20.00",
        balance: "-550.00",
        deposit: "700.00",
        status: "active"
    }, {
        firstName: "Emily",
        lastName: "King",
        id: 1123455443,
        description: "Most articles are related to other articles. Type in the beginning of the name of a related article.",
        rate: "40.00",
        balance: "-200.00",
        deposit: "800.00",
        status: "inactive"
    }, {
        firstName: "Maximilian",
        lastName: "Lucas",
        id: 7778432345,
        description: " Keywords can improve search results by adding terms that are not included in the article's Search result summary.",
        rate: "50.00",
        balance: "500.00",
        deposit: " 400.00",
        status: "active"
    }, {
        firstName: "Vildan",
        lastName: "Tüzün",
        id: 1123888873,
        description: " Doing so will lower the amount of points awarded to your keyword, resulting in your article's search ranking diminishing. ",
        rate: "30.00",
        balance: "-250.00",
        deposit: "780.00",
        status: "inactive"
    }, {
        firstName: "Klaus",
        lastName: "Roy",
        id: 1100004323,
        description: "In search result summary, type in a sentence or two that explains what the article is about. Try to include keywords in those sentences.",
        rate: "40.00",
        balance: "450.00",
        deposit: "760.00",
        status: "inactive"
    }, {
        firstName: "Florência",
        lastName: "Souza",
        id: 1123000000,
        description: "refrain from adding related documents in new articles that will be pending review. ",
        rate: "45.00",
        balance: "750.00",
        deposit: "650.00",
        status: "active"
    }, {
        firstName: "Lorraine",
        lastName: "Chambers",
        id: 1123066700,
        description: " there are drop down menus. If your article is relevant to Firefox ",
        rate: "55.00",
        balance: "-550.00",
        deposit: "950.00",
        status: "active"
    }, {
        firstName: "Brandon",
        lastName: "Byrd",
        id: 1123067230,
        description: "We often acquire knowledge about the world through the detailed process of Description.",
        rate: "60.00",
        balance: "250.00",
        deposit: "350.00",
        status: "inactive"
    }, {
        firstName: "Alvin",
        lastName: "Ferguson",
        id: 8989067230,
        description: "Representing the work of students from hundreds of institutions around the globe",
        rate: "30.00",
        balance: "-550.00",
        deposit: "550.00",
        status: "inactive"
    }, {
        firstName: "Asuncion",
        lastName: "Moreno",
        id: 8987878730,
        description: "Depending on the expedited review option you choose, you can receive a decision in as few as 5-days.",
        rate: "10.00",
        balance: "-650.00",
        deposit: "750.00",
        status: "active"
    }
];

const tableElement = document.getElementById("table");
const searchElement = document.getElementById("search");
const statusElement = document.getElementById("status");
const nameElement = document.getElementById("name");
const activeCustomerElement = document.getElementById("active-clients");
const selectElement = document.getElementById("select");
const displayedCustomerElement = document.getElementById("displayed-customer");
const previousPageElement = document.getElementById("prevouis-page");
const nextPageElement = document.getElementById("next-page");

let sortStatusOrder, sortNameOrder;
let currentPage = 1;
let rowsPerPage;
let customersReadyToRender;

render(customers);

function render(customersToRender) {
    tableElement.innerHTML = "";
    rowsPerPage = selectElement.value;

    let searchedCustomers = searchCustomersByName(customersToRender);
    let sortedCustomersByStatus = sortCustomersByStatus(searchedCustomers, sortStatusOrder);
    let sortedCustomersByName = sortCustomersByName(sortedCustomersByStatus, sortNameOrder)
    customersReadyToRender = sortedCustomersByName;

    let currentCustomers = customersReadyToRender.slice((currentPage - 1) * rowsPerPage, rowsPerPage * (currentPage));
    currentCustomers.forEach(customer => {
        const row = createElement(customer)
        tableElement.append(row)
    });

    activeCustomerElement.innerHTML = `active customers:
     <strong>${countActiveCustomers(sortedCustomersByName)}</strong> / 
     <small>${sortedCustomersByName.length}</small>`;

    displayedCustomerElement.innerHTML = `${(currentPage-1)*rowsPerPage}-${(currentCustomers.length-rowsPerPage)+rowsPerPage*(currentPage)} of ${sortedCustomersByName.length}`
}

function createElement(customer) {
    let { firstName, lastName, description, rate, balance, deposit, status, id } = customer;
    let row = document.createElement("tr");

    row.innerHTML = `
    <td><input type="checkbox"  id="check"></td>
    <td>
        <h5 class="customer-name">${firstName} ${lastName}</h5>
        <div class="customer-id"> ${id}</div>
    </td>
    <td>
        <p class="description">${description}</p>
    </td>
    <td>
        <span class="rate-number">${rate}</span>
        <h4 class="inr">inr</h4>
    </td>
    <td>
        <span class="${checkBalance(balance)}">${balance}</span>
        <h4 class="inr">inr</h4>
    </td>
    <td>
        <span class="deposite-number">${deposit}</span>
        <h4 class="inr">inr</h4>
    </td>
    <td>
        <button class="${status} ">${status}</button>
    </td>
    `
    let trash = document.createElement("td");
    let trashIcon = document.createElement("i");
    trashIcon.onclick = () => {
        customers = deleteCustomer(customers, id)
        render(customers)
    };
    trashIcon.classList.add("fa-trash-alt", "delet", "fas");
    trash.appendChild(trashIcon);
    row.appendChild(trash);

    return row;
}

function checkBalance(amount) {
    if (amount > 0) return "positive";
    if (amount < 0) return "negative";
    return;
}

searchElement.addEventListener("keyup", () => {
    currentPage = 1;
    rowsPerPage = selectElement.value;
    render(customers)
})

nameElement.addEventListener("click", () => {
    if (sortStatusOrder != undefined) {
        sortStatusOrder = undefined;
        statusElement.classList.remove("sort-desc", "sort-asc")
    }

    if (sortNameOrder === "asc") {
        sortNameOrder = "desc";
        nameElement.classList.add("sort-desc");
    } else if (sortNameOrder === undefined) {
        sortNameOrder = "asc";
        nameElement.classList.add("sort-asc");
    } else {
        sortNameOrder = undefined;
        nameElement.classList.remove("sort-desc", "sort-asc");
    }
    render(customers)
})

statusElement.addEventListener("click", () => {
    if (sortNameOrder != undefined) {
        sortNameOrder = undefined;
        nameElement.classList.remove("sort-desc", "sort-asc");
    }

    if (sortStatusOrder === "asc") {
        sortStatusOrder = "desc";
        statusElement.classList.add("sort-desc")
    } else if (sortStatusOrder === undefined) {
        sortStatusOrder = "asc";
        statusElement.classList.add("sort-asc")
    } else {
        sortStatusOrder = undefined;
        statusElement.classList.remove("sort-desc", "sort-asc")
    }
    render(customers)
})

function searchCustomersByName(customersToSearchIn) {
    let searchValue = searchElement.value.toLowerCase();
    let searchedCustomers = customersToSearchIn.filter(customer => {
        return (customer.firstName.toLowerCase()).includes(searchValue) | customer.lastName.toLowerCase().includes(searchValue) || customer.description.toLowerCase().includes(searchValue);
    })
    return searchedCustomers;
}

function sortCustomersByStatus(originCustomers, sortOrder) {

    if (sortOrder === "asc") return originCustomers.sort((customer1, customer2) => (customer1.status > customer2.status) ? 1 : -1);
    if (sortOrder === "desc") return originCustomers.sort((customer1, customer2) => (customer1.status > customer2.status) ? -1 : 1);
    return originCustomers;
}

function sortCustomersByName(originCustomers, sortOrder) {

    if (sortOrder === "asc") return originCustomers.sort((customer1, customer2) => (customer1.firstName > customer2.firstName) ? 1 : -1);
    if (sortOrder === "desc") return originCustomers.sort((customer1, customer2) => (customer1.firstName > customer2.firstName) ? -1 : 1);
    return originCustomers;
}

function deleteCustomer(originCustomers, customerId) {
    if (confirm("are you sure")) {
        return originCustomers = originCustomers.filter(customer => {
            return customer.id != customerId;
        })
    }
}

function countActiveCustomers(customersToCountIn) {
    return customersToCountIn.filter(customer => {
        return customer.status === "active";
    }).length;
}

selectElement.addEventListener("change", () => {
    render(customers)
})

nextPageElement.addEventListener("click", () => {
    customersReadyToRender.length > rowsPerPage * currentPage ? currentPage += 1 : currentPage = currentPage;
    render(customers)
})

previousPageElement.addEventListener("click", () => {
    currentPage > 1 ? currentPage -= 1 : currentPage = currentPage;
    render(customers)
})