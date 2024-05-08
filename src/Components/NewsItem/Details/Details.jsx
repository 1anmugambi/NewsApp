import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { lastUpdate, newsChannel } from "../Configuration/Config";

function Details(props) {
  const { channel, published } = props;

  return (
    <Card.Footer className="card-footer">
      <small className="text-muted">
        {newsChannel(channel)} - {lastUpdate(published)}
      </small>
    </Card.Footer>
  );
}

Details.propTypes = {
  channel: PropTypes.string,
  published: PropTypes.string,
};

export default Details;

