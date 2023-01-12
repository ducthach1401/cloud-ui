import React from "react";
import { HomeUi } from "./app/ui/home-ui";

export class HomeModule extends React.Component {
  componentDidMount(): void {
    document.title = "Home";
  }

  render(): React.ReactNode {
    return <HomeUi />;
  }
}
