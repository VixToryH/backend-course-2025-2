// Константи
const currency = "EUR";
const exact_date = "10.09.2024";

// Створення базового URL
const myUrl = new URL("/NBU_ovdp", "https://bank.gov.ua/");

// Параметри
myUrl.searchParams.append("valcode", currency);
myUrl.searchParams.append("date", exact_date);
myUrl.searchParams.append("json", "");

// Вивід гототового URL у консоль
console.log("Сконструйований URL:", myUrl.toString());
