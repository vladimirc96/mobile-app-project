import * as ImagePicker from "expo-image-picker";
import { MEDIA_LIBRARY_PERMISSION_ERROR } from "../constants/Messages";
import Toast from "react-native-root-toast";

export default PermissionService = {
  requestMediaLibraryPermission: async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Toast.show(MEDIA_LIBRARY_PERMISSION_ERROR, {
        duration: Toast.durations.LONG,
      });
      return false;
    }
    return true;
  },
};
