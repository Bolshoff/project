import React, { FC } from 'react';
import './AuthorizationModal.css';

interface AuthorizationModalProps{
 show: boolean
}

const AuthorizationModal: FC<AuthorizationModalProps> = ({ show }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="authorization-modal">
      <div className="authorization-modal-content">
        <div className="authorization-modal-header">
          <h4 className="authorization-modal-title">Log in</h4>
        </div>
        <div className="authorization-modal-body" />
      </div>
    </div>
  );
};

export default AuthorizationModal;
