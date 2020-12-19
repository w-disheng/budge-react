import React from "react";
import { Segment, Grid } from "semantic-ui-react";

import DisplaceBalance from "./DisplaceBalance";

function DisplaceBalances() {
  return (
    <Segment textAlign="center">
      <Grid columns="2" divided>
        <Grid.Row>
          <Grid.Column>
            <DisplaceBalance title="Income" value="1045.50" color="green" />
          </Grid.Column>
          <Grid.Column>
            <DisplaceBalance title="Expenses" value="623.50" color="red" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default DisplaceBalances;
