import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";

import avatar from "assets/img/faces/marc.jpg";
import { Typography } from "@material-ui/core";

const styles = {
  cardCategory: {
    margin: "0",
    fontSize: "14px",
    fontWeight: "bold",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const Info = ({category, data}) => (
  <div>
    <Typography variant="h5">{category}</Typography>
    <Typography >{data}</Typography>
  </div>
);

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h3 className={classes.cardTitle}>{localStorage.name}</h3>
              <Info category="Data de nascimento" data={localStorage.birth_date} />
              <Info category="Nome do cuidador" data={localStorage.care_taker_name} />
              <Info category="Telefone do cuidador" data={localStorage.care_taker_phone_number} />
              <Info category="Cartão de Cidadão" data={localStorage.civil_id} />
              <Info category="Número SNS" data={localStorage.sns_id} />
              
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
