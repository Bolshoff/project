import React from 'react';
import './PageToggleButton.css';

interface PageToggleButtonProps{
  title: string
}

function PageToggleButton({ title }: PageToggleButtonProps) {
  return (
    <button className="page-toggle-button" type="button">{title}</button>
  );
}

export default PageToggleButton;
