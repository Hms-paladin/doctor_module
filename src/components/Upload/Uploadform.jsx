import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Labelbox from "../../helpers/labelbox/labelbox";
import Button from "@material-ui/core/Button";
import "./Uploadform.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Upload } from "antd";
import uploadimage from "../../images/upload-button.png";
export default class Uploadform extends Component {
  render() {
    return (
      <div className="uploads_doctordetails">
      
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Labelbox
                className="label-box"
                labelname="Media Title"
                type="text"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="uploadfiles-wrapper">
                <Upload className="upload-field">
                  Upload
                  <div className="upload-button">
                    <Button className="Button-container">
                      Browse File{" "}
                      <div className="uploadimage-container">
                        <img className="uploadimage" src={uploadimage} />
                      </div>
                    </Button>
                  </div>
                </Upload>
              </div>
            </Grid>
            <Grid item xs={12} md={12}>
              <Labelbox
                className="label-box"
                labelname="Description"
                type="textarea"
              />
           
          </Grid>
          <div className="Active_Checkbox-container">
            <FormControlLabel
              value="active"
              control={<Checkbox color="green" />}
              label="Active"
              labelPlacement="end"
            />
          </div>
          <span className="button-container">
            <Button className="Upload">Upload</Button>
            <Button className="Cancel-form">Cancel</Button>
          </span>
        </Grid>
      </div>
    );
  }
}
