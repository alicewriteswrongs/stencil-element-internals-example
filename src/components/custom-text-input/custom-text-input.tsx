import { Component, h, FormInternals, State } from '@stencil/core';

@Component({
  tag: 'custom-text-input',
  styleUrl: 'custom-text-input.css',
  shadow: {
    formAssociated: true
  }
})
export class CustomTextInput {
  @State() value: string;

  @FormInternals() internals: ElementInternals;

  handleChange(event) {
    this.value = event.target.value;
    this.internals.setFormValue(event.target.value);
  }

  componentWillLoad() {
    this.internals.setFormValue("my default value");
  }

  render() {
    return (
      <input
        type="text"
        value={this.value}
        onInput={(event) => this.handleChange(event)}
      />
    )
  }
}
