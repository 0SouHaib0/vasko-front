import axios from "axios";

const API_URL = "http://localhost:8081"; 

export const getJacketMeasurments = async (clientId) => {
    try {
      const response = await axios.get(`${API_URL}/jacketMs/jacketMs-client?client_id=${clientId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const getPantsMeasurments = async (clientId) => {
    try {
      const response = await axios.get(`${API_URL}/pantsMs/pantsMs-client?client_id=${clientId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  export const getGiletMeasurments = async (clientId) => {
    try {
      const response = await axios.get(`${API_URL}/giletMs/giletMs-client?client_id=${clientId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  export const addGiletMs = async (clientId,poitrine,demi_ceinture,demi_hanche,longueur_gilet ) => {
    try {
      const response = await axios.post(`${API_URL}/giletMs/addGiletMs`,{clientId,poitrine,demi_ceinture,demi_hanche,longueur_gilet });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

    export const addPantsMs = async (clientId,ceinture,fourche_avant,fourche_arriere,fourche_totale,demi_hanche,demi_largeur_cuisse,demi_genou,demi_bas_pantalon,longueur_bas_nonfini ) => {
      try {
        const response = await axios.post(`${API_URL}/pantsMs/addPantsMs`,{clientId,ceinture,fourche_avant,fourche_arriere,fourche_totale,demi_hanche,demi_largeur_cuisse,demi_genou,demi_bas_pantalon,longueur_bas_nonfini });
        return response.data;
      } catch (error) {
        throw error.response.data;
      }

  };

  export const addJacketMs = async (clientId,poitrine, hauteur_epaules, largeur_dos, longueur_epaules, encolure, plis_sous_col, ceinture, anche, longeur_manche, rotation_manche, largeur_manche, longueur_veste, hauteur_1button, largeur_revers, nb_buttons, nb_fentes  ) => {
    try {
      const response = await axios.post(`${API_URL}/jacketMs/addJacketMs`,{clientId,poitrine, hauteur_epaules, largeur_dos, longueur_epaules, encolure, plis_sous_col, ceinture, anche, longeur_manche, rotation_manche, largeur_manche, longueur_veste, hauteur_1button, largeur_revers, nb_buttons, nb_fentes });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }

};