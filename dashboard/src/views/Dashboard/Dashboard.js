import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

// import { bugs, website, server } from "variables/general.js";

import {
  weightChart,
  HTAChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import Pill from "assets/img/pill.png"
import Running from "assets/img/running.png"
import Heart from "assets/img/heart.png"
import Drop from "assets/img/drop.png"
import Avatar from "@material-ui/core/Avatar"
import Icon from "@material-ui/core/Icon"
import {Link} from "react-router-dom"

const useStyles = makeStyles(styles);

while(localStorage.history === undefined) {}

let history = JSON.parse(localStorage.history);

function flow() {
  const a = [];

  for (let index = 1; index < history.length; index++) {
    const element = history[index];
    a.push(<br/>);
    a.push(<h4><strong>{ element.question }</strong></h4>);
    a.push(<p>{ element.answer } ({ new Date(element.date_a).toTimeString().split(' ')[0] })</p>);
  }

  return a;
}

function History() {
  if (history.length !== 0) {
    return <div>
        <h3>{ new Date(history[0].date_q).toTimeString().split(' ')[0] }</h3>
        <h4><strong>{ history[0].question }</strong></h4>
        <p>{ history[0].answer } ({ new Date(history[0].date_a).toTimeString().split(' ')[0] })</p>
        { flow() }
      </div>;
  } else {
    return <p>"No data"</p>;
  }
}

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Avatar src={Pill}/>
              </CardIcon>
              <h3 className={classes.cardTitle}>Medicação</h3>
              <p className={classes.cardNote}>(últimos 30 dias)</p>
              <h3 className={classes.cardContent}>
                49/50 <small>doses tomadas</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Acabado de atualizar
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Avatar src={Running} />
              </CardIcon>
              <h3 className={classes.cardTitle}>Atividade física</h3>
              <p className={classes.cardNote}>(últimos 30 dias)</p>
              <h3 className={classes.cardContent}>4/8 <small>km</small></h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Acabado de atualizar
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Avatar src={Heart} />
              </CardIcon>
              <h3 className={classes.cardTitle}>Hipertensão arterial</h3>
              <p className={classes.cardNote}>(medido a 29/01/2019) </p>
              <h3 className={classes.cardContent}>120/80 <small>mmHg</small></h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Acabado de atualizar
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Avatar src={Drop} />
              </CardIcon>
              <h3 className={classes.cardTitle}>Glicemia (jejum)</h3>
              <p className={classes.cardNote}>(medido a 29/10/2019)</p>
              <h3 className={classes.cardContent}>80 <small>mg/dL</small></h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Acabado de atualizar
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="danger">
              <h3 className={classes.cardTitleWhite}>Alertas</h3>
            </CardHeader>
            <CardBody>
              <History/>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={5}>
          <Card chart>
            <CardHeader color="info">
              <ChartistGraph
                className="ct-chart"
                data={HTAChart.data}
                type="Line"
                options={HTAChart.options}
                listener={HTAChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h3 className={classes.cardTitle}>Hipertensão arterial</h3>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> atualizado há 4 minutos
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={5}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={weightChart.data}
                type="Line"
                options={weightChart.options}
                listener={weightChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h3 className={classes.cardTitle}>Peso</h3>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 15%
                </span>{" "}
                aumento de peso desde a última pesagem
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> atualizado há 2 dias
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={2}>
          <Card>
            <CardHeader color="info" stats icon>
              <Link to="/add">
                <CardIcon color="info">
                  <Icon color="#fff">add_circle</Icon>
                </CardIcon>
              </Link>
            </CardHeader>
            <CardBody>
              <h3 className={classes.cardTitle}>Adicionar lembrete</h3>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h3 className={classes.cardTitleWhite}>Prescrições</h3>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["Código", "Medicamento", "Dosagem", "Frequência"]}
                tableData={[
                  ["112323435432", "Omeprazol", "15mg", "antes do jantar"],
                  ["221355312332", "Valsartan", "40mg", "8 e 20 horas"],
                  ["313241222756", "Sinvastatina", "20mg", "ao deitar"],
                  ["497322312342", "Ácido Acetilsalicílico", "150mg", "ao almoço"]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>


    </div>
  );
}
