import { Grid, IconButton, Typography } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import React from "react";
import { UploadImageUsecase } from "../../../domain/usecases/upload-image-usecase";
import { CircularProgressWithLabel } from "../../../../../core/material/circular-progress-with-label";

export class UploadComponent extends React.Component<any, any> {
  private readonly uploadImageUsecase = new UploadImageUsecase();

  constructor(props: any) {
    super(props);
    this.state = {
      fileName: [],
      progress: 0,
      uploadName: "",
    };
  }

  async process(files: any) {
    const total = files.length;
    let count = 0;
    for (const file of files) {
      count++;
      this.setState({
        uploadName: file.name,
      });
      await this.uploadImageUsecase.call(file);
      this.setState({
        progress: Math.round((count / total) * 100),
      });
    }
    window.location.reload();
  }

  render(): React.ReactNode {
    return (
      <Grid container direction="row">
        <Grid xs={2} textAlign="center">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <PhotoCamera style={{ color: "white" }} fontSize="large" />
            <input
              accept="image/*"
              type="file"
              multiple
              hidden
              onChange={(event) => this.process(event.target.files)}
            />
          </IconButton>
        </Grid>

        <Grid xs={2} textAlign="center">
          <CircularProgressWithLabel value={this.state.progress} />
        </Grid>

        <Grid xs={8} margin="auto">
          <Typography margin="auto" marginLeft="5%" noWrap>
            {this.state.uploadName}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}
