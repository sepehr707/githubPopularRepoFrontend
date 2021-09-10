import React from 'react';
const Context = React.createContext({
    showAll: true,
    setShowAll: (value) => {},
    language: null,
    setLanguage: (value) => {}
})

export default Context;