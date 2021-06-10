import { LightningElement } from "lwc";
import { fire } from "c/pubsub";
export default class PubsubPublisher extends LightningElement {
  handleClick() {
    window.console.log("Event Firing..... ");
    let message = {
      message: "Hello PubSub",
      name: "Shiva",
      channel: "Shiva Channel"
    };
    fire("simplevt", message);
    fire("simple_event", message);
    window.console.log("Event Fired ");
  }
}

