import React from 'react';
import { Button } from '@UI/buttons';
function UserIcon() {
  return (
    <ul
      tabIndex={0}
      className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-300 rounded-box w-52"
    >
      <li>
        <Button color="none" className=" relative  ">
          Profile
          <span className="badge badge-xs">New</span>
        </Button>
      </li>
      <li>
        <Button color="none">Settings</Button>
      </li>
      <li>
        <Button color="none">Logout</Button>
      </li>
    </ul>
  );
}

export default UserIcon;
