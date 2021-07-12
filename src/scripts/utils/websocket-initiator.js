import CONFIG from "../globals/config";
import NotificationHelper from "./notification-helper";

const WebSocketInitiator = {
   init(url) {
     const webSocket = new WebSocket(url);
     webSocket.onmessage = this._onMessageHandler;
   },
  
   _onMessageHandler(message) {
      const restoo = JSON.parse(message.data);
      // console.log(restoo.restaurant);
      NotificationHelper.sendNotification({
        name: `${restoo.name} is on Restaurant!`,
        options: {
          body: restoo.description,
          image: `${CONFIG.BASE_IMAGE_URL + restoo.pictureId}`,
        },
      });
   },
 };
 export default WebSocketInitiator;