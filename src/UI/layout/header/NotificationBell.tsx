import React from 'react';
import { Button } from '@UI/buttons';
import { BellAlertIcon } from '@heroicons/react/24/outline';

function NotificationBell() {
  return (
    <Button ghost shape="round" className="btn ">
      <div className="indicator">
        <BellAlertIcon className="w-5 h-5" />
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </Button>
  );
}

export default NotificationBell;
