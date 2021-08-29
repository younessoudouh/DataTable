let customers = [{
        name: { first: "Estefânio", last: "de Souza" },
        id: 1290763872,
        description: "Reach the full potential of your Customer Experience blueprint with Kinetic CX as your implementation",
        rate: "70.00",
        balance: {
            amount: "-500.00",
            checkFormat: function() {
                return (this.amount > 0) ? "positive" : "negative";
            }
        },
        deposit: "560.00",
        status: "active"
    },
    {
        name: { first: "Alexis", last: "White" },
        id: 1188763567,
        description: " employee development, or journey mapping, our professionals have the tools and",
        rate: "50.00",
        balance: {
            amount: "700.00",
            checkFormat: function() {
                return (this.amount > 0) ? "positive" : "negative";
            }
        },
        deposit: "960.0",
        status: "inactive"
    },
    {
        name: { first: "Wyatt", last: "loof Cox" },
        id: 7867875643,
        description: "We provide more than just expert customer experience professionals for your project.",
        rate: "70.00",
        balance: {
            amount: "700.00",
            checkFormat: function() {
                return (this.amount > 0) ? "positive" : "negative";
            }
        },
        deposit: "960.00",
        status: "inactive"
    },
    {
        name: { first: "Leo", last: "Jarvi" },
        id: 7376543210,
        description: "Being able to deliver consistently high levels of services across all touchpoints at every",
        rate: "60.00",
        balance: {
            amount: "400.00",
            checkFormat: function() {
                return (this.amount > 0) ? "positive" : "negative";
            }
        },
        deposit: "360.00",
        status: "active"
    },
    {
        name: { first: "Anaëlle", last: "Olivier" },
        id: 6789056789,
        description: "Organizations are continuously seeking to deliver new value for their customers to build trust and loyalty.",
        rate: "60.00",
        balance: {
            amount: "-350.00",
            checkFormat: function() {
                return (this.amount > 0) ? "positive" : "negative";
            }
        },
        deposit: "160.00",
        status: "active"
    },
    {
        name: { first: "Matilda", last: "Wang" },
        id: 0989098767,
        description: " Let our professionals in process excellence and training instil new work practices that can",
        rate: "70.00",
        balance: {
            amount: "550.00",
            checkFormat: function() {
                return (this.amount > 0) ? "positive" : "negative";
            }
        },
        deposit: "500.00",
        status: "inactive"
    },
    {
        name: { first: "Pilar", last: "de Ramirez" },
        id: 3345432345,
        description: "initiative, our objective is to empower your employees to deliver your CX vision continually.",
        rate: "20.00",
        balance: {
            amount: "900.00",
            checkFormat: function() {
                return (this.amount > 0) ? "positive" : "negative";
            }
        },
        deposit: " 100.00",
        status: "active"
    }, {
        name: { first: "James", last: "Herrera" },
        id: 1123450003,
        description: "gem materials (including amber, jet, coral, ivory, pearls, tortoise-shell, and synthetic stones",
        rate: "40.00",
        balance: {
            amount: "-550.00",
            checkFormat: function() {
                return (this.amount > 0) ? "positive" : "negative";
            }
        },
        deposit: "709.00",
        status: "inactive"
    }, {
        name: { first: "Storm", last: "Moller" },
        id: 3345432245,
        description: "Volume 2 presents a history of gem testing, describes the use and working of a number of",
        rate: "50.00",
        balance: {
            amount: "450.00",
            checkFormat: function() {
                return (this.amount > 0) ? "positive" : "negative";
            }
        },
        deposit: "200.00",
        status: "inactive"
    }, {
        name: { first: "Monica", last: "Cruz" },
        id: 1000454323,
        description: "The title should describe what the article shows the reader. Do not begin the title with the word",
        rate: "50.00",
        balance: {
            amount: "-550.00",
            checkFormat: function() {
                return (this.amount > 0) ? "positive" : "negative";
            }
        },
        deposit: "879.00",
        status: "active"
    }, {
        name: { first: "Ryder", last: "Li" },
        id: 3555432345,
        description: "alphabetize articles. Try “Joining a Conversation” rather than “How to Join a Conversation",
        rate: "30.00",
        balance: {
            amount: "-300.00",
            checkFormat: function() {
                return (this.amount > 0) ? "positive" : "negative";
            }
        },
        deposit: " 200.00",
        status: "inactive"
    }, {
        name: { first: "Emir", last: "Hoff" },
        id: 1100445323,
        description: "The slug is the link to the article. Keep it short. The slug for “Joining a Conversation",
        rate: "20.00",
        balance: {
            amount: "-550.00",
            checkFormat: function() {
                return (this.amount > 0) ? "positive" : "negative";
            }
        },
        deposit: "700.00",
        status: "active"
    }, {
        name: { first: "Emily", last: "King" },
        id: 1123455443,
        description: "Most articles are related to other articles. Type in the beginning of the name of a related article.",
        rate: "40.00",
        balance: {
            amount: "-200.00",
            checkFormat: function() {
                return (this.amount > 0) ? "positive" : "negative";
            }
        },
        deposit: "800.00",
        status: "inactive"
    }, {
        name: { first: "Maximilian", last: "Lucas" },
        id: 7778432345,
        description: " Keywords can improve search results by adding terms that are not included in the article's Search result summary.",
        rate: "50.00",
        balance: {
            amount: "500.00",
            checkFormat: function() {
                return (this.amount > 0) ? "positive" : "negative";
            }
        },
        deposit: " 400.00",
        status: "active"
    }, {
        name: { first: "Vildan", last: "Tüzün" },
        id: 1123888873,
        description: " Doing so will lower the amount of points awarded to your keyword, resulting in your article's search ranking diminishing. ",
        rate: "30.00",
        balance: {
            amount: "-250.00",
            checkFormat: function() {
                return (this.amount > 0) ? "positive" : "negative";
            }
        },
        deposit: "780.00",
        status: "inactive"
    }, {
        name: { first: "Klaus", last: "Roy" },
        id: 1100004323,
        description: "In search result summary, type in a sentence or two that explains what the article is about. Try to include keywords in those sentences.",
        rate: "40.00",
        balance: {
            amount: "450.00",
            checkFormat: function() {
                return (this.amount > 0) ? "positive" : "negative";
            }
        },
        deposit: "760.00",
        status: "inactive"
    }, {
        name: { first: "Florência", last: "Souza" },
        id: 1123000000,
        description: "refrain from adding related documents in new articles that will be pending review. ",
        rate: "45.00",
        balance: {
            amount: "750.00",
            checkFormat: function() {
                return (this.amount > 0) ? "positive" : "negative";
            }
        },
        deposit: "650.00",
        status: "active"
    }, {
        name: { first: "Lorraine", last: "Chambers" },
        id: 1123066700,
        description: " there are drop down menus. If your article is relevant to Firefox ",
        rate: "55.00",
        balance: {
            amount: "-550.00",
            checkFormat: function() {
                return (this.amount > 0) ? "positive" : "negative";
            }
        },
        deposit: "950.00",
        status: "active"
    }, {
        name: { first: "Brandon", last: "Byrd" },
        id: 1123067230,
        description: "We often acquire knowledge about the world through the detailed process of Description.",
        rate: "60.00",
        balance: {
            amount: "250.00",
            checkFormat: function() {
                return (this.amount > 0) ? "positive" : "negative";
            }
        },
        deposit: "350.00",
        status: "inactive"
    }, {
        name: { first: "Alvin", last: "Ferguson" },
        id: 8989067230,
        description: "Representing the work of students from hundreds of institutions around the globe",
        rate: "30.00",
        balance: {
            amount: "-550.00",
            checkFormat: function() {
                return (this.amount > 0) ? "positive" : "negative";
            }
        },
        deposit: "550.00",
        status: "inactive"
    }, {
        name: { first: "Asuncion", last: "Moreno" },
        id: 8987878730,
        description: "Depending on the expedited review option you choose, you can receive a decision in as few as 5-days.",
        rate: "10.00",
        balance: {
            amount: "-650.00",
            checkFormat: function() {
                return (this.amount > 0) ? "positive" : "negative";
            }
        },
        deposit: "750.00",
        status: "active"
    }
];

