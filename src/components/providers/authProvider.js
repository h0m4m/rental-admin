import { supabaseClient } from '../../supabaseClient';

const authProvider = {
  // Login method
  login: async ({ username, password }) => {
    console.log(username, password);
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: username,
      password,
    });

    if (error) {
      throw new Error('Invalid login credentials');
    }

    localStorage.setItem('auth', JSON.stringify(data));
    return data;
  },

  // Logout method
  logout: async () => {
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
      console.error('Error logging out:', error.message);
      throw new Error('Logout failed');
    }

    localStorage.removeItem('auth');
    return Promise.resolve();
  },

  // Check authentication status
  checkAuth: () => {
    const auth = localStorage.getItem('auth');
    if (auth) {
      return Promise.resolve();
    }
    return Promise.reject({ redirectTo: '/login' });
  },

  // Check for authentication errors
  checkError: (error) => {
    if (error.status === 401 || error.status === 403) {
      localStorage.removeItem('auth');
      return Promise.reject();
    }
    return Promise.resolve();
  },

  // Get user identity
  getIdentity: async () => {
    const user = supabaseClient.auth.getUser();
    if (user) {
      return {
        id: user.id,
        fullName: user.email,
      };
    }
    return null;
  },

  // Optional: handle permissions
  getPermissions: () => Promise.resolve(),
};

export default authProvider;
