document.addEventListener("DOMContentLoaded", function () {
    const amountInput = document.getElementById("amount");
    const fromCurrency = document.getElementById("from");
    const toCurrency = document.getElementById("to");
    const convertButton = document.getElementById("convert");
    const resultDisplay = document.getElementById("result");

    // Replace this with a real API endpoint for currency conversion
    const apiUrl = "https://api.exchangerate-api.com/v4/latest/USD";

    // Fetch currency rates from the API and populate the select options
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const currencies = Object.keys(data.rates);

            currencies.forEach(currency => {
                const option1 = document.createElement("option");
                const option2 = document.createElement("option");
                option1.value = currency;
                option1.textContent = currency;
                option2.value = currency;
                option2.textContent = currency;
                fromCurrency.appendChild(option1);
                toCurrency.appendChild(option2);
            });
        })
        .catch(error => console.error(error));

    // Function to perform the currency conversion
    function convertCurrency() {
        const from = fromCurrency.value;
        const to = toCurrency.value;
        const amount = parseFloat(amountInput.value);

        // Replace this with the real conversion logic using the API data
        const conversionRate = 1.23; // Example conversion rate (1 USD to EUR)
        const convertedAmount = (amount * conversionRate).toFixed(2);

        resultDisplay.textContent = `Result: ${amount} ${from} = ${convertedAmount} ${to}`;
    }

    // Event listener for the Convert button
    convertButton.addEventListener("click", convertCurrency);
});
