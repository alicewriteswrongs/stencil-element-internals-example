import { Component, Prop, h, FormInternals, Watch } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: {
    formAssociated: true
  }
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  @Watch("first")
  onFirstChange() {
    console.log('this:', this);
    console.log('this.internals:', this.internals);
  }

  @FormInternals() internals: ElementInternals;

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
