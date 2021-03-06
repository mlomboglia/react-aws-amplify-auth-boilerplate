import "./SignUpConfirmation.css";
import React from "react";
import PropTypes from "prop-types";
import {
      Button,
      HelpBlock,
      FormGroup,
      FormControl,
      ControlLabel
} from "react-bootstrap";

export const Component = ({
      formIsValid,
      handleSubmit,
      handleChange,
      confirmationCode
}) => (
      <div className="SignUpConfirmation simple-form">
            <form onSubmit={handleSubmit}>
                  <FormGroup controlId="confirmationCode" bsSize="large">
                        <ControlLabel>Confirmation Code</ControlLabel>
                        <FormControl
                              autoFocus
                              type="number"
                              value={confirmationCode}
                              onChange={handleChange}
                        />
                        <HelpBlock>
                              Please enter the confirmation code we sent to your
                              email address.
                        </HelpBlock>
                  </FormGroup>
                  <Button
                        block
                        bsSize="large"
                        disabled={!formIsValid}
                        type="submit"
                  >
                        Verify
                  </Button>
            </form>
      </div>
);

Component.defaultProps = {
      formIsValid: true,
      confirmationCode: ""
};

Component.propTypes = {
      formIsValid: PropTypes.bool,
      handleSubmit: PropTypes.func.isRequired,
      handleChange: PropTypes.func.isRequired,
      confirmationCode: PropTypes.string
};

export default Component;
