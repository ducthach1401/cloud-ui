import { ImageList, ImageListItem } from "@mui/material";
import React from "react";
import { GetImageListUsecase } from "../../domain/usecases/get-image-list-usecase";

export class ImageComponent extends React.Component<any, any> {
  private readonly getImageListUsecase: GetImageListUsecase =
    new GetImageListUsecase();

  constructor(props: any) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentDidMount(): void {
    this.getImageListUsecase.call(undefined, 1, 20).then((value) =>
      this.setState({
        items: value,
      })
    );
  }

  render(): React.ReactNode {
    const params = new URLSearchParams({
      operation: "resize",
      weight: "400",
    });
    return (
      <ImageList cols={3}>
        {this.state.items.map((item: any) => {
          const url = `${
            process.env.REACT_APP_URL_API
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
