
import { useState } from 'react';

function LanguageDropdown({ languages, selectedLanguage, handleLanguageChange }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    handleLanguageChange(e); 
  };

 
  const filteredLanguages = languages.filter((language) =>
    language.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="inp">
      <input
        type="text"
        className="select-box"
        placeholder="Type a Language"
        value={selectedLanguage}
        onChange={handleSearch}
        list="languages"
      />
      <datalist id="languages">
        {filteredLanguages.map((language, index) => (
          <option key={index} value={language.value}>
            {language.title}
          </option>
        ))}
      </datalist>
    </div>
  );
}

export default LanguageDropdown;


