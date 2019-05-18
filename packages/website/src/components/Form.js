import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button, Input, CodesDropdown } from 'cabify-components';
import { PageContext } from '../utils';

const Form = ({ onSubmit }) => {
  const {
    onChangeInput,
    errors,
    formIsNotEmpty,
    prefix,
    formSubmitting,
    formSubmitted,
  } = useContext(PageContext);

  const isNotEmpty = formIsNotEmpty();

  function subtmitHandler(event) {
    event.preventDefault();
    if (!formSubmitted) {
      onSubmit();
    }
  }

  let textButton = 'Request';
  if (formSubmitting) {
    textButton = 'Requesting ...';
  } 
  if (formSubmitted) {
    textButton = 'Done!';
  }
  return (
    <form onSubmit={subtmitHandler} className="form" action="">
      <div className="row">
        <div className="col col12">
          <Input
            type="text"
            label="Full Name"
            name="name"
            required
            onChange={onChangeInput}
            disabled={formSubmitting}
            error={errors.name}
          />
        </div>
      </div>
      <div className="row row-separationMedium">
        <div className="col col12">
          <Input
            type="text"
            label="Job description"
            name="job"
            required
            disabled={formSubmitting}
            onChange={onChangeInput}
            error={errors.job}
          />
        </div>
      </div>
      <div className="row row-separationMedium row-gutterMedium">
        <div className="col col3">
          <CodesDropdown
            name="prefix"
            defaultPrefix={prefix}
            onSelect={onChangeInput}
          />
        </div>
        <div className="col col9">
          <Input
            type="tel"
            placeholder="Phone number"
            name="phone"
            required
            disabled={formSubmitting}
            onChange={onChangeInput}
            error={errors.phone}
          />
        </div>
      </div>
      <div className="row row-separationMedium">
        <div className="col col12">
          <Input
            type="email"
            placeholder="Email"
            name="email"
            required
            disabled={formSubmitting}
            onChange={onChangeInput}
            error={errors.email}
          />
        </div>
      </div>
      <div className="row row-separationMedium">
        <div className="col col12">
          <Input
            type="text"
            name="website"
            value="www.cabify.com"
            disabled
            label="Website"
          />
        </div>
      </div>
      <div className="row row-separationMedium">
        <div className="col col12">
          <Input
            type="text"
            label="Address"
            name="address"
            required
            disabled={formSubmitting}
            onChange={onChangeInput}
            error={errors.address}
          />
        </div>
      </div>
      <div className="row row-separationHuge">
        <Button appearance={(isNotEmpty && !formSubmitting) ? 'active' : 'disabled'}>
          {textButton}
        </Button>
      </div>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  onSubmit: () => {}
};

export default Form;
