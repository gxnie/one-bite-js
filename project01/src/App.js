import TabBar from "./components/TabBar.js";
import Content from "./components/Content.js";
import { request } from "./components/api.js";

export default function App($app) {
  this.state = {
    currentTab: "all",
    photos: [],
  };

  // tab
  const tabBar = new TabBar({
    $app,
    initialState: "",
    onclick: async (name) => {
      this.setState({
        ...this.state,
        currentTab: name,
        photos: await request(name === "all" ? "" : name),
      });
    },
  });

  // content
  const content = new Content({
    $app,
    initialState: [],
  });

  this.setState = (newState) => {
    this.state = newState;
    content.setState({
      currentTab: this.state.currentTab,
      photos: this.state.photos,
    });
  };

  const init = async () => {
    try {
      const initialPhotos = await request();
      this.setState({
        ...this.state,
        photos: initialPhotos,
      });
    } catch (err) {
      console.log(err);
    }
  };

  init();
}
