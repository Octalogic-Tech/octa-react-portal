export const fetchFirebaseConfig = () => {
  if (process.env.NODE_ENV === "production") {
    return {
      apiKey: "AIzaSyDeRFK9AsB3z-h6r4bx3cjMeivtWEIR_Tw",
      authDomain: "octalogic-portfolio.firebaseapp.com",
      databaseURL: "https://octalogic-portfolio.firebaseio.com",
      projectId: "octalogic-portfolio",
      storageBucket: "octalogic-portfolio.appspot.com",
      messagingSenderId: "882374908872",
      appId: "1:882374908872:web:82344143d82787e4ff3efd",
      measurementId: "G-5JYTF5LB6Q",
    };
  } else {
    return {
      apiKey: "AIzaSyBsMfgsHNyypJnmf96tT0OLo8UMFY-ZMNE",
      authDomain: "octalogic-portfolio-dev.firebaseapp.com",
      databaseURL: "https://octalogic-portfolio-dev.firebaseio.com",
      projectId: "octalogic-portfolio-dev",
      storageBucket: "octalogic-portfolio-dev.appspot.com",
      messagingSenderId: "972342187770",
      appId: "1:972342187770:web:bf3ff2e8961d4459359b43",
      measurementId: "G-BGS6FKEZTX",
    };
  }
};
