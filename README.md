# Currency Converter

A web application that allows users to convert amounts between different currencies using real-time exchange rates.

## Features

- **Currency Conversion**: Convert amounts from one currency to another using up-to-date exchange rates.
- **Dynamic Currency Dropdowns**: Select currencies from dropdown menus that are populated with a list of available currencies.
- **Real-Time Exchange Rates**: Fetch and display current exchange rates using an external API.
- **Flag Icons**: Display country flags next to currency options for visual reference.

## Technologies Used

- **HTML**: Structure of the web page.
- **CSS**: Styling and layout of the application.
- **JavaScript**: Functionality for handling currency conversion, updating UI elements, and interacting with the API.
- **External APIs**: 
  - **Exchange Rate API**: Fetches real-time exchange rates for currency conversion.
  - **Flags API**: Provides country flag images based on currency codes.

## How It Works

1. **User Interface**: Users enter an amount and select the source and target currencies from dropdown menus.
2. **Fetching Exchange Rates**: When the user clicks the "Convert" button, the application fetches the current exchange rate from the Exchange Rate API.
3. **Displaying Results**: The converted amount is displayed along with the target currency.
4. **Dynamic Updates**: The currency dropdowns are populated with options, and the appropriate flag icons are displayed based on the selected currency.

## API Details

- **Exchange Rate API**: [ExchangeRate-API](https://api.exchangerate-api.com/v4/latest)
  - Endpoint: `https://api.exchangerate-api.com/v4/latest/{baseCurrency}`
  - Fetches the latest exchange rates relative to the base currency.

- **Flags API**: [Flags API](https://flagsapi.com/)
  - Provides flag images for countries based on their currency codes.
