import "./App.css";
import {
  Container,
  Icon,
  Segment,
  Grid,
  Header,
  Statistic,
  Form,
  Button,
} from "semantic-ui-react";

function App() {
  return (
    <Container>
      <Header as="h1">Budge</Header>

      <Statistic size="small">
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>2,550,53</Statistic.Value>
      </Statistic>

      <Segment textAlign="center">
        <Grid columns="2" divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label style={{ textAlign: "left" }}>
                  Income:
                </Statistic.Label>
                <Statistic.Value>1045.50</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size="tiny" color="red">
                <Statistic.Label style={{ textAlign: "left" }}>
                  Expenses:
                </Statistic.Label>
                <Statistic.Value>623.50</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as="h3">History</Header>
      <Segment color="red" divided>
        <Grid columns="3" textAlign="right">
          <Grid.Row>
            <Grid.Column width="10" textAlign="left">
              Something
            </Grid.Column>
            <Grid.Column width="3" textAlign="right">
              10
            </Grid.Column>
            <Grid.Column width="3">
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="green" divided>
        <Grid columns="3" textAlign="right">
          <Grid.Row>
            <Grid.Column width="10" textAlign="left">
              Something
            </Grid.Column>
            <Grid.Column width="3" textAlign="right">
              100
            </Grid.Column>
            <Grid.Column width="3">
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="red" divided>
        <Grid columns="3" textAlign="right">
          <Grid.Row>
            <Grid.Column width="10" textAlign="left">
              Something
            </Grid.Column>
            <Grid.Column width="3" textAlign="right">
              10
            </Grid.Column>
            <Grid.Column width="3">
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as="h3">Add new transaction</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input
            icon="tags"
            placeholder="New shinny things"
            width={12}
            label="Description"
          />
          <Form.Input
            icon="dollar"
            placeholder="100.00"
            width={4}
            label="Value"
            iconPosition="left"
          />
        </Form.Group>
        <Button.Group style={{ marginTop: 20 }}>
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary style={{ color: "red", width: "84.64px" }}>
            Ok
          </Button>
        </Button.Group>
      </Form>
    </Container>
  );
}

export default App;
