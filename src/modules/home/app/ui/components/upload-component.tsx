import { IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import React from "react";
import { UploadImageUsecase } from "../../../domain/usecases/upload-image-usecase";

export class UploadComponent extends React.Component<any, any> {
  private readonly uploadImageUsecase = new UploadImageUsecase();

  constructor(props: any) {
    super(props);
    this.state = {
      fileName: [],
    };
  }

  async process(files: any) {
    for (const file of files) {
      await this.uploadImageUsecase.call(file);
    }
    window.location.reload();
  }

  render(): React.ReactNode {
    return (
      <IconButton color="primary" aria-label="upload picture" component="label">
        <PhotoCamera style={{ color: "white" }} fontSize="large" />
        <input
          accept="image/*"
          type="file"
          multiple
          hidden
          onChange={(event) => this.process(event.target.files)}
        />
      </IconButton>
    );
  }
}
