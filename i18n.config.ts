export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'fr',
  silentTranslationWarn: true,
  messages: {
    en: {
      welcome: 'Welcome'
    },
    fr: {
      httpCode: {
        error: 'Erreur serveur',
        info: 'Information',
        warning: 'Attention',
        success: 'Succès'
      },
      global: {
          name: "Todo application",
          disconnect: "Déconnexion",
          home: "Accueil",
          legal_notices: "Mentions légales",
          login: "Connexion",
          register: "Inscription",
      },
      auth: {
        "log_in": "Connexion",
        "log_out": "Déconnexion",
        "sign_in": "Se connecter",
        "sign_out": "Se déconnecter",
        "email": "Adresse email",
        "password": "Mot de passe",
        "successed": "Connexion réussie.",
        "failed": "Le couple identifiant / mot de passe est invalide."
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
        texts: {
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
          done: 'Fait',
          created: 'Création de la tâche effectuée.',
          updated: 'Mise à jour de la tâche effectuée.',
          failed: 'Impossible d\'effectuer l\'action.'
        },
        list: {
          title: 'Liste des tâches',
          all: 'Toutes',
        },
        scope: {
          personnal: 'Personnel',
          work: 'Travail',
          family: 'Famille',
          other: 'Autre'
        },
        fetch: {
          successed: 'Récupération effectuée.',
          failed: 'Récupération impossible.'
        }
      },
      articles: {
        title: 'Articles'
      },
      form: {
        rules: {
          required: "Requis",
          email_valid: "Email doit être valide",
          min_8_caracters: "Minimum 8 caractères"
        }
      },
      log_in: {
        title: "Connexion"
      },
      errors: {
        name: {
          tooShort: "Le nom est trop court."
        }
      }
    }
  }
}))