const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

export const improveText = async (text, apiKey) => {
  if (!apiKey) {
    return {
      success: false,
      error: "Clé API manquante. Veuillez configurer VITE_OPENAI_API_KEY dans .env.local"
    };
  }

  const data = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `Tu es un assistant spécialisé en rédaction médicale. Ton rôle est de rédiger une lettre d’adressage entre médecins, 
        en veillant à ce que le ton reste formel, professionnel et respectueux. Ton objectif est d’améliorer le texte sur le plan
         stylistique, tout en préservant la précision des informations médicales. Tu t'assures que la lettre soit claire, concise et 
         bien structurée, en incluant toutes les informations nécessaires pour le suivi du patient, sans mettre de pression sur le
          médecin destinataire concernant la prise en charge du cas. Le ton doit être courtois et neutre, et exprimer une demande 
          de consultation ou de collaboration sans être trop indicatif ou contraignant`,
      },
      {
        role: "user",
        content: `Améliore la lettre suivante : \n\n${text}`,
      },
    ],
    temperature: 0.7,
    max_tokens: 500,
  };

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey.trim()}`,
    },
    body: JSON.stringify(data),
  });

  if (response.status === 401) {
    return {
      success: false,
      error: "Clé API invalide ou expirée"
    };
  }

  if (!response.ok) {
    return {
      success: false,
      error: `Erreur API: ${response.status} ${response.statusText}`
    };
  }

  const result = await response.json();
  return {
    success: true,
    data: result.choices[0].message.content
  };
}; 