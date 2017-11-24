import React from 'react';
import Money from '../Money/Money';

import {
  NavLink
} from 'react-router-dom';

import './Sidebar.css';

const Sidebar = ({accounts}) => {
  let values = [];

  for(let account in accounts) {   
      values.push(accounts[account]);
  };

  return (
    <div className='Sidebar'>
      <div className='Sidebar__header'>
        Счета
      </div>

      <NavLink to='/account/321321' className='Link' activeClassName='Link--active'>
        <div className='Sidebar__account'>
          <div className='Sidebar__account-name'>
            Основной
          </div>
          <div className='Sidebar__account-amount'>
            <Money value={2133.231} />
          </div>
        </div>
      </NavLink>
      {values.map((account, index) => (
        <NavLink
          key={index}
          to={`/account/${index + 1}`}
          className="Link"
          activeClassName="Link--active"
        >
          <div className="Sidebar__account">
            <div className="Sidebar__account-name">
              {account.name}
            </div>
            <div className="Sidebar__account-amount">
              <Money value={+account.amount} currency={account.currency} />
            </div>
          </div>
        </NavLink>
      ))}

      <NavLink to='/create-account' className='Link' activeClassName='Link--active'>
        <div className='Sidebar__account'>
          <div className='Sidebar__account-name'>
            Добавить счет
          </div>
        </div>
      </NavLink>
    </div>
  )
};

export default Sidebar;