const customerField = document.querySelector("table tbody");
const selectElement = document.querySelector("select");
const activeClientsElement = document.getElementById("active-clients");
const displayRowsElement = document.getElementById("displayed-rows");
const sotrtElements = document.querySelectorAll(".sorting");
const searchField = document.getElementById("search");
const previousPageElement = document.getElementById("prevouis-customers");
const nextPageElement = document.getElementById("next-customers");

addClient(selectRows(customers), customers)

function addClient(clientsDataToDisplay, parentCDTD) {
    customerField.innerHTML = "";
    clientsDataToDisplay.forEach(client => {
        creatElement(client)
    });

    numberOfActiveClients = countActiveClients(parentCDTD);

    activeClientsElement.innerHTML = `active customers: <strong>${numberOfActiveClients}</strong> / <small>${parentCDTD.length}</small> `;
    let firstclient = clientsDataToDisplay.length;
    displayRowsElement.innerHTML = (firstclient === 0) ? displayRowsElement.innerHTML = `${firstclient} of ${parentCDTD.length}` : `1-${clientsDataToDisplay.length} of ${customers.length}`;
}

selectElement.addEventListener("change", () => {
    assignStartINdStopI()
    addClient(selectRows(customers), customers)
});

searchField.addEventListener("keyup", searchClients);
nextPageElement.addEventListener("click", goToNextcustomers);
previousPageElement.addEventListener("click", goToPreviouscustomers);

