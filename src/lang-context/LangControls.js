import React from 'react';
import LanguageContext from './LanguageContext';

console.log(LanguageContext);

export default function LangControls(props) {
  return (
    <>
      <button>
        British{' '}
        <span role='img' aria-label='en-GB'>🇬🇧</span>
      </button>
      {' '}
      <button>
        American{' '}
        <span role='img' aria-label='en-US'>🇺🇸</span>
      </button>
      {' '}
      <button>
        Korean{' '}
        <span role='img' aria-label='ko'>🇰🇷</span>
      </button>
    </>
  );
}