import { getFetchClient } from "@strapi/helper-plugin";
import pluginId from "../../pluginId";

export const saveFirebaseConfig = async (json: string) => {
  try {
    const url = `/${pluginId}/settings/firebase-config`;
    const { post } = getFetchClient();
    const { data } = await post(url, { firebaseConfigJson: json });

    return data;
  } catch (e) {
    return [];
  }
};

export const getFirebaseConfig = async () => {
  try {
    const url = `/${pluginId}/settings/firebase-config`;
    const { get } = getFetchClient();
    const { data } = await get(url);

    return data;
  } catch (e) {
    return [];
  }
};

export const delFirebaseConfig = async () => {
  try {
    const url = `/${pluginId}/settings/firebase-config`;
    const { del } = getFetchClient();
    const { data } = await del(url);

    return data;
  } catch (e) {
    return [];
  }
};