let startIndex = 0;
let stopIndex = 0;

function goToNextcustomers() {
    if (stopIndex < customers.length && customers.length > selectElement.value) {
        startIndex += selectRows(customers).length;
        stopIndex = (startIndex + selectRows(customers).length);
        let nextClients = customers.slice(startIndex, stopIndex);
        addClient(nextClients, customers)
        if (stopIndex > customers.length) {
            stopIndex -= selectRows(customers).length - nextClients.length
        }
        displayRowsElement.innerHTML = `${startIndex+1}-${stopIndex} of ${customers.length}`;
    } else if (customers.length < selectElement.value) {
        let allClients = customers.slice();
        addClient(allClients, customers)
    }
}



function goToPreviouscustomers() {
    if (startIndex >= selectRows(customers).length) {
        startIndex -= selectRows(customers).length;
        stopIndex = (startIndex + selectRows(customers).length);
        let nextClients = customers.slice(startIndex, stopIndex);
        addClient(nextClients, customers)

        displayRowsElement.innerHTML = `${startIndex+1}-${stopIndex} of ${customers.length}`;
    }
}

function assignStartINdStopI() {
    startIndex = 0;
    stopIndex = 0;
}

function searchClients() {
    let valueSearched = searchField.value.toLowerCase();
    let searcheClient = customers.filter(client => {
        return (client.name.first.toLowerCase() + " " + client.name.last.toLowerCase()).includes(valueSearched) || client.description.toLowerCase().includes(valueSearched);
    })
    addClient(selectRows(searcheClient), searcheClient);
    assignStartINdStopI()
}

function sortFromActiveToInactive() {
    let active = [];
    let inactive = []
    for (let i = 0; i < customers.length; i++) {
        if (customers[i].status === "active") {
            active.push(customers[i])
        } else {
            inactive.push(customers[i])
        }
    }
    let sortedClientsATI = active.concat(inactive);
    return sortedClientsATI;
}

function sortActiveClients() {
    let acToIna = sortFromActiveToInactive();
    addClient(selectRows(acToIna), customers)
    assignStartINdStopI()
}

function sortInactiveClients() {
    let inaToAC = sortFromActiveToInactive().reverse()
    addClient(selectRows(inaToAC), customers)
    assignStartINdStopI()
}

