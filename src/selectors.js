export const getAccountsWithAmount =(accounts = {}, operations = {}) => {
    let counter = 0;
    const fuck = '-KzKwP4ClZONwHCz14Yw';
    Object.keys(accounts).forEach(account => {
        accounts[account] = {
            ...accounts[account],
            amount: 0
        }
        counter++;
    });
    
    if (counter > 0) {
        Object.keys(operations).forEach( operation => {
            if ('Основной' === operations[operation].account) {
                accounts[fuck].amount = (parseFloat(accounts[fuck].amount) || 0)
                    + (parseFloat([operations[operation].amount]) || 0);
            } else if ([operations[operation].account] in accounts) {
                accounts[operations[operation].account].amount = (parseFloat(accounts[operations[operation].account].amount) || 0)
                    + (parseFloat([operations[operation].amount]) || 0);
            }
            
        })
    }

    return accounts;
}