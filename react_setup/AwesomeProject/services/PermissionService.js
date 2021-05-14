import * as ImagePicker from "expo-image-picker";
import { MEDIA_LIBRARY_PERMISSION_ERROR } from "../constants/Messages";

export default PermissionService = {
  requestMediaLibraryPermission: async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Toast.show(MEDIA_LIBRARY_PERMISSION_ERROR, Toast.LONG);
      return false;
    }
    return true;
  },
};
