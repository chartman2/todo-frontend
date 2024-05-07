export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'fr',
  messages: {
    en: {
      welcome: 'Welcome'
    },
    fr: {
      global: {
          name: "Todo application",
          disconnect: "Déconnexion",
          home: "Accueil",
          legal_notices: "Mentions légales",
          login: "Connexion",
          register: "Inscription",
      },
      legal_notices: {
        "title": "Mentions Légales",
        "name": "Author name",
        "fields": {
          "name": "Nom",
          "address": "Adresse",
          "siren": "SIRET",
          "website": "Site web",
          "contact": "Contact",
          "hosting": "Hébergement"
        },
        "texts": {
          "name": "Author name",
          "address1": "Address 1",
          "address2": "Address 2",
          "address3": "Address 3",
          "siren": "SIREN",
          "website": "todo-frontend.traefik.me",
          "contact": "contact[at]domain[dot]fr",
          "hosting": "Home",
          "hosting_address": "Home address",
          "hosting_website": "todo-frontend.traefik.me",
          "hosting_name": "Home"
        }
      },
      tasks: {
        form: {
          title: 'Nouvelle tâche',
          name: 'Nom',
          required: 'Ce champ est obligatoire.',
          add: 'Ajouter',
          done: 'Fait'
        },
        list: {
          title: 'Liste des tâches'
        },
        scope: {
          personnal: 'Personnel',
          work: 'Travail',
          family: 'Famille',
          other: 'Autre'
        }
      },
      articles: {
        title: 'Articles'
      }
    }
  }
}))