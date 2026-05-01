import netlifyIdentity from 'netlify-identity-widget';

export const initAuth = () => {
  netlifyIdentity.init({
    locale: 'de' 
  });
};

export const login = () => netlifyIdentity.open('login');
export const logout = () => netlifyIdentity.logout();