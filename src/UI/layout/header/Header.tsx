import React from 'react';
import { Button } from '@UI/buttons';
import NotificationBell from './NotificationBell';
import UserIcon from './UserIcon';

export function Header() {
  return (
    <div className="navbar bg-base-300 sm:px-36 justify-between">
      <div className="navbar-start"></div>

      <div className="navbar-center">
        <a href="/">
          <Button
            color="primary"
            size="large"
            // outline
            className="sm:btn-wide mx-auto  h-10 sm:h-12 min-h-0 "
          >
            <h1>LANDINGI</h1>
          </Button>
        </a>
      </div>

      <div className="navbar-end gap-x-2">
        <NotificationBell />
        <div className="dropdown dropdown-end">
          <Button outline shape="round" className="btn   avatar placeholder">
            <div className="w-10 rounded-full">
              <span className="text-2xl ">KD</span>
            </div>
          </Button>
          <UserIcon />
        </div>
      </div>
    </div>
  );
}