function sortAsc() {
    customers = customers.sort((client1, client2) => {
        if (client1.name.first < client2.name.first) {
            return -1;
        }
        if (client1.name.first > client2.name.first) {
            return 1;
        }
        return 0;
    })

    addClient(selectRows(customers), customers)
    assignStartINdStopI()
}

function sortDesc() {
    customers = customers.sort((client1, client2) => {
        if (client1.name.first > client2.name.first) {
            return -1;
        }
        if (client1.name.first > client2.name.first) {
            return 1;
        }
        return 0;
    })

    addClient(selectRows(customers), customers)
    assignStartINdStopI()

}

function selectRows(clients) {
    let rowsSelected = selectElement.value;
    let numOfclientsToDisplay = clients.slice(0, rowsSelected);
    return numOfclientsToDisplay;
}

function creatElement(clientInfo) {
    let tableClientInfoRow = document.createElement("tr");

    tableClientInfoRow.innerHTML = `
<td><input type="checkbox"  id="check"></td>
<td>
    <h5 class="client-name">${clientInfo.name.first} ${clientInfo.name.last}</h5>
    <div class="client-id"> ${clientInfo.id}</div>
</td>
<td>
    <p class="description">${clientInfo.description}</p>
</td>
<td>
    <span class="rate-number">${clientInfo.rate}</span>
    <h4 class="inr">inr</h4>
</td>
<td>
    <span class="${clientInfo.balance.checkFormat()}">${clientInfo.balance.amount}</span>
    <h4 class="inr">inr</h4>
</td>
<td>
    <span class="deposite-number">${clientInfo.deposit}</span>
    <h4 class="inr">inr</h4>
</td>
<td><button class="${clientInfo.status} ">${clientInfo.status}</button></td>
`
    let trash = document.createElement("td");
    let trashIcon = document.createElement("i");
    trashIcon.onclick = function deleteClient(e) {
        if (confirm("are you sure")) {
            let elementId = e.target.parentNode.parentNode.firstElementChild.nextElementSibling.lastElementChild.textContent;
            customers = customers.filter(client => {
                return client.id != elementId;
            })
            addClient(selectRows(customers), customers);
            assignStartINdStopI()
        }
    }
    trashIcon.classList.add("fa-trash-alt");
    trashIcon.classList.add("delet");
    trashIcon.classList.add("fas");
    trash.appendChild(trashIcon)
    tableClientInfoRow.appendChild(trash)
    customerField.insertAdjacentElement('beforeend', tableClientInfoRow)

}

function countActiveClients(clients) {
    return clients.filter(client => {
        return client.status === "active";
    }).length
}

let level1 = 0;
let level2 = 0;
sotrtElements.forEach(name => name.addEventListener("click", (e) => {

    let clickedelement = e.target;

    if (clickedelement.getAttribute("id") === "name") {
        level2 = 0;
        level1++
        if ((level1 % 2) === 0) {
            clickedelement.classList.add("sort-desc");
            clickedelement.classList.remove("sort-asc");
            sortDesc();
            styleOutClickedElement(clickedelement)
        } else if ((level1 % 2) !== 0) {
            clickedelement.classList.remove("sort-desc");
            clickedelement.classList.add("sort-asc");
            sortAsc();
            styleOutClickedElement(clickedelement)
        }
    } else if (clickedelement.getAttribute("id") === "status") {
        level1 = 0;
        level2++
        if ((level2 % 2) === 0) {
            clickedelement.classList.add("sort-desc")
            clickedelement.classList.remove("sort-asc")
            sortInactiveClients();
            styleOutClickedElement(clickedelement)

        } else if (level2 % 2 !== 0) {
            clickedelement.classList.remove("sort-desc");
            clickedelement.classList.add("sort-asc")
            sortActiveClients()
            styleOutClickedElement(clickedelement)
        }
    }

}))

function styleOutClickedElement(clickedelement) {
    let elementClickedOut = Array.from(sotrtElements).filter(elem => {
        return elem !== clickedelement
    })

    elementClickedOut[0].classList.remove("sort-asc", "sort-desc")
}