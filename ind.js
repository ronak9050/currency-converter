
console.log("working");

const api_id = 'your_api_id';


// fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${api_id}`)
// .then(res => res.json())
// .then(data => {
//     const apiCall =data;
//     console.log(Object.keys(apiCall.data));
// })
// .catch(err => console.log(err));

const currencies = ['AUD', 'BGN', 'BRL', 'CAD', 'CHF', 'CNY', 'CZK', 'DKK', 'EUR', 'GBP', 'HKD', 'HRK', 'HUF', 'IDR', 'ILS', 'INR', 'ISK', 'JPY', 'KRW', 'MXN', 'MYR', 'NOK', 'NZD', 'PHP', 'PLN', 'RON', 'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'USD', 'ZAR'];


expand_currencies = {
        "AUD": "Australian Dollar",
        "BGN": "Bulgarian Lev",
        "BRL": "Brazilian Real",
        "CAD": "Canadian Dollar",
        "CHF": "Swiss Franc",
        "CNY": "Chinese Yuan",
        "CZK": "Czech Koruna",
        "DKK": "Danish Krone",
        "EUR": "Euro",
        "GBP": "British Pound Sterling",
        "HKD": "Hong Kong Dollar",
        "HRK": "Croatian Kuna",
        "HUF": "Hungarian Forint",
        "IDR": "Indonesian Rupiah",
        "ILS": "Israeli New Shekel",
        "INR": "Indian Rupee",
        "ISK": "Icelandic Króna",
        "JPY": "Japanese Yen",
        "KRW": "South Korean Won",
        "MXN": "Mexican Peso",
        "MYR": "Malaysian Ringgit",
        "NOK": "Norwegian Krone",
        "NZD": "New Zealand Dollar",
        "PHP": "Philippine Peso",
        "PLN": "Polish Złoty",
        "RON": "Romanian Leu",
        "RUB": "Russian Ruble",
        "SEK": "Swedish Krona",
        "SGD": "Singapore Dollar",
        "THB": "Thai Baht",
        "TRY": "Turkish Lira",
        "USD": "United States Dollar",
        "ZAR": "South African Rand"
};
      
  

// putting things in drop down menu
const currency1 = document.getElementById('cur1');
currencies.forEach(curr => {
    const option = document.createElement('option');
    option.value = curr;
    option.text = `${expand_currencies[curr]} (${curr})`;
    currency1.appendChild(option);
});
const currency2 = document.getElementById('cur2');
currencies.forEach(curr => {
    const option = document.createElement('option');
    option.value = curr;
    option.text = `${expand_currencies[curr]} (${curr})`;
    currency2.appendChild(option);
});


// getting data entered by user and process it

const subm = ()=>{
    cur1 = document.getElementById('cur1').value;
    cur2 = document.getElementById('cur2').value;
    const num = parseFloat(document.getElementById('num1').value);
    if(!isNaN(num)){
        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${api_id}`)
        .then(res => res.json())
        .then(data => {
            const apiCall =data;
            const val1 = parseFloat(apiCall.data[cur1]);
            const val2 = parseFloat(apiCall.data[cur2]);
            const op = num*(val2)/(val1);
            console.log(op);
    
            document.getElementById('output').innerHTML=`${op}`;
        })
        .catch(err => document.getElementById('output').innerHTML=`Error in getting Data`);
    }
    else{
        document.getElementById('output').innerHTML=`Please Enter a Valid Number`;
    }

    
}












