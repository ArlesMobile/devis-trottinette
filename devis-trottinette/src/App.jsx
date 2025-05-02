
import React, { useState } from 'react';

export default function App() {
  const [client, setClient] = useState({ nom: '', prenom: '', telephone: '' });
  const [interventions, setInterventions] = useState([{ description: '', prix: '' }]);

  const handleChangeClient = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleChangeIntervention = (index, field, value) => {
    const updated = [...interventions];
    updated[index][field] = value;
    setInterventions(updated);
  };

  const addIntervention = () => {
    setInterventions([...interventions, { description: '', prix: '' }]);
  };

  const total = interventions.reduce((sum, item) => sum + parseFloat(item.prix || 0), 0);

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Création de Devis</h1>

      <div>
        <input placeholder='Nom' name='nom' value={client.nom} onChange={handleChangeClient} />
        <input placeholder='Prénom' name='prenom' value={client.prenom} onChange={handleChangeClient} />
        <input placeholder='Téléphone' name='telephone' value={client.telephone} onChange={handleChangeClient} />
      </div>

      {interventions.map((item, index) => (
        <div key={index}>
          <input
            placeholder='Intervention'
            value={item.description}
            onChange={(e) => handleChangeIntervention(index, 'description', e.target.value)}
          />
          <input
            placeholder='Prix (€)'
            type='number'
            value={item.prix}
            onChange={(e) => handleChangeIntervention(index, 'prix', e.target.value)}
          />
        </div>
      ))}

      <button onClick={addIntervention}>Ajouter une ligne</button>

      <h2>Total : {total.toFixed(2)} €</h2>
    </div>
  );
}
