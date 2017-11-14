import React from 'react';

const Money = ({value, currency}) => {
    
    const currencyList = {
        RUB: '₽',
        EUR: '€',
        GBP: '£',
        USD: '$'
    }

    let integer = ~~value;
    let fraction = "" + value;
    const index = fraction.indexOf(".");
    fraction = fraction.slice(index + 1 );
    fraction = integer === value ? '' : fraction;

    return (
        <span>
            <span>{integer}</span>
            {fraction ? <span>,{fraction}</span> : ""}
            {currency ? <span>{currencyList[currency]}</span> : ''}
        </span>
    )
    //а если по-человечески, то
    //return <span>{(value).toLocaleString("ru-RU",{style:'currency', currency: currency})}</span>
}

export default Money;