import { ImageList, ImageListItem } from "@mui/material";
import React from "react";
import { GetImageListUsecase } from "../../../domain/usecases/get-image-list-usecase";

export class ImageComponent extends React.Component<any, any> {
  private readonly getImageListUsecase: GetImageListUsecase =
    new GetImageListUsecase();

  constructor(props: any) {
    super(props);
    this.state = {
      items: [],
      position: 0,
      page: 1,
      limit: 6,
      block: false,
    };
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    this.setState({
      position: Math.round(scrolled * 10) / 10,
    });
  };

  componentDidMount(): void {
    this.loadImage();
    this.loadImage();
    window.addEventListener("scroll", this.listenToScroll);
  }

  loadImage() {
    this.getImageListUsecase
      .call(undefined, this.state.page, this.state.limit)
      .then((value) =>
        this.setState({
          items: [...this.state.items, ...value],
        })
      );
    this.setState({
      page: this.state.page + 1,
    });
  }

  render(): React.ReactNode {
    if (this.state.position >= 0.8 && !this.state.block) {
      this.setState({
        block: true,
      });
      this.loadImage();
    }

    if (this.state.position < 0.8 && this.state.block) {
      this.setState({
        block: false,
      });
    }

    const params = new URLSearchParams({
      operation: "thumbnail",
      weight: "400",
      height: "400",
    });

    return (
      <ImageList cols={3}>
        {this.state.items.map((item: any) => {
          const url = `${
            process.env.REACT_APP_API_URL
          }/cloud/show/${encodeURIComponent(item.name)}?${params.toString()}`;
          return (
            <ImageListItem key={item.name}>
              <img src={url} srcSet={url} alt={item.name} loading="lazy" />
            </ImageListItem>
          );
        })}
      </ImageList>
    );
  }
}
